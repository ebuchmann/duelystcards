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

  @font-face {
    font-family: LatoRegular;
    src: url(https://dl.dropboxusercontent.com/u/24984522/Lato-Regular.woff);
  }

  .app-page {
    background-image: url(https://dl.dropboxusercontent.com/u/24984522/background.jpg);
    background-size: cover;
  }
</style>