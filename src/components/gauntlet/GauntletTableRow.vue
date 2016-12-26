<template>
  <router-link class="link" tag="tr" :to="{ name: 'gauntlet-single', params: { username: $route.params.username, id: gauntlet._id } }">
    <td class="general">
      <div class="resizer">
        <div :class="spriteClass"></div>
      </div>
    </td>
    <td class="centered win">{{ wins }}</td>
    <td class="centered loss">{{ losses }}</td>
    <td>{{ startDate }}</td>
    <td class="centered">{{ gauntlet.gold !== null ? gauntlet.gold : '--' }}</td>
    <td class="centered">{{ gauntlet.spirit !== null ? gauntlet.spirit : '--' }}</td>
  </router-link>
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

      spriteClass () {
        return `sprite general-md general-sprite general-hex_${this.gauntlet.generalId}`
      },

      startDate () {
        return format(this.gauntlet.createdAt, 'D/M/YYYY')
      },

      noRewards () {
        return (this.gauntlet.gold === null && this.gauntlet.spirit === null)
      }
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .link:hover {
    cursor: pointer;
    background-color: #162D35;
  }

  .centered {
    text-align: center;
  }

  .win {
    color: $color-green;
  }

  .loss {
    color: $color-red;
  }

</style>