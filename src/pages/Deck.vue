<template>
  <div class="deck-page">
    <filter-area></filter-area>
    <div class="left-column">
      <div class="prev-page">
        <span @click="$store.dispatch('goToPage', -1)" class="prev"></span>
      </div>
      <div class="card-grid" @mousewheel="swapPage($event)">
        <template v-for="card in visibleCards">
          <game-card v-if="card.type !== 'general'" :card="card"></game-card>
          <general-card v-else :card="card"></general-card>
        </template>
      </div>
      <div class="next-page">
        <span @click="$store.dispatch('goToPage', 1)" class="next"></span>
      </div>
      <card-pagination></card-pagination>
    </div>
    <div class="right-column">
      <deck-list></deck-list>
      <button v-if="$store.state.deck.cards.length" class="save-deck" @click="bus.$emit('save-deck-modal', true)">Save Deck</button>
    </div>
  </div>
</template>

<script>
  import GameCard from 'components/GameCard'
  import GeneralCard from 'components/GeneralCard'
  import DeckList from 'components/DeckList'
  import CardPagination from 'components/CardPagination'
  import FilterArea from 'components/FilterArea'
  import { mapGetters } from 'vuex'
  import bus from '../bus'

  export default {
    computed: mapGetters({
      visibleCards: 'visibleCards',
      cardsPerPage: 'cardsPerPage',
    }),

    data () {
      return {
        scrolling: false,
        bus,
      }
    },

    methods: {
      swapPage (event) {
        event.preventDefault()
        if (this.scrolling) return

        this.scrolling = true
        event.wheelDelta > 0
          ? this.$store.dispatch('goToPage', -1)
          : this.$store.dispatch('goToPage', 1)

        setTimeout(() => {
          this.scrolling = false
        }, 100)
      },

      resize () {
        window.requestAnimationFrame(() => {
          if (window.innerWidth >= 1499 && this.cardsPerPage !== 8) {
            this.$store.commit('SET_PER_PAGE', 8)
            this.$store.commit('SET_PAGE', 1)
          } else if ((window.innerWidth <= 1498 && window.innerWidth > 1240) && this.cardsPerPage !== 6) {
            this.$store.commit('SET_PER_PAGE', 6)
            this.$store.commit('SET_PAGE', 1)
          }
          else if (window.innerWidth < 1240 && this.cardsPerPage !== 4) {
            this.$store.commit('SET_PER_PAGE', 4)
            this.$store.commit('SET_PAGE', 1)
          }
        })
      },
    },

    beforeRouteLeave (route, redirect, next) {
      this.$store.dispatch('resetAll')
      next()
    },

    created() {
      if (this.$store.state.route.hash) this.$store.dispatch('loadDeck', this.$store.state.route.hash.substr(1))

      this.resize()
      window.addEventListener('resize', this.resize)
    },

    components: {
      GameCard,
      GeneralCard,
      DeckList,
      CardPagination,
      FilterArea,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .deck-page {
    min-width: 945px;
  }

  .left-column {
    float: left;
    position: relative;
    width: calc(100% - 360px);
    margin-top: 20px;
    padding: 0 40px;
  }

  .right-column {
    float: right;
    width: 340px;
    margin-top: 10px;
    margin-left: 20px;
  }

  .card-grid {
    margin: 0 auto;
    max-width: 1016px;
    @include clearfix;

    @media screen and (min-width: 600px) and (max-width: 1239px) {
      width: 508px;
    }

    @media screen and (min-width: 1240px) and (max-width: 1498px) {
      width: 762px;
    }
  }

  .deck-page {
    @include clearfix;
  }

  .prev-page, .next-page {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .prev-page {
    left: 0;
  }

  .next-page {
    right: 0;
  }

  .prev-page > .prev, .next-page > .next {
    background-repeat: no-repeat;
    width: 32px;
    height: 40px;
    display: inline-block;
    cursor: pointer;
  }

  .prev-page {
    > .prev {
      background-image: url(https://dl.dropboxusercontent.com/u/24984522/dialogue_carat_left.png);
    }
  }

  .next-page {
    > .next {
      background-image: url(https://dl.dropboxusercontent.com/u/24984522/dialogue_carat.png);
    }
  }  
</style>