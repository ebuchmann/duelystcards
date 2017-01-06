<template>
  <div class="card-container">
    <div :class="['game-card', card.type, { 'disabled': inDeck, 'flash': flash, 'dull': dull }]" @click="selectCard(card)" @contextmenu.prevent>
      <div class="card-sprite-block">
        <div :class="['sprite', spriteClass]"></div>
      </div>

      <div v-if="card.attack || card.attack >= 0" class="attack"><i class="icon icon-attack"></i>{{ card.attack }}</div>
      <div v-if="card.health" class="health"><i class="icon icon-health"></i>{{ card.health }}</div>

      <div class="card-name-block">
        <div class="name">{{ card.name }}</div>
        <div class="type" :class="card.type">{{ card.race || card.type }}</div>
      </div>

      <div class="text" v-html="card.text"></div>
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
        this.$store.dispatch('deck/selectGeneral', card)
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