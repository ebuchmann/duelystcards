<template>
  <div class="rarity-select">
    <input type="checkbox" value="artifact" @change="$store.dispatch('raritySelect', 'basic')"> Basic<br>
    <input type="checkbox" value="minion" @change="$store.dispatch('raritySelect', 'common')"> Common<br>
    <input type="checkbox" value="spell" @change="$store.dispatch('raritySelect', 'rare')"> Rare<br>
    <input type="checkbox" value="spell" @change="$store.dispatch('raritySelect', 'epic')"> Epic<br>
    <input type="checkbox" value="spell" @change="$store.dispatch('raritySelect', 'legendary')"> Legendary<br>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="sass">

</style>