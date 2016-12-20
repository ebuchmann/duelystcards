<template>
  <router-link class="link" tag="tr" :to="{ name: 'gauntlet-single', params: { username: $route.params.username, id: gauntlet._id } }">
    <td class="general">
      <div class="resizer">
        <div :class="spriteClass"></div>
      </div>
    </td>
    <td class="win">{{ wins }}</td>
    <td class="loss">{{ losses }}</td>
    <td>{{ startDate }}</td>
    <td>{{ endDate }}</td>
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

      endDate () {
        if (!this.gauntlet.isActive) return format(this.gauntlet.updatedAt, 'D/M/YYYY')
      },
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .link:hover {
    cursor: pointer;
    background-color: #162D35;
  }

  .win {
    color: $color-green;
  }

  .loss {
    color: $color-red;
  }

</style>