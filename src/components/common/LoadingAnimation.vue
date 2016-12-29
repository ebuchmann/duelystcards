<template>
  <div class="loading-animation">
    <img class="image" src="../../assets/images/loading.gif" alt="Loading" />
    <p class="text">Loading...</p>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .loading-animation {
    > .image {
      display: block;
      margin: 0 auto;
      image-rendering: pixelated;
    }

    > .text {
      text-align: center;
      margin-top: -25px;
    }
  }
</style>