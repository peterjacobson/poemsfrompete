import poems from './_poems.js';
console.log("poems: ", poems[0].title);
const poemsWithSlugs = poems.map((poem) => {
  const slug = poem.title?.toLowerCase()?.replaceAll(/\s/g, '-');
  return {...poem, slug}
})
console.log("poemsWithSlugs: ", poemsWithSlugs[0].slug);

const lookup = new Map();
poemsWithSlugs.forEach(poem => {
	lookup.set(poem.slug, JSON.stringify(poem));
});

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
