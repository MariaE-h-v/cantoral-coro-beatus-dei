export const normalizeLiturgicalText = (value: unknown) =>
	String(value ?? '')
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase();

export const liturgicalBackgrounds = [
	{
		path: '/assets/detalle-bg-triduo-pascual.webp',
		matches: ['triduo', 'semana santa', 'jueves santo', 'viernes santo', 'vigilia pascual'],
	},
	{
		path: '/assets/detalle-bg-pascua.webp',
		matches: ['pascua', 'pascual'],
	},
	{
		path: '/assets/detalle-bg-cuaresma.webp',
		matches: ['cuaresma'],
	},
	{
		path: '/assets/detalle-bg-adviento.webp',
		matches: ['adviento'],
	},
	{
		path: '/assets/detalle-bg-navidad.webp',
		matches: ['navidad', 'natividad'],
	},
	{
		path: '/assets/detalle-bg-santos.webp',
		matches: ['santos', 'santo', 'solemnidad', 'fiesta'],
	},
	{
		path: '/assets/detalle-bg-tiempo-ordinario.webp',
		matches: ['ordinario'],
	},
];

export const getLiturgicalBackground = (...values: unknown[]) => {
	const liturgicalParts = values
		.flatMap(value => (Array.isArray(value) ? value : [value]))
		.map(normalizeLiturgicalText);

	for (const liturgicalText of liturgicalParts) {
		const background = liturgicalBackgrounds.find(background =>
			background.matches.some(match => liturgicalText.includes(match))
		);

		if (background) return background.path;
	}

	return '';
};
