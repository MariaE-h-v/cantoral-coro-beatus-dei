export const resourceCategories = [
	{
		title: 'Partituras y Acordes',
		description: 'PDFs organizados para preparar acompañamientos de piano y guitarra.',
		icon: '♬',
		href: '/recursos/acordes',
		meta: 'Piano y guitarra',
	},
	{
		title: 'Guías para Músicos',
		description: 'Criterios prácticos para elegir cantos y servir mejor en la liturgia.',
		icon: '👥',
		href: '/recursos/guias',
		meta: 'Formación',
	},
	{
		title: 'Guía para Cantores',
		description: 'Pautas de respiración, dicción, escucha y servicio para cantar mejor.',
		icon: '🎙️',
		href: '/recursos/guia-cantores',
		meta: 'Voz y servicio',
	},
	{
		title: 'Audios y Videos',
		description: 'Videos de referencia para escuchar, aprender y preparar ensayos.',
		icon: '▶',
		href: '/recursos/audio-video',
		meta: 'YouTube',
	},
	{
		title: 'Planeaciones Litúrgicas',
		description: 'PDFs para organizar repertorio por domingo, solemnidad o tiempo litúrgico.',
		icon: '📅',
		href: '/recursos/planeaciones',
		meta: 'PDFs',
	},
	{
		title: 'Tipos de Misas',
		description: 'Guía para elegir cantos en sacramentos, acción de gracias y celebraciones de la Palabra.',
		icon: '✚',
		href: '/tipos-de-misas',
		meta: 'Guía',
	},
];

export const sheetTabs = [
	{
		id: 'piano',
		label: 'Piano',
		description:
			'Partituras pensadas para acompañar con introducción, armonía base y apoyo melódico.',
		items: [
			{
				title: 'Cantoral Liturgico',
				season: 'Ordinario',
				level: 'Intermedio',
				href: '/recursos/pdfs/piano/cantoral-de-cantos-litugicos.pdf',
			}
		],
	},
	{
		id: 'gregorian',
		label: 'Gregoriano',
		description:
			'Partituras de canto llano para acompañar la liturgia con melodías tradicionales.',
		items: [
			{
				title: 'Veni creator Spiritus',
				season: 'Pentecostés',
				level: 'Intermedio',
				href: 'https://www.verbumgloriae.es/project/veni-creator-spiritus/',
			}
		],
	},
	{
		id: 'guitarra',
		label: 'Guitarra',
		description:
			'Acordes cifrados con guía de rasgueo, tono sugerido y estructura para ensamble.',
		items: [
			{
				title: 'Pan de Vida',
				season: 'Tiempo ordinario',
				level: 'Básico',
				href: '/recursos/pdfs/guitarra/pan-de-vida-guitarra.pdf',
			},
			{
				title: 'Canta al Señor',
				season: 'Tiempo ordinario',
				level: 'Básico',
				href: '/recursos/pdfs/guitarra/canta-al-senor-guitarra.pdf',
			},
			{
				title: 'Ofertorio de la Luz',
				season: 'Cuaresma',
				level: 'Intermedio',
				href: '/recursos/pdfs/guitarra/ofertorio-luz-guitarra.pdf',
			},
			{
				title: 'Hoy es tiempo de santos',
				season: 'Tiempo ordinario',
				level: 'Intermedio',
				href: '/recursos/pdfs/guitarra/hoy-es-tiempo-de-santos.pdf',
			},
		],
	},
	{
		id: 'coral',
		label: 'Coral',
		description:
			'Partituras para coros que acompañan la liturgia con armonías tradicionales.',
		items: [
			{
				title: 'Cante la Iglesia',
				season: 'Tiempo ordinario',
				level: 'Intermedio',
				href: '/recursos/pdfs/coral/cante-la-iglesia.pdf',
			}
		],
	},
];

