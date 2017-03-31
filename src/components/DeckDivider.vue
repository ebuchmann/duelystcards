<template>
  <div class="deck-divider">
    <div class="type">{{ type || 'Faction' | capitalize }} cards ({{ qty }})</div>
  </div>
</template>

<script>
  export default {
    props: ['type', 'cards'],

    computed: {
      qty () {
        return this.cards.reduce((prev, card) => prev + card.qty, 0)
      },
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .deck-divider {
    margin-top: 3px;
    padding: 5px;
    font-size: .8rem;
    padding-left: 10px;
    border-bottom: 1px solid #444;
  }
</style>
