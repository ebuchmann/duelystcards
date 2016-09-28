<template>
  <div :class="['faction-navigation', 'dd-arrow', { 'opened': opened }]" tabindex="0" @click="open()" @blur="close()" ref="nav">
    <div class="menu">
      <div class="current">{{ faction }}</div>
    </div>
    <div class="links">
      <span class="link" @click.stop="navigate('/deck/lyonar')">Lyonar</span>
      <span class="link" @click.stop="navigate('/deck/songhai')">Songhai</span>
      <span class="link" @click.stop="navigate('/deck/vetruvian')">Vetruvian</span>
      <span class="link" @click.stop="navigate('/deck/abyssian')">Abyssian</span>
      <span class="link" @click.stop="navigate('/deck/magmar')">Magmar</span>
      <span class="link" @click.stop="navigate('/deck/vanar')">Vanar</span>
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
        if (!this.opened) this.opened = true
      },

      close () {
        this.opened = false
      },

      navigate (path) {
        this.$router.push({ path })
        this.$store.dispatch('resetAll')
        this.$refs.nav.blur()
      },
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .dd-arrow {
    padding-right: 30px;

    &::after {
      font-family: 'Material Icons';
      content: '\e313';
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .faction-navigation {
    background: $blue;
    display: inline-block;
    position: relative;
    float: right;
    min-width: 140px;
    transition: $all-fast;

    &:hover {
      background: lighten($blue, 10%);
    }

    &:active, &:focus {
      outline: none;
    }

    > .menu {
      padding: 8px 15px;
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
      min-width: 140px;
      width: 100%;

      > .link {
        padding: 5px 10px;
        cursor: pointer;
        display: block;

        &:hover {
          background: darken($blue, 10%)
        }
      }
    }
  }
</style>