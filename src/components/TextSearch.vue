<template>
  <div class="text-search">
    <input class="search" ref="search" type="text" :value="searchText" @keyup="handleSearch()" placeholder="Search" />
    <div @click="clearSearch()" class="button">
      <i :class="['icon', searchText.length ? 'icon-clear' : 'icon-search']"></i>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        debounce: null
      }
    },

    computed: {
      ...mapGetters(['searchText']),
    },

    methods: {
      ...mapActions(['textSearch']),

      handleSearch () {
        clearTimeout(this.debounce)
        this.debounce = setTimeout(() => {
          this.textSearch(this.$refs.search.value)
        }, 400)
      },

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

    > .button {
      position: absolute;
      top: 0;
      color: #3c77a0;
      height: 100%;
      width: 45px;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        color: $blue-light;
      }

      > .icon {
        margin: 0 auto;
      }
    }
  }
</style>