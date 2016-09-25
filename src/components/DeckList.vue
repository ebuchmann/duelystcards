<template>
  <div class="deck-list" ref="test">
    <mana-curve></mana-curve>
    <deck-counts></deck-counts>
    <deck-general></deck-general>
    <div class="cards">
      <deck-card v-for="card in cardList" :card="card"></deck-card>
    </div>
    <button v-if="$store.state.deck.cards.length" class="save-deck" @click="save()" :disabled="saving">Save Deck</button>
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
    data () {
      return {
        saving: false
      }
    },

    computed: {
      cardList () {
        return sortBy(this.$store.state.deck.cards, ['cost', 'name'])
      },
    },

    methods: {
      async save () {
        this.saving = true
        const dataUrl = await domtoimage.toJpeg(this.$refs.test)
        const link = document.createElement('a')
        link.download = `${this.$store.state.route.params.faction}-deck.jpeg`
        link.href = dataUrl
        link.click()
        this.saving = false
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

  .save-deck {
    &::before {
      @include font-icon($icon-download)
    }
  }
</style>