<template>
  <div class="card-pagination">
    <span @click="$store.dispatch('goToPage', 1)" class="next"></span>
    <span @click="$store.dispatch('goToPage', -1)" class="prev"></span>
    <div class="text">Displaying page {{ currentPage }} of {{ totalPages }}</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      currentPage: 'currentPage',
      totalPages: 'totalPages',
    }),
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .card-pagination {
    text-align: center;

    > .next, > .prev {
      background-repeat: no-repeat;
      width: 32px;
      height: 40px;
      display: inline-block;
    }

    > .next {
      background-image: url(https://dl.dropboxusercontent.com/u/24984522/dialogue_carat.png);
      float: right;
    }

    > .prev {
      background-image: url(https://dl.dropboxusercontent.com/u/24984522/dialogue_carat_left.png);
      float: left;
    }

    > .text {
      padding-top: 8px;
    }
  }

</style>