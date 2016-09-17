<template>
  <div class="type-select">
    <input type="checkbox" value="artifact" @change="$store.dispatch('typeSelect', 'artifact')"> Artifact<br>
    <input type="checkbox" value="minion" @change="$store.dispatch('typeSelect', 'minion')"> Minion<br>
    <input type="checkbox" value="spell" @change="$store.dispatch('typeSelect', 'spell')"> Spell<br>
    <input type="checkbox" value="spell" @change="$store.dispatch('typeSelect', 'general')"> General
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="sass">

</style>