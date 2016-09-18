<template>
  <div :class="['faction-navigation', { 'opened': opened }]" tabindex="0" @blur="close()" ref="nav">
    <div class="menu" @click="open()">
      <div class="current">{{ faction }}</div>
    </div>
    <div class="links">
      <span class="link" @click="navigate('/deck/lyonar')">Lyonar</span>
      <span class="link" @click="navigate('/deck/songhai')">Songhai</span>
      <span class="link" @click="navigate('/deck/vetruvian')">Vetruvian</span>
      <span class="link" @click="navigate('/deck/abyssian')">Abyssian</span>
      <span class="link" @click="navigate('/deck/magmar')">Magmar</span>
      <span class="link" @click="navigate('/deck/vanar')">Vanar</span>
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

      close () {
        this.opened = false
      },

      navigate (path) {
        this.$router.push({ path })
        this.$store.dispatch('clearDeck')
        this.$refs.nav.blur()
      },
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .faction-navigation {
    background: $blue;
    display: inline-block;
    position: relative;
    float: right;

    &:active, &:focus {
      outline: none;
    }

    > .menu {
      padding: 8px;
    }

    &.opened > .links {
      display: block;
    }

    > .links {
      display: none;
      position: absolute;
      right: 0;
      z-index: $faction-navigation;
      background: $blue;

      > .link {
        padding: 5px 10px;
        cursor: pointer;
        display: block;
        min-width: 120px;

        &:hover {
          background: darken($blue, 10%)
        }
      }
    }
  }
</style>