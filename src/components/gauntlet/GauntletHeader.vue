<template>
  <div class="gauntlet-header">
    <div class="sprite">
      <div :class="spriteClass"></div>
    </div>
    <div class="win-loss">Wins: {{ wins }}, Losses: {{ losses }}</div>
    <div class="status">
      <span :class="['circle', gauntlet.isActive ? 'active' : 'complete']"></span>
      {{ status }}
    </div>
  </div>
</template>

<script>
  export default {
    props: ['gauntlet'],

    computed: {
      wins () {
        if (this.gauntlet.matches) return this.gauntlet.matches.filter(match => match.isWinner).length
      },

      losses () {
        if (this.gauntlet.matches) return this.gauntlet.matches.filter(match => !match.isWinner).length
      },

      status () {
        return this.gauntlet.isActive ? 'In progress' : 'Completed'
      },

      spriteClass () {
        return `sprite general-md general-sprite general-hex_${this.gauntlet.generalId}`
      },
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .gauntlet-header {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 30px;

    > .sprite {
      margin: 0 auto;
      height: 80px;
      width: 80px;
      position: relative;

      > .sprite {
        left: auto;
        transform: scale(2);
      }
    }

    > .win-loss {
      text-align: center;
      font-size: 3rem;
    }

    > .status {
      position: absolute;
      top: 0;
      right: 0;

      > .circle {
        border-radius: 50%;
        width: 10px;
        height: 10px;
        display: inline-block;
      }

      > .active {
        background: $color-green;
      }

      > .complete {
        background: $color-red;
      }
    }
  }
</style>