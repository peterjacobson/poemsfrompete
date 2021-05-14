<script context="module">
	export function preload() {
		return this.fetch(`poetry-home.json`).then(r => r.json()).then(poems => {
			return { poems };
		});
	}
</script>

<script>
	export let poems;
</script>

<style>
</style>

<svelte:head>
	<title>Pete's Poetry Kainga</title>
</svelte:head>

{#each poems as poem}
  <!-- we're using the non-standard `rel=prefetch` attribute to
      tell Sapper to load the data for the page as soon as
      the user hovers over the link or taps it, instead of
      waiting for the 'click' event -->
  <a rel="prefetch" href="poetry-home/{poem.slug}">{poem.title}</a>
{/each}
