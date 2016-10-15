<template>
  <div class="text-search">
    <input class="search" ref="search" type="text" :value="searchText" @keyup="textSearch($refs.search.value)" placeholder="Search" />
    <div @click="clearSearch()" :class="['icon', { 'clear': searchText.length }]"></div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['searchText']),
    },

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
    float: left;
    height: 100%;
    position: relative;
    width: calc(100% - 380px);

    > .search {
      background: transparent;
      padding: 5px 10px 5px 50px;
      height: 100%;
      width: 100%;
      border: none;
      font-size: 1.2rem;

      &:active, &:focus {
        outline: none;
      }
    }

    > .icon {
      position: absolute;
      top: 0;
      color: #3c77a0;
      height: 100%;
      width: 45px;
      font-size: 1.5rem;
      display: flex;
      align-items: center;

      &:hover {
        cursor: pointer;
        color: $blue-light;
      }

      &::before {
        width: 100%;
        text-align: center;
        @include font-icon($icon-search);
      }

      &.clear::before {
        @include font-icon($icon-clear);
      }
    }
  }
</style>