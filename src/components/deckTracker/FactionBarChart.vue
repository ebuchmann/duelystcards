<template>
  <div class="faction-bar-chart">
    <canvas ref="chart"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js'

  export default {
    props: ['stats'],

    methods: {
      generateChart() {
        new Chart(this.$refs.chart, {
          type: 'bar',
          data: {
            labels: [
              'Argeon',
              `Zi'ran`,
              'Kaleos',
              'Reva',
              'Zirix',
              'Sajj',
              'Lilithe',
              'Cassyva',
              'Vaath',
              'Starhorn',
              'Faie',
              'Kara',
            ],
            datasets: [
              {
                data: [
                  this.stats.argeon.winPer,
                  this.stats.ziran.winPer,
                  this.stats.kaleos.winPer,
                  this.stats.reva.winPer,
                  this.stats.zirix.winPer,
                  this.stats.sajj.winPer,
                  this.stats.lilithe.winPer,
                  this.stats.cassyva.winPer,
                  this.stats.vaath.winPer,
                  this.stats.starhorn.winPer,
                  this.stats.faie.winPer,
                  this.stats.kara.winPer,
                ],
                backgroundColor: [
                  '#e7c151',
                  '#e7c151',
                  '#51aa85',
                  '#51aa85',
                  '#f08d44',
                  '#f08d44',
                  '#996bd1',
                  '#996bd1',
                  '#51aa85',
                  '#51aa85',
                  '#5bbacf',
                  '#5bbacf',
                ],
              },
            ]
          },
          options: {
            legend: {
              display: false,
            },
            title: {
              display: true,
              text: 'Win percentage vs. each general'
            },
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                display: true,
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 100,
                  beginAtZero: true,
                },
              }],
            },
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

  .faction-bar-chart {
    height: 300px;
  }

</style>