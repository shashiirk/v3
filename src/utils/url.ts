import { getActiveEnv } from '@/utils/env';

export type Uri = `/${string}/` | `/`;

export const getUrlFromUri = (uri: Uri) => {
	const env = getActiveEnv();

	const url = new URL(env === 'production' ? 'https://shashikanth.dev' : 'http://localhost:3000');

	url.pathname = uri;

	return url.href;
};
