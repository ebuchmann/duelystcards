<template>
  <div class="deck-list">
    <div ref="image">
      <mana-curve></mana-curve>
      <deck-counts></deck-counts>
      <deck-general></deck-general>
      <div class="cards">
        <deck-card v-for="card in cardList" :card="card"></deck-card>
      </div>
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
  import { saveAs } from 'file-saver'

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
        const image = await domtoimage.toBlob(this.$refs.image, { bgcolor: '#0b1c27', width: this.$refs.image.offsetWidth + 40, height: this.$refs.image.offsetHeight + 60, style: { padding: '40px 20px' } })
        saveAs(image, `${this.$store.state.route.params.faction}-deck.png`);
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

  .deck-list {
    padding-top: 30px;
  }

  .save-deck {
    margin-top: 15px;
    padding: 8px;

    &::before {
      @include font-icon($icon-download)
      padding-top: 2px;
      margin-right: 10px;
    }
  }
</style>