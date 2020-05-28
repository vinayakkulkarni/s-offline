<script>
  import SOffline from '../src/SOffline.svelte';
  const handleNetworkChange = ({ detail }) => {
    console.log('event details: ', detail);
  };
</script>

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

<SOffline
  pingUrl="https://bitly.com"
  on:detectedCondition={handleNetworkChange}>
  <span slot="online" class="online">😊</span>
  <span slot="offline" class="offline">🤕</span>
</SOffline>
