import Head from 'next/head';
import { CMS_NAME, HOME_OG_IMAGE_URL } from 'lib/constants';
import { Fragment, FC } from 'react';
// import getSiteMetaData from 'utils/helpers';

// interface SeoMeta {
// 	title?: string;
// 	description?: string;
// }

// export interface SeoMetaFunctional extends FC<SeoMeta>{}

const MetaData = () => {
	// const siteMetaData = getSiteMetaData();
	return (
		<Fragment>
			<Head>
				<link
					rel='apple-touch-icon'
					type='img/png'
					sizes='180x180'
					href='/fav/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/fav/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/fav/favicon-16x16.png'
				/>
				<link rel='manifest' href='/fav/manifest.json' />
				<link rel='mask-icon' href='/fav/safari-pinned-tab.svg' color='#000000' />
				<link rel='shortcut icon' href='/fav/favicon2.ico' />
				<link rel='canonical' href='https://typescript-next-portfolio-yhlee.vercel.app/' />
				<meta name='robots' content='all' />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5'
				/>
				<meta name='format-detection' content='telephone=no' />
				<title>Yong Lee — Full-Stack Engineer</title>
				<meta name='msapplication-TileColor' content='#000000' />
				<meta name='msapplication-config' content='/fav/browserconfig.xml' />
				<meta name='theme-color' content='#000000' />
				<link rel='alternate' type='application/rss+xml' href='/feed.xml' />
				<meta
					name='description'
					content={`${CMS_NAME} created using Next.js. Yong Lee is a full stack engineer who specializes in Next.js, TypeScript, React, GraphQL, MongoDB, Tailwind CSS, and Static Site Generation`}
				/>
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='keywords'
					content='nextjs, typescript, react, react-markdown, static site generation, tailwindcss, vercel, figma'
				/>
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@yongstal' />
				<meta name='twitter:title' content='Yong Lee — Full-Stack Engineer' />
				<meta
					name='twitter:description'
					content={`${CMS_NAME} created using Next.js. Yong Lee is a full stack engineer who specializes in Next.js, TypeScript, React, GraphQL, MongoDB, Tailwind CSS, and Static Site Generation`}
				/>
				<meta name='twitter:image' content={HOME_OG_IMAGE_URL} />
				<meta name='twitter:creator' content='@yongstal' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://typescript-next-portfolio-yhlee.vercel.app/' />
				<meta property='og:title' content='Yong Lee — Full-Stack Engineer' />
				<meta
					property='og:description'
					content={`${CMS_NAME} created using Next.js. Yong Lee is a full stack engineer who specializes in Next.js, TypeScript, React, GraphQL, MongoDB, Tailwind CSS, and Static Site Generation`}
				/>
				<meta property='og:image' content={HOME_OG_IMAGE_URL} />
				<meta property='og:image:width' content='2048' />
				<meta property='og:image:height' content='1170' />
			</Head>
		</Fragment>
	);
};

export default MetaData;
