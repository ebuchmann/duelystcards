<template>
  <div class="card-pagination">
    <span @click="prevPage()" class="prev"></span>
    <span @click="nextPage()" class="next"></span>
    <div class="text">
      Displaying page {{ currentPage }} of {{ totalPages }}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        perPage: 8,
      }
    },

    computed: {
      totalPages() {
        return Math.ceil(this.$store.state.cardList.cards.length / this.perPage)
      },

      currentPage() {
        return this.$store.state.cardList.currentPage
      },
    },

    methods: {
      prevPage() {
        if (this.currentPage > 1) this.$store.dispatch('setPage', this.currentPage - 1)
      },

      nextPage() {
        if (this.currentPage < this.totalPages) this.$store.dispatch('setPage', this.currentPage + 1)
      },
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .card-pagination {
    color: #fff;
    text-align: center;

    > .next {
      background-image: url(https://dl.dropboxusercontent.com/u/24984522/dialogue_carat.png);
      width: 32px;
      height: 40px;
      display: inline-block;
    }

    > .prev {
      background-image: url(https://dl.dropboxusercontent.com/u/24984522/dialogue_carat_left.png);
      width: 32px;
      height: 40px;
      display: inline-block;
    }
  }

</style>