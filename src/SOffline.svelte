<script>
  import Ping from 'ping.js';
  import { createEventDispatcher } from 'svelte';
  // constants
  const emit = createEventDispatcher();
  // props
  export let pingUrl = 'https://google.com';
  // reactive variables - computed + data
  $: isOnline = navigator.onLine || false; // data variable
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

<svelte:window
  on:online={updateOnlineStatus}
  on:offline={updateOnlineStatus}
  on:load={updateOnlineStatus} />

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
