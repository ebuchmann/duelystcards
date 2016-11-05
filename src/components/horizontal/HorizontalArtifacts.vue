<template>
  <div class="horizontal-artifacts">
    <template v-for="card in artifacts">
      <div class="sprite-container">
        <div :class="getClass(card)">
          <div class="qty">x{{ card.qty }}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import sortBy from 'lodash.sortby'

  export default {
    computed: {
      artifacts () {
        return sortBy(this.$store.state.deck.cards, ['cost', 'name']).filter(card => card.type === 'artifact')
      },
    },

    methods: {
      getClass (card) {
        return `sprite artifact-sm ${card.faction}-sprite ${card.faction}-${card.id}`
      },
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .horizontal-artifacts {
    height: 58px;
    position: relative;

    > .sprite-container {
      width: 60px;
      height: 58px;
      position: relative;
      float: left;

      > .sprite {
        > .qty {
          font-size: 1.2rem;
          text-align: center;
          position: absolute;
          top: 66px;
          background: $blue-dark;
          width: 25px;
          opacity: .8;
          right: 0;
          border-radius: 12px;
        }
      }
    }
  }

</style>