<template>
  <div class="gauntlet-card">
    <div :class="spriteClass"></div>
    <div>
      <div class="matches">Wins: {{ wins }}, Losses: {{ losses }}</div>
      <div class="dates">
        Started on: {{ startDate }}
        <div v-if="!gauntlet.isActive">Ended on: {{ endDate }}</div>
      </div>
    </div>
    <div class="status">
      <span :class="['circle', gauntlet.isActive ? 'active' : 'complete']"></span>
      {{ status }}
    </div>
  </div>
</template>

<script>
  import format from 'date-fns/format'

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

      startDate () {
        return format(this.gauntlet.createdAt, 'D/M/YYYY')
      },

      endDate () {
        if (!this.gauntlet.isActive) return format(this.gauntlet.updatedAt, 'D/M/YYYY')
      },
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .gauntlet-card {
    position: relative;
    background: #162D35;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    color: $light;
    align-items: center;

    > .sprite {
      position: initial;
    }

    .matches {
      font-size: 1.4rem;
    }

    .status {
      position: absolute;
      top: 10px;
      right: 10px;

      > .circle {
        border-radius: 50%;
        width: 10px;
        height: 10px;
        display: inline-block;
      }

      > .active {
        background: $color-red;
      }

      > .complete {
        background: $color-green;
      }
    }

    .dates {
      font-size: 1.1rem;
    }
  }

</style>