<script lang="ts">
  import Ping from 'ping.js';
  import { createEventDispatcher } from 'svelte';
  // constants
  const dispatch = createEventDispatcher();
  // props
  export let pingUrl: string = 'https://google.com';
  // reactive variables - computed + data
  $: isOnline = navigator.onLine || false;
  // methods
  const updateOnlineStatus = () => {
    const p = new Ping();
    p.ping(pingUrl, (err) => {
      if (err || !navigator.onLine) {
        isOnline = false;
      } else {
        isOnline = true;
      }
      dispatch('detectedCondition', { online: isOnline });
    });
  };
</script>

<svelte:window
  on:online={updateOnlineStatus}
  on:offline={updateOnlineStatus}
  on:load={updateOnlineStatus}
/>

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
