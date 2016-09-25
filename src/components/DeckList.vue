<template>
  <div class="deck-list" ref="test">
    <mana-curve></mana-curve>
    <deck-counts></deck-counts>
    <deck-general></deck-general>
    <div class="cards">
      <deck-card v-for="card in cardList" :card="card"></deck-card>
    </div>
    <button @click="save()">Save Test</button>
  </div>
</template>

<script>
  import ManaCurve from './ManaCurve'
  import DeckCounts from './DeckCounts'
  import DeckGeneral from './DeckGeneral'
  import DeckCard from './DeckCard'
  import domtoimage from 'dom-to-image'
  import sortBy from 'lodash.sortby'

  export default {
    computed: {
      cardList () {
        return sortBy(this.$store.state.deck.cards, ['cost', 'name'])
      },
    },

    methods: {
      async save () {
        const dataUrl = await domtoimage.toJpeg(this.$refs.test)
        const link = document.createElement('a')
        link.download = 'my-image-name.jpeg'
        link.href = dataUrl
        link.click()
      },
    },

    components: {
      ManaCurve,
      DeckCounts,
      DeckGeneral,
      DeckCard,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';
</style>