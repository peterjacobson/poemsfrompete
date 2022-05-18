<script>
	export let segment;
</script>

<style>
	nav {
		/* border-bottom: 1px solid rgba(255,62,0,0.1); */
		font-weight: 300;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: flex;
    justify-items: center;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	/* [aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	} */

	a {
		/* text-decoration: none; */
		padding: 1.2em 0em 0.5em;
		display: block;
    font-size: 2.8em;
    line-height: 0.6em;
	}
</style>

<nav>
  
	<ul class="nav-links">
    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
      the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a rel=prefetch style="{segment === undefined ? 'text-decoration:none;' : ''}" aria-current="{segment === undefined ? 'page' : undefined}" href="/">
        Poems from Pete
      </a>
    </li>
    <!-- <li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>  -->
  </ul>
  ☀
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  ☾ 
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  ☀
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  ☾ 
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  ☀
</nav>
