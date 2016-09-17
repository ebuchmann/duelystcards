<template>
  <div class="app-page">
    <top-nav></top-nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import TopNav from 'components/TopNav'

  export default {
    components: {
      TopNav,
    },
  }
</script>

<style lang="sass">
  @import './css/app';
</style>