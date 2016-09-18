<template>
  <div class="text-search">
    <input class="search" ref="search" type="text" :value="searchText" @keyup="textSearch($refs.search.value)" placeholder="Search..." />
    <div @click="textSearch('')" class="clear">X</div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters({
      searchText: 'searchText',
    }),

    methods: mapActions({
      textSearch: 'textSearch',
    }),
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .text-search {
    position: relative;
    @include clearfix;

    > .search {
      background: $blue;
      border: none;
      padding: 10px;
      width: 100%;

      &:active, &:focus {
        outline: none;
      }
    }

    > .clear {
      position: absolute;
      right: 0;
      top: 0;
      color: $blue-dark;
      height: 100%;
      width: 30px;
    }
  }
</style>