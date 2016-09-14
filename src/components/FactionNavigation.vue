<template>
  <div :class="['faction-navigation', { 'opened': opened }]">
    <div class="menu">
      <div class="current">{{ faction }}</div>
    </div>
    <div class="links">
      <router-link class="link" to="/deck/lyonar">Lyonar</router-link>
      <router-link class="link" to="/deck/songhai">Songhai</router-link>
      <router-link class="link" to="/deck/vetruvian">Vetruvian</router-link>
      <router-link class="link" to="/deck/abyssian">Abyssian</router-link>
      <router-link class="link" to="/deck/magmar">Magmar</router-link>
      <router-link class="link" to="/deck/vanar">Vanar</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        opened: false,
      }
    },

    computed: {
      faction () {
        const faction = this.$route.params.faction
        return faction
          ? faction.charAt(0).toUpperCase() + faction.slice(1)
          : 'Choose your faction'
      },
    },

    methods: {
      open () {
        this.opened = true
      },

      close (event) {
        this.opened = false
      }
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .faction-navigation {
    background: rgba(#fff, .75);
    display: inline-block;
    float: right;
    padding: 8px;

    &.opened {
      background: #fff;
    }

    &.opened > .links {
      display: block;
    }

    > .links {
      display: none;
      position: absolute;
      right: 0;
      z-index: $faction-navigation;

      > .link {
        padding: 5px 10px;

        &:hover {
          background: darken(white, 10%);
        }
      }
    }
  }
</style>