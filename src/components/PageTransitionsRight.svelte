<script>
  // import { fade } from 'svelte/transition';
</script>

<div
  in:fade="{{ x: 0, duration: 650, delay: 550 }}"
  out:fly="{{ x: 0, duration: 650 }}" 
  >
  <slot/>
</div>