import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { Fragment } from 'react';
import { getAboutBySlug, getAllAbouts } from 'lib/about-api';
import { CMS_NAME } from 'lib/constants';
import markdownToHtml from 'lib/markdownToHtml';
import Container from 'components/container';
import AboutPostBody from 'components/post-body-about';
import AboutPostHeader from 'components/post-header-about';
import Header from 'components/header';
import AboutPostTitle from 'components/post-title-about';
import Layout from 'components/layout';
import About from 'types/about';

interface AboutInterface {
	about: About;
	moreAbouts: About[];
	preview?: boolean;
	props: string | number;
}

const Abouts = ({ about, moreAbouts, preview, props }: AboutInterface) => {
	const router = useRouter();
	if (!router.isFallback && !about?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Fragment>
			<Header props={props} />
			<Layout preview={preview}>
				<Container>
					{router.isFallback ? (
						<AboutPostTitle>Loading...</AboutPostTitle>
					) : (
						<article className='mb-16'>
							<Head>
								<title>
									{about.title} | Next.js Portfolio with {CMS_NAME}
								</title>
								<meta property='og:image' content={about.ogImage.url} />
							</Head>
							<AboutPostHeader
								title={about.title}
								coverImage={about.coverImage}
								date={about.date}
								author={about.author}
							/>
							<AboutPostBody content={about.content} />
						</article>
					)}
				</Container>
			</Layout>
		</Fragment>
	);
};

export default Abouts;

interface AboutParams {
	params: {
		slug: string;
	};
}

export async function getStaticProps({ params }: AboutParams) {
	const about = getAboutBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'author',
		'content',
		'ogImage',
		'coverImage'
	]);

	const aboutContent = await markdownToHtml(about.content || '');

	return {
		props: {
			about: {
				...about,
				aboutContent
			}
		}
	};
}

export async function getStaticPaths() {
	const abouts = getAllAbouts(['slug']);

	return {
		paths: abouts.map(about => {
			return {
				params: {
					slug: about.slug
				}
			};
		}),
		fallback: false
	};
}
