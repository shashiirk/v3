import type { PersonalInfo, SocialMediaItem, WorkExperienceItem } from '@/types';

export const PERSONAL_INFO: PersonalInfo = {
	name: 'Shashikanth Reddy',
	email: 'kolanshashii@gmail.com',
	role: 'Full-Stack Engineer',
	about: `In my current role as a Full Stack Engineer at Dutch Pet (Remote), I am at the forefront of designing and architecting dutch.com, leveraging a powerful stack including Shopify Storefront API, Admin API, Vue.JS, Node.JS, Liquid, Alpine.js, and Tailwind. My expertise extends to integrating with the ReCharge subscription system and collaborating closely with designers to ensure pixel-perfect layouts and user flows.
	
	Looking forward to new challenges and exciting collaborations!
  `
};

export const SOCIAL_MEDIA_ITEMS: SocialMediaItem[] = [
	{
		type: 'GITHUB',
		name: 'Github',
		url: 'https://github.com/shashiirk'
	},
	{
		type: 'LINKEDIN',
		name: 'Linkedin',
		url: 'https://www.linkedin.com/in/shashiirk'
	},
	{
		type: 'INSTAGRAM',
		name: 'Instagram',
		url: 'https://www.instagram.com/shashiirk'
	},
	{
		type: 'TWITTER',
		name: 'X (Twitter)',
		url: 'https://x.com/shashiirk'
	}
];

export const WORK_EXPERIENCES: WorkExperienceItem[] = [
	{
		company: 'Wisdom Square Technologies',
		url: 'https://wisdomsquare.net',
		role: 'Programmer',
		startDate: 'March 2024',
		endDate: 'July 2024',
		description:
			'Designed and architected dutch.com, utilizing technologies such as Shopify Storefront API, Admin API, Vue.JS, Node.JS, Liquid, Alpine.js, and Tailwind. Worked on integrating with the ReCharge subscription system and collaborated closely with designers to implement pixel-perfect layouts and user flows.',
		technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'AWS']
	},
	{
		company: 'Alippo',
		url: 'https://alippo.com',
		role: 'Software Engineer',
		startDate: 'August 2022',
		endDate: 'February 2024',
		description:
			'Developed and maintained e-commerce solutions on Shopify (Storefront API, Admin API), BigCommerce, and Magento using React JS, Vue JS, Node JS, Liquid, SASS/PostCSS. Worked on integrating with the ReCharge subscription system and collaborated closely with designers to implement pixel-perfect layouts and user flows.',
		technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React']
	},
	{
		company: 'Alippo',
		url: 'https://alippo.com',
		role: 'Software Engineer Intern',
		startDate: 'April 2022',
		endDate: 'July 2022',
		description:
			'Created a Design System for the internal system using Figma. Developed a plugin for Figma to populate prototypes with real data to enhance the prototyping and testing experience. Conducted user research and testing, and created user flows, wireframes, and Hi-Fi prototypes.',
		technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript']
	}
];
