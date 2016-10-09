<template>
  <div class="deck-counts">
    <span class="count">
      {{ minionCount }} Minon<template v-if="minionCount !== 1">s</template> 
    </span>
    <span class="count">
      {{ spellCount }} Spell<template v-if="spellCount !== 1">s</template> 
    </span>
    <span class="count">
      {{ artifactCount }} Artifact<template v-if="artifactCount !== 1">s</template>
    </span>
    <span class="count right">
      {{ cardCount }} / 40
    </span>
  </div>
</template>

<script>
  export default {
    computed: {
      minionCount () {
        return this.$store.state.deck.cards.filter(card => !['spell', 'artifact'].includes(card.type)).reduce((prev, curr) => prev + curr.qty, 0)
      },

      spellCount () {
        return this.$store.state.deck.cards.filter(card => card.type === 'spell').reduce((prev, curr) => prev + curr.qty, 0)
      },

      artifactCount () {
        return this.$store.state.deck.cards.filter(card => card.type === 'artifact').reduce((prev, curr) => prev + curr.qty, 0)
      },

      cardCount () {
        return this.$store.state.deck.totalCards
      }
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .deck-counts {
    @include clearfix;

    > .count {
      width: calc(100% / 4);
      display: inline-block;
      font-size: .9rem;
      margin: 8px 0;
      float: left;

      &.right {
        text-align: right;
      }
    }
  }
</style>