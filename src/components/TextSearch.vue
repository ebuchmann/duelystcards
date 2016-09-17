<template>
  <div class="text-search">
    <input ref="search" type="text" @keyup="$store.dispatch('textSearch', $refs.search.value)" />
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="sass">

</style>