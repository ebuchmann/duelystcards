<template>
  <div class="vs-chart">
    <div class="vs-chart-top">
      <div class="left">loss %</div>
      <div class="label">losses</div>
      <div class="label">vs.</div>
      <div class="label">wins</div>
      <div class="right">win %</div>
    </div>
    <vs-bar v-for="stat in stats" :key="stat.id" :stat="stat" />
  </div>
</template>

<script>
  import VsBar from 'components/deckTracker/VsBar'

  export default {
    props: ['stats'],

    components: {
      VsBar,
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .vs-chart-top {
    display: flex;
    text-align: center;
    border-bottom: 2px solid $blue;
    margin-bottom: 10px;

    > .left {
      flex: 1;
    }

    > .right {
      flex: 1;
    }

    > .label {
      flex: 0 0 40px;
    }
  }
</style>
