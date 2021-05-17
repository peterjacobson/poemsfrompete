import poems from './_POEMS.js';

const contents = JSON.stringify(poems.map(poem => {
	return {
		title: poem.title,
		slug: poem.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}