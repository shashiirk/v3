import type { CommonSeoMetaData, PageSeoMetaData, PageType } from '@/types';

export const COMMON_SEO_METADATA: CommonSeoMetaData = {
	author: 'Shashikanth Reddy',
	applicationName: 'shashikanth.dev',
	twitterHandle: '@shashiirk'
};

export const PAGE_SEO_METADATA: Record<PageType, PageSeoMetaData> = {
	home: {
		title: 'Shashikanth Reddy | Full-Stack Engineer',
		description:
			'Full-Stack Engineer specializing in building scalable web applications using modern technologies like React, Next.js, Node.js, and Spring Boot.',
		alt: 'Portfolio homepage, showcasing professional experience',
		robots: 'index, follow'
	}
};
