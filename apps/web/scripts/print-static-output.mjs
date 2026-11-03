import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const out = path.join(root, 'dist/apps/web/client');

console.log(`
Static files ready: ${out}

Deploy that folder to any static host (Netlify, Cloudflare Pages, GitHub Pages,
Hostinger static, S3+CloudFront, etc.).

Forms still need a reachable PocketBase API. Set this before building if you are
not on Hostinger Horizons:

  VITE_POCKETBASE_URL=https://your-pocketbase-host

Optional SEO origin during prerender:

  SITE_ORIGIN=https://your-domain.com
`);
