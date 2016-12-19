<template>
  <div class="rarity-pie-chart">
    <canvas ref="chart" width="200" height="200"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js'

  export default {
    computed: {
      basic() {
        return this.$store.state.deck.cards.filter(card => card.rarity === 'basic').reduce((a, b) => a + b.qty, 0)
      },

      common() {
        return this.$store.state.deck.cards.filter(card => card.rarity === 'common').reduce((a, b) => a + b.qty, 0)
      },

      rare() {
        return this.$store.state.deck.cards.filter(card => card.rarity === 'rare').reduce((a, b) => a + b.qty, 0)
      },

      epic() {
        return this.$store.state.deck.cards.filter(card => card.rarity === 'epic').reduce((a, b) => a + b.qty, 0)
      },

      legendary() {
        return this.$store.state.deck.cards.filter(card => card.rarity === 'legendary').reduce((a, b) => a + b.qty, 0)
      },
    },

    methods: {
      generateChart() {
        new Chart(this.$refs.chart, {
          type: 'doughnut',
          data: {
            labels: [
              `Basic - ${Math.round(this.basic / 30 * 100)}%`,
              `Common - ${Math.round(this.common / 30 * 100)}%`,
              `Rare - ${Math.round(this.rare / 30 * 100)}%`,
              `Epic - ${Math.round(this.epic / 30 * 100)}%`,
              `Legendary - ${Math.round(this.legendary / 30 * 100)}%`,
            ],
            datasets: [
              {
                data: [this.basic, this.common, this.rare, this.epic, this.legendary],
                backgroundColor: [
                  '#9b9999',
                  '#c6c6c6',
                  '#00bfff',
                  '#c921dd',
                  '#ff911a',
                ],
                hoverBackgroundColor: [
                  '#9b9999',
                  '#c6c6c6',
                  '#00bfff',
                  '#c921dd',
                  '#ff911a',
                ]
              }]
          }
        })
      },
    },

    watch: {
      '$route': 'generateChart',
    },

    mounted() {
      this.generateChart()
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .rarity-pie-chart {
    width: 400px;
  }

</style>