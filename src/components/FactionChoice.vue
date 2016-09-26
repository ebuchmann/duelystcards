<template>
  <div class="faction-choice-component">
    <div class="wrapper">
      <router-link class="faction-choice" to="/deck/lyonar">
        <img class="image" src="https://dl.dropboxusercontent.com/u/24984522/lyonar.png" alt="Lyonar" />
        <div class="text">Lyonar</div>
      </router-link>
    </div>
    <div class="wrapper">
      <router-link class="faction-choice" to="/deck/songhai">
        <img class="image" src="https://dl.dropboxusercontent.com/u/24984522/songhai.png" alt="Songhai" />
        <div class="text">Songhai</div>
      </router-link>
    </div>
    <div class="wrapper">
      <router-link class="faction-choice" to="/deck/vetruvian">
        <img class="image" src="https://dl.dropboxusercontent.com/u/24984522/vetruvian.png" alt="Vetruvian" />
        <div class="text">Vetruvian</div>
      </router-link>
    </div>
    <div class="wrapper">
      <router-link class="faction-choice" to="/deck/abyssian">
        <img class="image" src="https://dl.dropboxusercontent.com/u/24984522/abyssian.png" alt="Abyssian" />
        <div class="text">Abyssian</div>
      </router-link>
    </div>
    <div class="wrapper">
      <router-link class="faction-choice" to="/deck/magmar">
        <img class="image" src="https://dl.dropboxusercontent.com/u/24984522/magmar.png" alt="Magmar" />
        <div class="text">Magmar</div>
      </router-link>
    </div>
    <div class="wrapper">
      <router-link class="faction-choice" to="/deck/vanar">
        <img class="image" src="https://dl.dropboxusercontent.com/u/24984522/vanar.png" alt="Vanar" />
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
      margin-bottom: -32px;
      position: relative;
      z-index: $faction-select-image;
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