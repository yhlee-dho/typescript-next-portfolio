import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
	faGithub,
	faLinkedin,
	faTwitter,
	faDev,
	faMedium
} from '@fortawesome/free-brands-svg-icons';

export interface IconProps {
	href: string;
	name: string;
	icon: IconProp;
}

export const iconLinks: IconProps[] = [
	{
		href: 'https://github.com/yhlee-dho',
		name: 'github',
		icon: faGithub
	},
	{
		href: 'https://www.linkedin.com/in/yong-lee-a16430193/',
		name: 'linkedin',
		icon: faLinkedin
	},
	{
		href: 'https://twitter.com/yongstal',
		name: 'twitter',
		icon: faTwitter
	},
	// {
	// 	href: '',
	// 	name: 'dev',
	// 	icon: faDev
	// },
	// {
	// 	href: '',
	// 	name: 'medium',
	// 	icon: faMedium
	// }
];

const SocialMediaIcons = () => {
	const iconMap = iconLinks.map(link => {
	return	(
			<a
				key={link.name}
				aria-label={link.name}
				target='__blank'
				href={link.href}
				className='bg-tailwindBlue text-white hover:opacity-10 hover:bg-iconHoverTwo opacity-25 transform transition-colors duration-500 shadow-lg font-lg items-center justify-center align-center outline-none focus:outline-none rounded-full py-2 px-3 inline-block text-center'
			>
				<FontAwesomeIcon icon={link.icon} size='2x' />
			</a>
		)
});
	return (
		<div className='flex flex-wrap transform duration-1000'>
			<ul className='flex flex-row mx-auto lg:flex-row list-none lg:mx-auto py-1 '>
				<li>{iconMap}</li>
			</ul>
		</div>
	);
};

export default SocialMediaIcons;

// faGoogle,
// faLinkedin,
// faSnapchat
