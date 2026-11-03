import type { Config } from '@react-router/dev/config';

const staticSite = process.env.STATIC_SITE === '1';

export default {
	appDirectory: 'src',
	buildDirectory: '../../dist/apps/web',
	// Keep SSR so server route exports (headers, resource loaders) stay valid.
	// When STATIC_SITE=1 we also prerender `/` and `/ar` into the client output
	// so those HTML files can be uploaded to any static host.
	ssr: true,
	...(staticSite
		? {
				prerender: ['/', '/ar'],
			}
		: {}),
} satisfies Config;
