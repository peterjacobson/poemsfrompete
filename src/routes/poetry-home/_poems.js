// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_poems.js` rather than `poems.js`, because
// we don't want to create an `/blog/poems` route — the leading
// underscore tells Sapper not to do that.

const poems = [
	{
		title: 'Gathered by mountains',
		slug: 'gathered-by-mountains',
		html: `
      <p>
        Rumi said_
        <quote>
          Goodbyes are only for those who love with their eyes.<br> Because for those who love with heart and soul there is no such thing as separation.”
        </quote>_
        My messenger remembers meetings, touchings_
        I am a cloud gathered by mountains_
        formed and shaped and guided_
        blown by pressures of our world_
        I am trailing thousands of threads
        thousands of translucent threads
        strands
        ropes
        reaching into homes
        into islands
        and storms
        touching valleys
        hearts
        I pass through tempests
        and under the sun
        I am from the sea
        I am from the sea
        and I am coming home
     </p>
    `
	},
];

poems.forEach(poem => {
	poem.html = poem.html.replace(/^\t{3}/gm, '');
});

export default poems;
