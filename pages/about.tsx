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
import Alert from '../components/alert';


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
					<br />
					
					<h2 className='hover:text-tailwindBlue text-black text-3xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
						<Link href='/about'>
							<a className='hover:text-tailwindBlue text-black px-8'>{ `Hello, my name is ${CLIENT_NAME}!`}</a>
						</Link>
						{/* {`Hello, my name is ${CLIENT_NAME}!`} */}
						
					</h2>
					<p className='hover:text-tailwindBlue text-fiveOBlack text-1x1 font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
						I am a full stack web developer at Windy City Devs.
						</p>
					
					<p className='hover:text-tailwindBlue text-fiveOBlack text-1x1 font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
						On July of 2020 I co-founded Windy City Devs with Joe Shields and Andrew Ross.
						Our goal was to immerse ourselves into the web development industry so that we may improve our coding skills
						and we strive to go over and beyond each day.
						</p>
					
					<p className='hover:text-tailwindBlue text-fiveOBlack text-1x1 font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
						At Windy City Devs, we utilize Typescript for its superior error handling capabilities,
						and Next.js as our framework of choice for its compatability with Typescript and its amazingly simple Vercel intedration for deployment.
						Our styling of choice is Tailwinds.css for its ease of utilizing class names.
						For our databases we favor MongoDB because of its accessibility to other coding languages.
						Lastly, for our servers we utilize AWS Lightsail.
						Althought it does lack some answers in stack overflow, its test environment allows for quick testing.
						</p>
					
					<p className='hover:text-tailwindBlue text-fiveOBlack text-1x1 font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
						I received my initial training at Northwestern University through the school of professional studies’
						full stack web development program.
						</p>
				
					<p className='hover:text-tailwindBlue text-fiveOBlack text-1x1 font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'>
						Prior to my assimilation to code, my background was in marketing and publishing.
						Korea Times is a ethnic local newspaper company that serve 23 midwest states as a daily newspaper publisher.
						At Korea Times I managed daily operations and edited the U.S. sections.
						</p>
					
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
