import PostPreview from 'components/post-preview';
import Abouts from 'types/about';

type Props = {
	abouts: Abouts[];
};

const MoreAbouts = ({ abouts }: Props) => {
	return (
		<section>
			<h2 className='mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight'>
				More Stories
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32'>
				{abouts.map(about => (
					<PostPreview
						key={about.slug}
						title={about.title}
						coverImage={about.coverImage}
						date={about.date}
						author={about.author}
						slug={about.slug}
						excerpt={about.excerpt}
					/>
				))}
			</div>
		</section>
	);
};

export default MoreAbouts;
