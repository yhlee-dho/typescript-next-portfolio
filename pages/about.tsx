import Head from 'next/head';
import { GetStaticProps } from 'next';
import Header from 'components/header';
import Layout from 'components/layout';
import Container from 'components/container';
import Intro from 'components/intro';
import HeroAbout from 'components/hero-post-about';
import { CLIENT_NAME } from 'lib/constants';
import { getAllAbouts } from 'lib/about-api';
import AboutType from 'types/about';
import MoreAbouts from 'components/more-abouts';
import LandingSidebar from 'components/landing-sidebar';

interface AboutProps {
	props: string | number;
	preview?: boolean;
	allAbouts: AboutType[];
}

const About = ({ allAbouts, preview, props }: AboutProps) => {
	const heroAbout = allAbouts[0];
	const moreAbouts = allAbouts.slice(1);
	return (
		<>
			<Header props={props} />
			<Layout preview={preview}>
				<LandingSidebar />
				<Head>
					<title>{`${CLIENT_NAME}'s about page`}</title>
				</Head>
				<Container>
					<Intro props={props} />
					{heroAbout && (
						<HeroAbout
							title={heroAbout.title}
							coverImage={heroAbout.coverImage}
							date={heroAbout.date}
							author={heroAbout.author}
							slug={heroAbout.slug}
							excerpt={heroAbout.excerpt}
						/>
					)}
					{moreAbouts.length > 0 && <MoreAbouts abouts={moreAbouts} />}
				</Container>
			</Layout>
		</>
	);
};

export default About;

export const getStaticProps = async ({}: GetStaticProps) => {
	const allAbouts = getAllAbouts([
		'title',
		'date',
		'slug',
		'author',
		'coverImage',
		'excerpt'
	]);

	return {
		props: { allAbouts }
	};
};

