<script lang="ts">
  // import SOffline from '../../src/components/SOffline.svelte';
  import SOffline from 's-offline';
  const handleNetworkChange = ({ online }) => {
    console.log('event details: ', online.isOnline);
  };
</script>

<main>
  <SOffline
    pingUrl="https://bitly.com"
    on:detectedCondition={handleNetworkChange}
  >
    <span slot="online" class="online">😊</span>
    <span slot="offline" class="offline">🤕</span>
  </SOffline>
</main>

<style>
  .online {
    font-size: 10rem;
    text-align: center;
  }
  .offline {
    font-size: 10rem;
    text-align: center;
  }
</style>
