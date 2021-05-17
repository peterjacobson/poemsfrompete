<script>
  import { fly } from 'svelte/transition';
</script>

<div
  in:fly="{{ x: 200, duration: 650, delay: 550 }}"
  out:fly="{{ x: 200, duration: 650 }}" 
  >
  <slot/>
</div>