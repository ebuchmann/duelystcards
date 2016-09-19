<template>
  <div class="deck-list" ref="test">
    <mana-curve></mana-curve>
    <deck-counts></deck-counts>
    <deck-general></deck-general>
    <div class="general" v-if="$store.state.deck.general">
      {{ $store.state.deck.general.name }}
    </div>
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

  export default {
    computed: {
      cardList () {
        return this.$store.state.deck.cards.sort((a, b) => a.name > b.name).sort((a, b) => a.cost > b.cost)
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