<script context="module">
  import { fade } from 'svelte/transition'

	export function preload() {
    console.log('employees.svelte preload: entered');
		return this.fetch(`poetry.json`).then(r => r.json()).then(poems => {
			return { poems };
		});
	}
</script>

<script>
	export let poems;
  import { onMount } from 'svelte';
</script>

<style>
  a {
    font-size: 1.8em;
    text-underline-offset: 5px;
  }
</style>

<svelte:head>
	<title>Poems from Pete</title>
</svelte:head>
<main in:fade>
  {#each poems as poem}
    <!-- we're using the non-standard `rel=prefetch` attribute to
    tell Sapper to load the data for the page as soon as
    the user hovers over the link or taps it, instead of
    waiting for the 'click' event -->
    <p><a class="poem-link" rel="prefetch" href="poetry/{poem.title.toLowerCase().replaceAll(' ', '-')}">{poem.title}</a></p>
  {/each}
</main>
