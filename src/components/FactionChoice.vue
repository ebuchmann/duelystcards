<template>
  <div class="faction-choice-component">
    <div class="wrapper">
      <router-link class="faction-choice" to="/deck/lyonar">
        <div class="image lyonar"></div>
        <div class="text">Lyonar</div>
      </router-link>
    </div>
    <div class="wrapper">
      <router-link class="faction-choice" to="/deck/songhai">
        <div class="image songhai"></div>
        <div class="text">Songhai</div>
      </router-link>
    </div>
    <div class="wrapper">
      <router-link class="faction-choice" to="/deck/vetruvian">
        <div class="image vetruvian"></div>
        <div class="text">Vetruvian</div>
      </router-link>
    </div>
    <div class="wrapper">
      <router-link class="faction-choice" to="/deck/abyssian">
        <div class="image abyssian"></div>
        <div class="text">Abyssian</div>
      </router-link>
    </div>
    <div class="wrapper">
      <router-link class="faction-choice" to="/deck/magmar">
        <div class="image magmar"></div>
        <div class="text">Magmar</div>
      </router-link>
    </div>
    <div class="wrapper">
      <router-link class="faction-choice" to="/deck/vanar">
        <div class="image vanar"></div>
        <div class="text">Vanar</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .faction-choice-component {
    width: 1200px;
    margin: 0 auto;
    @include clearfix;

    > .wrapper {
      width: calc(100% / 3);
      float: left;
      display: flex;
    }
  }

  .faction-choice {
    width: 254px;
    margin: 0 auto 45px;

    > .image {
      background-image: url(https://dl.dropboxusercontent.com/u/24984522/faction_selection.png);
      background-repeat: no-repeat;
      display: block;
      margin-bottom: -32px;
      position: relative;
      width: 254px;
      height: 233px;
      z-index: $faction-select-image;

      &.abyssian { background-position: -2px -2px; }
      &.lyonar { background-position: -260px -2px; }
      &.magmar { background-position: -2px -239px; }
      &.songhai { background-position: -260px -239px; }
      &.vanar { background-position: -518px -2px; }
      &.vetruvian { background-position: -518px -239px; }
    }

    > .text {
      background: $blue;
      padding: 30px 10px 10px;
      text-align: center;
      font-size: 1.5rem;
      color: $light;
      position: relative;

      &::before, &::after {
        position: absolute;
        content: '';
        bottom: 0;
        border-style: solid;
      }

      &::before {
        left: 0;
        border-width: 0 22px 22px 0;
        border-color: $blue-dark $blue;
      }

      &::after {
        right: 0;
        border-width: 22px 22px 0 0;
        border-color: $blue $blue-dark;
      }
    }
  }

  .faction-choice:hover > .text {
    text-shadow: 0px 0px 16px rgba(255, 255, 255, .75);
  }
</style>