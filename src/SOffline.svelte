<script>
	import Ping from 'ping.js';
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';
	// constants
	const emit = createEventDispatcher();
  const EVENTS = ['online', 'offline', 'load'];
  // props
  export let pingUrl = 'https://google.com';
	// reactive variables - computed + data
	$: isOnline = navigator.onLine || false; // data variable
	// lifecycle hooks
	onMount(() => {
		EVENTS.forEach((event) =>
			window.addEventListener(event, updateOnlineStatus()),
		);
  });
  onDestroy(() => {
    EVENTS.forEach((event) =>
      window.removeEventListener(event, updateOnlineStatus()),
    );
  })
	// methods
	const updateOnlineStatus = () => {
		const p = new Ping();
		p.ping(pingUrl, (err) => {
			if (err || !navigator.onLine) {
				isOnline = false;
			} else {
				isOnline = true;
			}
			emit('detectedCondition', { online: isOnline });
		});
	};
</script>

{#if isOnline}
  <slot name="online">
    <!-- Fallback text -->
    You're online
  </slot>
{:else}
  <slot name="offline">
    <!-- Fallback text -->
    You're offline
  </slot>
{/if}
