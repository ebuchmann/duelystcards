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
  </div>
</template>

<script>
  export default {
    computed: {
      minionCount() {
        return this.$store.state.deck.cards.filter(card => !['spell', 'artifact'].includes(card.type)).reduce((prev, curr) => prev + curr.qty, 0)
      },

      spellCount() {
        return this.$store.state.deck.cards.filter(card => card.type === 'spell').reduce((prev, curr) => prev + curr.qty, 0)
      },

      artifactCount() {
        return this.$store.state.deck.cards.filter(card => card.type === 'artifact').reduce((prev, curr) => prev + curr.qty, 0)
      },
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .deck-counts {
    > .count {
      width: 32%;
      text-align: center;
      display: inline-block;
    }
  }
</style>