export const videoResources = [
	{
		title: 'Misa Criolla - referencia coral',
		description: 'Un ejemplo de escucha para analizar ensamble, respiración y fraseo coral.',
		label: 'Ensamble',
		focus: 'Escucha balance entre voces, entradas y cierres de frase.',
		embedUrl: 'https://www.youtube.com/embed/Eh_UTth9QnA',
		sourceUrl: 'https://www.youtube.com/watch?v=Eh_UTth9QnA',
	},
	{
		title: 'Misa Criolla - grabación histórica',
		description: 'Referencia para observar articulación, textura vocal y acompañamiento.',
		label: 'Interpretación',
		focus: 'Observa intención del texto, respiración común y dinámica.',
		embedUrl: 'https://www.youtube.com/embed/qeukymixGfg',
		sourceUrl: 'https://www.youtube.com/watch?v=qeukymixGfg',
	},
	{
		title: 'Misa Tango - referencia de interpretación',
		description: 'Material para escuchar balance entre solistas, coro e instrumento.',
		label: 'Solistas',
		focus: 'Distingue cuándo acompañar y cuándo dejar espacio a una voz principal.',
		embedUrl: 'https://www.youtube.com/embed/vPZkoi4GP4k',
		sourceUrl: 'https://www.youtube.com/watch?v=vPZkoi4GP4k',
	},
	{
		title: 'Misa Castellana - lista de reproducción',
		description: 'Lista de videos para comparar estilos y momentos de la misa.',
		label: 'Repertorio',
		focus: 'Compara versiones antes de elegir tono, tempo y arreglo.',
		embedUrl:
			'https://www.youtube.com/embed/videoseries?list=PLoDhM_XK9SD8WJc4NMgod_TewRKxoQOHR',
		sourceUrl:
			'https://www.youtube.com/playlist?list=PLoDhM_XK9SD8WJc4NMgod_TewRKxoQOHR',
	},
];

export const planningPdfs = [
	{
		title: 'Planeación de Adviento',
		description: 'Guía para ordenar entrada, ofertorio, comunión y salida durante Adviento.',
		href: '/recursos/pdfs/planeaciones/adviento.pdf',
	},
	{
		title: 'Planeación de Cuaresma',
		description: 'Selección sobria para celebraciones penitenciales y domingos cuaresmales.',
		href: '/recursos/pdfs/planeaciones/cuaresma.pdf',
	},
	{
		title: 'Planeación de Semana Santa',
		description: 'Estructura base para Triduo Pascual, silencio litúrgico y aclamaciones.',
		href: '/recursos/pdfs/planeaciones/semana-santa.pdf',
	},
	{
		title: 'Planeación de Tiempo Ordinario',
		description: 'Formato flexible para domingos comunes, solemnidades y memoria de santos.',
		href: '/recursos/pdfs/planeaciones/tiempo-ordinario.pdf',
	},
];

export const guideLinks = [
	{
		title: 'Guía para cantores',
		description: 'Pautas prácticas de preparación vocal, ensayo y servicio en misa.',
		href: '/recursos/guia-cantores',
	},
	{
		title: 'Sacrosanctum Concilium',
		description: 'Constitución sobre la sagrada liturgia y la participación activa.',
		href: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_sp.html',
	},
	{
		title: 'Tra le Sollecitudini',
		description: 'Documento clásico sobre música sagrada y servicio al culto.',
		href: 'https://www.vatican.va/content/pius-x/es/motu_proprio/documents/hf_p-x_motu-proprio_19031122_sollecitudini.html',
	},
	{
		title: 'Musicae Sacrae',
		description: 'Carta encíclica sobre música sagrada y formación del ministerio musical.',
		href: 'https://www.vatican.va/content/pius-xii/es/encyclicals/documents/hf_p-xii_enc_25121955_musicae-sacrae.html',
	},
	{
		title: 'Cantos por tiempo litúrgico',
		description: 'Vista interna del cantoral para elegir repertorio según el calendario.',
		href: '/tiempos-liturgicos',
	},
];
