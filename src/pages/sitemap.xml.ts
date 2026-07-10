import path from 'node:path';
import type { APIContext } from 'astro';

export const prerender = true;

const songModules = import.meta.glob('../content/cantos/*.md', { eager: true });

const staticRoutes = [
	{ path: '/', priority: '1.0', changefreq: 'weekly' },
	{ path: '/cantos', priority: '0.9', changefreq: 'weekly' },
	{ path: '/tiempos-liturgicos', priority: '0.8', changefreq: 'monthly' },
	{ path: '/tipos-de-misas', priority: '0.8', changefreq: 'monthly' },
	{ path: '/recursos', priority: '0.8', changefreq: 'monthly' },
	{ path: '/recursos/acordes', priority: '0.7', changefreq: 'monthly' },
	{ path: '/recursos/audio-video', priority: '0.6', changefreq: 'monthly' },
	{ path: '/recursos/guia-cantores', priority: '0.7', changefreq: 'monthly' },
	{ path: '/recursos/guias', priority: '0.7', changefreq: 'monthly' },
	{ path: '/recursos/planeaciones', priority: '0.7', changefreq: 'monthly' },
	{ path: '/sobre-nosotros', priority: '0.6', changefreq: 'monthly' },
	{ path: '/donativos', priority: '0.5', changefreq: 'monthly' },
];

const songRoutes = Object.keys(songModules)
	.map(file => ({
		path: `/cantos/${path.basename(file, '.md')}`,
		priority: '0.7',
		changefreq: 'monthly',
	}))
	.sort((a, b) => a.path.localeCompare(b.path));

const escapeXml = (value: string) =>
	value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');

const getSiteOrigin = ({ site, url }: APIContext) => {
	const origin = site?.origin ?? url.origin;
	return origin.endsWith('/') ? origin : `${origin}/`;
};

export function GET(context: APIContext) {
	const siteOrigin = getSiteOrigin(context);
	const routes = [...staticRoutes, ...songRoutes];
	const urls = routes
		.map(route => {
			const loc = new URL(route.path, siteOrigin).toString();

			return [
				'	<url>',
				`		<loc>${escapeXml(loc)}</loc>`,
				`		<changefreq>${route.changefreq}</changefreq>`,
				`		<priority>${route.priority}</priority>`,
				'	</url>',
			].join('\n');
		})
		.join('\n');

	return new Response(
		[
			'<?xml version="1.0" encoding="UTF-8"?>',
			'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
			urls,
			'</urlset>',
		].join('\n'),
		{
			headers: {
				'Content-Type': 'application/xml; charset=utf-8',
			},
		}
	);
}
