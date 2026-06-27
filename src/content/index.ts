import type { EducationItem, PersonalInfo, SkillItem, SocialMediaItem, WorkExperienceItem } from '@/types';

export const PERSONAL_INFO: PersonalInfo = {
	name: 'Shashikanth Reddy',
	email: 'hello@shashikanth.dev',
	role: 'Full-Stack Engineer',
	about: `I'm a Software Engineer with four plus years of production experience building scalable, reliable software across the full stack. My journey into tech started with Brad Traversy's HTML & CSS crash course on YouTube, and turned into a career spent shipping real production systems across the stack.

	I work primarily with Java and Spring Boot on the backend, and React, Next.js, and TypeScript on the frontend, with PostgreSQL, AWS, and Kubernetes rounding out the stack. I care most about the parts of engineering that don't show up in a demo, like query performance, API security, and making sure the system behaves the same way at 2am as it does in a code review.

	Outside of work I'm usually deep in a side project or learning something adjacent to my day job. Always open to interesting problems and good collaborators, so feel free to reach out below.
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

export const SKILLS: SkillItem[] = [
	{ name: 'Java' },
	{ name: 'Kotlin' },
	{ name: 'JavaScript' },
	{ name: 'TypeScript' },
	{ name: 'Python' },
	{ name: 'Go' },
	{ name: 'SQL' },
	{ name: 'React' },
	{ name: 'Next.js' },
	{ name: 'Angular' },
	{ name: 'Redux' },
	{ name: 'Tailwind CSS' },
	{ name: 'Spring Boot' },
	{ name: 'Node.js' },
	{ name: 'Express.js' },
	{ name: 'REST APIs' },
	{ name: 'GraphQL' },
	{ name: 'Microservices' },
	{ name: 'PostgreSQL' },
	{ name: 'MySQL' },
	{ name: 'MongoDB' },
	{ name: 'Redis' },
	{ name: 'Elasticsearch' },
	{ name: 'DynamoDB' },
	{ name: 'Apache Kafka' },
	{ name: 'RabbitMQ' },
	{ name: 'Docker' },
	{ name: 'Kubernetes' },
	{ name: 'Jenkins' },
	{ name: 'GitHub Actions' },
	{ name: 'Prometheus' },
	{ name: 'Grafana' },
	{ name: 'AWS' },
	{ name: 'GCP' },
	{ name: 'Git' }
];

export const WORK_EXPERIENCES: WorkExperienceItem[] = [
	{
		company: 'Wisdom Square Technologies',
		url: 'https://wisdomsquare.net',
		role: 'Software Engineer',
		startDate: 'March 2024',
		endDate: 'Present',
		description:
			"Built a secure file transfer platform integrating AWS S3, SFTP, and third-party storage providers for automated cross-platform document exchange across 20+ enterprise clients. Redesigned the authentication and authorization layer using OAuth 2.0 and JWT, enforcing fine-grained role-based access control across 12+ microservices. Developed a self-healing retry mechanism for distributed background jobs, and introduced API rate limiting and circuit breaker patterns that improved production availability to 99.95%. Also helped migrate legacy deployment scripts to containerized Kubernetes workloads, cutting deployment time from 25 minutes to under 5.",
		technologies: ['Java', 'Spring Boot', 'AWS', 'Kubernetes', 'PostgreSQL']
	},
	{
		company: 'Alippo',
		url: 'https://alippo.com',
		role: 'Software Engineer',
		startDate: 'August 2022',
		endDate: 'February 2024',
		description:
			'Owned the Alippo Money checkout integration for Android and iOS, implementing in-app purchase gateways with server-side receipt validation that increased checkout completion and cut fraudulent transactions. Neutralized an active DDoS attack on a critical payment API by designing and deploying HMAC-SHA256 request authentication. Refactored the analytics service into a provider-agnostic event routing layer, and optimized high-frequency queries via index tuning, cutting API response time by over half under peak load. Introduced Kafka-based async processing to decouple notifications from the core checkout flow.',
		technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Kafka', 'React']
	},
	{
		company: 'Alippo',
		url: 'https://alippo.com',
		role: 'Software Engineer Intern',
		startDate: 'April 2022',
		endDate: 'July 2022',
		description:
			'Built the Alippo Money onboarding UI, including the activation screen and an interactive dashboard, improving first-session purchase conversion. Migrated 30+ frontend components to TypeScript, reducing runtime type errors and improving maintainability. Extended the JHipster admin dashboard with advanced search, bulk course cloning, and manual order management, cutting internal ops ticket resolution time.',
		technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript']
	}
];

export const EDUCATION: EducationItem[] = [
	{
		institution: 'Kennesaw State University',
		location: 'Marietta, United States',
		degree: 'Master of Science, Computer Science',
		startDate: 'August 2024',
		endDate: 'May 2026'
	},
	{
		institution: 'Anurag University',
		location: 'Hyderabad, India',
		degree: 'Bachelor of Engineering, Information Technology',
		startDate: 'July 2018',
		endDate: 'May 2022'
	}
];
