<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`poetry/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { poem: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let poem;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{poem.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  h1 {
    font-size: 4em;
  }
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}
	.content :global(quote) {
    display: block;
    margin-left: 10px;
	}
	.content :global(p) {
    font-size: 1.6em;
    line-height: 0.9em;
    margin-bottom: 30px;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
  
</style>

<svelte:head>
	<title>{poem.title}</title>
</svelte:head>

<h1>{poem.title}</h1>

<div class="content">
	{@html `<p>${poem.html.replaceAll(/\n\s*\n/g, '</p><br><p>').replaceAll('\n', '</p><p>')}</p>`}
</div>
