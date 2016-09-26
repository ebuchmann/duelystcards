<template>
  <div class="text-search">
    <input class="search" ref="search" type="text" :value="searchText" @keyup="textSearch($refs.search.value)" placeholder="Search..." />
    <div v-show="searchText.length" @click="clearSearch()" class="clear"></div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters({
      searchText: 'searchText',
    }),

    methods: {
      ...mapActions(['textSearch']),

      clearSearch () {
        this.textSearch('')
        this.$refs.search.focus()
      },
    },
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
      color: #3c77a0;
      height: 100%;
      width: 30px;
      font-size: 1.5rem;

      &:hover {
        color: $blue-light;
      }

      &::before {
        @include font-icon($icon-clear);
      }
    }
  }
</style>