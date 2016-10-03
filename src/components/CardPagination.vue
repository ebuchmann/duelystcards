<template>
  <div class="card-pagination">
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
  }

</style>