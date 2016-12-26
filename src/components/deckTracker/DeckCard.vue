<template>
  <router-link class="deck-card-vertical" :to="{ name: 'deck-single', params: { username: $route.params.username, id: deck._id } }">
    <div class="sprite-sizer">
      <div :class="spriteClass"></div>
    </div>
    <div class="bubble"></div>
    <div class="counts"><span class="wins">{{ deck.wins }}</span> wins, <span class="losses">{{ deck.losses }}</span> losses</div>
    <div class="name">{{ deck.name }}</div>
  </router-link>
</template>

<script>
  export default {
    props: ['deck'],

    computed: {
      spriteClass () {
        return `sprite general-lg general-sprite general-hex_${this.deck.generalId}-lg`
      },
    }
  }
</script>

<style lang="sass">
  @import '../../css/includes';
  
  @keyframes grow {
    0% { transform: scale(0) }
    85% { transform: scale(1.1) }
    100% { transform: scale(1) }
  }

  .deck-card-vertical:hover {
    > .bubble {
      animation: grow .2s forwards;
    }
  }

  .deck-card-vertical {
    display: block;
    position: relative;
    color: $light;
    text-align: center;

    &:hover {
      color: $light;
    }

    > .sprite-sizer {
      width: 215px;
      height: 245px;
      margin: 0 auto;
      position: relative;
    }

    > .counts {
      font-size: 1.5rem;

      > .wins {
        color: $color-green;
      }

      > .losses {
        color: $color-red;
      }
    }

    > .name {
      text-transform: uppercase;
    }

    > .bubble {
      display: block;
      position: absolute;
      backface-visibility: hidden;
      width: 200px;
      height: 200px;
      left: 0;
      right: 0;
      top: 42px;
      margin-left: auto;
      margin-right: auto;
      transform: scale(0);
      text-align: left;

      &::after {
        content: '';
        position: absolute;
        color: #000;
        font-size: 1.71rem;
        font-weight: 700;
        line-height: 1.9rem;
        width: 198px;
        height: 198px;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 0 .95rem rgba(255, 255, 255, 0.5);
        border-radius: 50%;
      }
    }
  }

</style>