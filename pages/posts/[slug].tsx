import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from 'components/container';
import PostBody from 'components/post-body';
import Header from 'components/header';
import PostHeader from 'components/post-header';
import Layout from 'components/layout';
import { getPostBySlug, getAllPosts } from 'lib/api';
import PostTitle from 'components/post-title';
import Head from 'next/head';
import { CMS_NAME } from 'lib/constants';
import markdownToHtml from 'lib/markdownToHtml';
import PostType from 'types/post';
import { Fragment } from 'react';
import MoreCards from 'components/more-cards';

type SlugProps = {
	post: PostType;
	posts: PostType[];
	preview?: boolean;
	props: string | number;
};

const Post = ({ post, posts, preview, props }: SlugProps) => {
	const morePosts = posts?.slice(1);
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Fragment>
			<Header props={props} />
			<Layout preview={preview}>
				<Container>
					{router.isFallback ? (
						<PostTitle>Loading…</PostTitle>
					) : (
						<>
							<article className='mb-32'>
								<Head>
									<title>
										{post.title} | Next.js Portfolio with {CMS_NAME}
									</title>
									<meta property='og:image' content={post.ogImage.url} />
								</Head>
								<PostHeader
									title={post.title}
									coverImage={post.coverImage}
									date={post.date}
									author={post.author}
								/>
								<PostBody content={post.content} />
							</article>
							<div className='max-w-5xl grid mx-auto content-center justify-center items-center text-center'>
								{morePosts?.length > 0 && <MoreCards posts={morePosts} />}
							</div>
						</>
					)}
				</Container>
			</Layout>
		</Fragment>
	);
};

export default Post;

type Params = {
	params: {
		slug: string;
	};
};

export async function getStaticProps({ params }: Params) {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'author',
		'content',
		'ogImage',
		'coverImage'
	]);
	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			post: {
				...post,
				content
			}
		}
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug']);

	return {
		paths: posts.map(posts => {
			return {
				params: {
					slug: posts.slug
				}
			};
		}),
		fallback: false
	};
}
