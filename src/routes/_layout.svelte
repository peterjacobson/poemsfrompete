<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
  .pagewrapper {
    min-height: 100vh;
    height: 100%;
    background-color: #272C35;
    color: #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
	main {
		position: relative;
		max-width: 56em;
		/* background-color: white; */
		padding: 2em 1em;
		margin: 0 auto;
		box-sizing: border-box;
	}

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
      div {
          background-color: #272C35;
          color: #ccc;
          font-size: 1.1rem
          /* text-shadow: 2px 2px black; */
      }
  }
</style>

<div class="pagewrapper">
  <Nav {segment}/>
  <main>
    <slot></slot>
  </main>
  ☀
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  ☾ 
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  ☀
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  ☾ 
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  ☀
</div>