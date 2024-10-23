import type { PersonalInfo, SocialMediaItem, WorkExperienceItem } from '@/types';

export const PERSONAL_INFO: PersonalInfo = {
	name: 'Shashikanth Reddy',
	email: 'kolanshashii@gmail.com',
	role: 'Full-Stack Engineer',
	about: `I'm a Software Engineer with over two years of experience in full-stack development, currently pursuing my Master's degree in Computer Science at <a href="https://github.com/thevrus/vrus.vercel.app" target="_blank" rel="nopener noreferrer" class="font-medium hover:text-indigo-400 hover:underline focus-visible:text-indigo-400">Kennesaw State University</a>. My journey into tech began with Brad Traversy's HTML & CSS crash course on YouTube, sparking my love for building things and turning into a passion for coding and full-stack development.

	Since then, I've worked in various environments, from startups to established companies, focusing on creating user-friendly applications that are attractive, easy to navigate, and efficient behind the scenes. I enjoy simplifying complex tasks to enhance the user experience. Proficient in languages like Java, JavaScript, and Python, I've also worked with frameworks like Spring Boot, React, and Next.js.

	Always open to new opportunities and collaborations—let's create something amazing together!
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
			'Improved the internal logging framework, ensuring sensitive data was masked and privacy standards were met. Automated the sending of physical mail through third-party services, which reduced manual work and ensured timely delivery. Also created a reminder system that kept agents informed about scheduled interactions, improving response times and overall customer engagement.',
		technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'AWS']
	},
	{
		company: 'Alippo',
		url: 'https://alippo.com',
		role: 'Software Engineer',
		startDate: 'August 2022',
		endDate: 'February 2024',
		description:
			'As part of the core team at this fast-growing startup, contributed to building and scaling key features. Integrated an in-app currency system into the checkout process for Android and iOS platforms, streamlining payments and reducing customer drop-offs. Redesigned the analytics service to work with multiple platforms, enabling comprehensive data collection and deeper business insights. Improved API security by implementing HMAC after a DDoS attack and optimized database queries with indexing, resulting in faster API response times and a smoother user experience.',
		technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React']
	},
	{
		company: 'Alippo',
		url: 'https://alippo.com',
		role: 'Software Engineer Intern',
		startDate: 'April 2022',
		endDate: 'July 2022',
		description:
			'Developed a user-friendly activation screen and dashboard for the in-app currency system, leading to a smoother checkout experience. Improved internal workflows by enhancing the dashboard with advanced search, filtering, and order management tools, boosting operational efficiency. Leveraged TypeScript to improve code quality and maintainability, ensuring a scalable and reliable codebase.',
		technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript']
	}
];
