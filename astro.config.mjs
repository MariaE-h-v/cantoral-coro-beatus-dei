// @ts-check
import { defineConfig } from 'astro/config';

const vercelSite =
	process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL ?? '';
const site = process.env.PUBLIC_SITE_URL ?? (vercelSite ? `https://${vercelSite}` : '');

// https://astro.build/config
export default defineConfig({
	...(site ? { site } : {}),
});
