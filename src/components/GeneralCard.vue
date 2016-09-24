<template>
  <div class="card-container">
    <div :class="['game-card', card.type, { 'disabled': inDeck, 'flash': flash, 'dull': dull }]" @click="selectCard(card)" @contextmenu.prevent>
      <div :class="['sprite', spriteClass]"></div>
      <div class="cost" v-show="card.type !== 'general'">{{ card.cost }}</div>
      <div class="name">{{ card.name }}</div>
      <div class="type" :class="card.type">{{ card.race || card.type }}</div>
      <div class="rarity" :class="[card.rarity]"></div>
      <div v-if="card.attack" class="attack">{{ card.attack }}</div>
      <div v-if="card.health" class="health">{{ card.health }}</div>
      <div class="text" v-html="card.text"></div>
      <div class="qty">{{ inDeck ? 'X 1' : '' }}</div>
    </div>
  </div>
</template>

<script>
  import updateHash from 'utils/updateHash'

  export default {
    props: ['card'],

    data () {
      return {
        flash: false,
        dull: false,
        timeout: null,
      }
    },

    computed: {
      inDeck () {
        if (this.$store.state.deck.general) return this.$store.state.deck.general.id === this.card.id
      },

      spriteClass () {
        return `${this.card.type} ${this.card.type}-sprite ${this.card.type}-${this.card.id}`
      }
    },

    methods: {
      selectCard (card) {
        if (this.inDeck) return

        this.flashCard()
        this.$store.dispatch('selectGeneral', card)
        updateHash(this.$store.state.deck)
      },

      flashCard () {
        clearTimeout(this.timeout)
        this.flash = true
        this.timeout = setTimeout(() => {
          this.flash = false
        }, 200)
      },
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .game-card {

  }
</style>