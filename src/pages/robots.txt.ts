import type { APIContext } from 'astro';

export const prerender = true;

const getSiteOrigin = ({ site, url }: APIContext) => {
	const origin = site?.origin ?? url.origin;
	return origin.endsWith('/') ? origin.slice(0, -1) : origin;
};

export function GET(context: APIContext) {
	const siteOrigin = getSiteOrigin(context);

	return new Response(
		[
			'User-agent: *',
			'Allow: /',
			`Sitemap: ${siteOrigin}/sitemap.xml`,
			'',
		].join('\n'),
		{
			headers: {
				'Content-Type': 'text/plain; charset=utf-8',
			},
		}
	);
}
