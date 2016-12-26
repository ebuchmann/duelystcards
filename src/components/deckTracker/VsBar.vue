<template>
  <div :class="['vs-bar', stat.faction]">
    <div class="bar-container loss">
      <div class="bar" :style="lossStyle">
        <span class="label">{{ stat.lossPer }}%</span>
      </div>
    </div>
    <div class="count-container losses">
      <span>{{ stat.losses }}</span>
    </div>
    <div class="general-area">
      <div class="resizer">
        <div :class="spriteClass"></div>
      </div>
    </div>
    <div class="count-container wins">
      <span>{{ stat.wins }}</span>
    </div>
    <div class="bar-container win">
      <div class="bar" :style="winStyle">
        <span class="label">{{ stat.winPer }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['stat'],

    computed: {
      lossStyle () {
        const style = {
          flex: `0 0 ${this.stat.lossPer}%`,
        }

        if (this.stat.lossPer === 0) {
          style.background = 'none'
          style.color = 'white'
        }
        return style
      },

      winStyle () {
        const style = {
          flex: `0 0 ${this.stat.winPer}%`,
        }

        if (this.stat.winPer === 0) {
          style.background = 'none'
          style.color = 'white'
        }
        return style
      },

      spriteClass () {
        return `sprite general-md general-sprite general-hex_${this.stat.id}`
      },
    }
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .vs-bar.abyssian .bar { background: $color-abyssian; }
  .vs-bar.lyonar .bar { background: $color-lyonar; }
  .vs-bar.magmar .bar { background: $color-magmar; }
  .vs-bar.songhai .bar { background: $color-songhai; }
  .vs-bar.vanar .bar { background: $color-vanar; }
  .vs-bar.vetruvian .bar { background: $color-vetruvian; }

  .vs-bar {
    display: flex;
    position: relative;
    height: 40px;
    vertical-align: center;
    margin-bottom: 4px;

    > .count-container {
      flex: 0 0 40px;
      background: $dark;
      align-items: center;
      display: flex;
      justify-content: center;
      font-size: 1.2rem;
    }

    > .losses {
      color: $color-red;
    }

    > .wins {
      color: $color-green;
    }

    > .bar-container {
      flex: 1;
      display: flex;
      color: $dark;

      > .bar {
        display: flex;
        align-items: center;
      }

      &.win {
        > .bar {
          justify-content: flex-end;
        }
      }

      &.loss {
        justify-content: flex-end;
      }

      .label {
        padding: 0 15px;
        font-size: .85rem;
      }
    }

    > .general-area {
      position: relative;
      flex: 0 0 40px;
      background: $dark;

      > .resizer {
        width: 40px;
        height: 40px;

        > .sprite {
          transform: scale(0.45);
          left: -30px;
          top: -42px;
        }
      }

    }
  }
</style>