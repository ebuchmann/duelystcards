<template>
  <table class="match-table">
    <thead>
      <tr>
        <th class="heading" colspan="2">opponent</th>
        <th class="heading">win/loss</th>
        <th class="heading">started as</th>
        <th class="heading">start date</th>
        <th class="heading">duration</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="match in matches">
        <td class="general" width="60px">
          <div class="resizer">
            <div :class="spriteClass(match.opponentGeneralId)"></div>
          </div>
        </td>
        <td>{{ match.opponentUsername }}</td>
        <td :class="status(match.isDraw, match.isWinner)">{{ status(match.isDraw, match.isWinner) }}</td>
        <td>{{ start(match.isPlayerOne) }}</td>
        <td>{{ format(match.startTime, 'D/M/YYYY') }}</td>
        <td>{{ getDuration(match.startTime, match.endTime) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import distanceInWordsStrict from 'date-fns/distance_in_words_strict'
  import format from 'date-fns/format'
  import getMinutes from 'date-fns/get_minutes'
  import getSeconds from 'date-fns/get_seconds'

  export default {
    props: ['matches'],

    methods: {
      distanceInWordsStrict,
      format,

      spriteClass (generalId) {
        return `sprite general-md general-sprite general-hex_${generalId}`
      },

      status (isDraw, isWinner) {
        if (isDraw) return 'Draw'

        return isWinner ? 'Win' : 'Loss'
      },

      start (isPlayerOne) {
        return isPlayerOne ? 'player one' : 'player two'
      },

      getDuration (startTime, endTime) {
        let minutes = getMinutes(endTime - startTime)
        let seconds = getSeconds(endTime - startTime)

        if (minutes < 10) minutes = `0${minutes}`
        if (seconds < 10) seconds = `0${seconds}`

        return `${minutes}:${seconds}`
      }
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .match-table {
    width: 100%;
    font-size: 1.3rem;
    border-spacing: 0;

    .heading {
      border-bottom: 2px solid $blue;
      font-size: 1rem;
    }

    .resizer {
      height: 50px;
      width: 50px;
    }

    .general {
      position: relative;

      .name {
        margin-left: 60px;
        float: left;
      }

      .sprite {
        top: -37px;
        left: -28px;
        transform: scale(.5);
        image-rendering: auto;
        position: relative;
      }
    }

    .Win {
      color: $color-green;
    }

    .Loss {
      color: $color-red;
    }
  }
</style>