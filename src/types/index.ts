export type PersonalInfo = {
	name: string;
	email: string;
	role: string;
	about: string;
};

export type SocialMediaItemType = 'GITHUB' | 'LINKEDIN' | 'INSTAGRAM' | 'TWITTER';

export type SocialMediaItem = {
	type: SocialMediaItemType;
	name: string;
	url: string;
};

export type WorkExperienceItem = {
	company: string;
	url: string;
	role: string;
	startDate: string;
	endDate: string;
	description: string;
	technologies: string[];
};

export type IconType = SocialMediaItemType | 'ARROW';

export type CursorContextProps = {
	radius: number;
	transitionSpeed: number;
	parallaxIndex: number;
	hoverPadding: number;
};

export type CommonSeoMetaData = {
	author: string;
	applicationName: string;
	twitterHandle: string;
};

export type PageType = 'home';

export type PageSeoMetaData = {
	title: string;
	description: string;
	alt: string;
	robots?: 'index, follow' | 'noindex, follow' | 'noindex, nofollow';
};
