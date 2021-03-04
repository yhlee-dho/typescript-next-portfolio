import Head from 'next/head';
import Link from 'next/link';
import Header from 'components/header';
import Layout from 'components/layout';
import Container from 'components/container';
import { CLIENT_NAME } from 'lib/constants';

import PostHeader from 'components/post-header';
import PostBody from 'components/post-body';
import Blog from 'types/blog';

import markdownToHtml from 'lib/markdownToHtml';
import { getAboutBySlug } from 'lib/about-api';
import { GetStaticProps } from 'next';

import AboutType from 'types/about';


interface AboutProps {
	props: string | number;
	preview?: boolean;
	about: AboutType;
}



const About = ({ about, props, preview }: AboutProps) => {
	return (
		<>
			<Header props={props} />
			<Layout preview={preview}>
				<Head>
					<title>{`${CLIENT_NAME} about page`}</title>
					
				</Head>
				<Container>
					<br/>
					<h2 className='hover:text-tailwindBlue text-cimaRed text-3xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
						<Link href='/about'>
							<a className='hover:text-tailwindBlue text-cimaRed px-8'>{ `Hello!, my name is ${CLIENT_NAME}.`}</a>
						</Link>
						{/* {`Hello, my name is ${CLIENT_NAME}!`} */}
						
					</h2>
					<p>I am a full stack web developer with a background in marketing and publishing.</p>
					<p>In order to make the transition from my previous background to the coding world I co-founded a web development company named Windy City Devs.</p>					
					<p>Although I do constantly learn new ways to develop different websites, I received my initial training at Northwestern University through the school of professional studies’ full stack web development program.</p>
					<p>Prior to that I was involved in a variety of different opportunities. I owned an internet cafe business, I worked for a local politician, and a local newspaper publisher.</p>					
					<p>By utilizing all of my past experiences, I am excited to work together with coworkers to overcome challenges.</p>
					
					{/* <PostHeader
						title={about.title}
						coverImage={about.coverImage}
						date={about.date}
						author={about.author}
					/>
					<PostBody content={about.content} /> */}
				</Container>

			</Layout>
		</>
	)
}

export default About;

// interface AboutParams {
// 	params: {
// 		slug: string;
// 	};
// }
// export const getStaticProps = async ({ params }: AboutParams) => {
// 	const about = getAboutBySlug( params.slug, [
// 		'title',
// 		'date',
// 		'slug',
// 		'author',
// 		'content',
// 		'ogImage',
// 		'coverImage'
// 	])
// 	const aboutContent = await markdownToHtml(about.content || '');
// 	return {
// 		props: {
// 			about: {
// 				...about,
// 				aboutContent
// 			}
// 		}
// 	}
// }


// getStaticProps({ params }: AboutProps) {
// 	const about = getAboutBySlug(params.slug, [
// 		'title',
// 		'date',
// 		'slug',
// 		'author',
// 		'content',
// 		'ogImage',
// 		'coverImage'
// 	])
// 	const aboutContent = await markdownToHtml(about.content || '');
// 	return {
// 		props: {
// 			about: {
// 				...about,
// 				aboutContent
// 			}
// 		}
// 	}
// }
// async function About = getStaticProps({ props, preview, params }: AboutProps) => {
// 	// getStaticProps({ params }) {
// 		const about = getAboutBySlug(params.slug, [
// 			'title',
// 			'date',
// 			'slug',
// 			'author',
// 			'content',
// 			'ogImage',
// 			'coverImage'			
// 		])

// 		const aboutContent = await markdownToHtml(about.content || '');

		// return {
		// 	props: {
		// 		about: {
		// 			...about,
		// 			aboutContent
		// 		}
		// 	}
		// }
// 	}
// }

// async function getStaticProps({ props, preview, params }: AboutProps) {
// 	const about = getAboutBySlug(params.slug, [
// 		'title',
// 		'date',
// 		'slug',
// 		'author',
// 		'content',
// 		'ogImage',
// 		'coverImage'
// 	])
// 	const aboutContent = await markdownToHtml(about.content || '');

// 	const About = ({ props, preview, params})
// }

// async function getStaticProps({ params }: AboutProps) {
// 	const about = getAboutBySlug(params.slug, [
// 		'title',
// 		'date',
// 		'slug',
// 		'author',
// 		'content',
// 		'ogImage',
// 		'coverImage'
// 	])
// 	const aboutContent = await markdownToHtml(about.content || '');

// const About = ({ preview, props, params }: AboutProps) => {
	

// 		return (
// 			<>
// 				<Header props={props} />
// 				<Layout preview={preview}>
// 				<Head>
// 					<title>{`${CLIENT_NAME} about page`}</title>

// 				</Head>
				// <Container>
				// 	{/* <br/>
				// 	<h2 className='hover:text-tailwindBlue text-cimaRed text-3xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
				// 		<Link href='/about'>
				// 			<a className='hover:text-tailwindBlue text-cimaRed px-8'>{ `Hello!, my name is ${CLIENT_NAME}.`}</a>
				// 		</Link>
				// 		{`Hello, my name is ${CLIENT_NAME}!`}
				// 	</h2> */}




					
				// </Container>
// 			</Layout>
// 			</>
// 		)
// 	}

// }

// export default About;