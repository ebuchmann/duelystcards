<template>
  <table class="gauntlet-table">
    <thead>
      <tr>
        <th class="heading">general</th>
        <th class="heading centered">wins</th>
        <th class="heading centered">losses</th>
        <th class="heading">start date</th>
        <th class="heading centered">gold</th>
        <th class="heading centered">spirit</th>
      </tr>
    </thead>
    <tbody>
      <tr is="gauntlet-table-row" v-for="gauntlet in gauntlets" :gauntlet="gauntlet"></tr>
    </tbody>
  </table>
</template>

<script>
  import GauntletTableRow from 'components/Gauntlet/GauntletTableRow'

  export default {
    props: ['gauntlets'],

    components: {
      GauntletTableRow,
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .gauntlet-table {
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