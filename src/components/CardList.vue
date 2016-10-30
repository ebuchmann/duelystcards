<template>
  <section class="card-section">
    <div :class="['card-section-top', faction]">
      <h2 class="title">{{ faction | capitalize }}</h2>
      <span class="cards">{{ cards.length }} of {{ cardCount }} cards</span>
    </div>
    <div :class="['card-grid', { 'small': drawerState }]">
      <template v-for="card in cards">
        <game-card v-if="card.type !== 'general'" :card="card"></game-card>
        <general-card v-else :card="card"></general-card>
      </template>
    </div>
  </section>
</template>

<script>
  import GameCard from 'components/GameCard'
  import GeneralCard from 'components/GeneralCard'
  import allCards from '../cards'
  import generals from '../cards/generals'

  export default {
    props: ['faction', 'cards'],

    computed: {
      drawerState () {
        return this.$store.state.app.drawerOpen
      },

      cardCount () {
        if (this.faction !== 'generals') return this.faction === 'neutral' ? allCards[this.faction].length : allCards[this.faction].length + 2
        return generals.length
      }
    },

    components: {
      GameCard,
      GeneralCard,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .card-section {
    margin-bottom: 60px;
  }

  .card-section-top {
    display: flex;
    align-items: center;
    border-bottom: 1px solid $light;

    > .title {
      flex: 1;
      margin: 0;
    }

    > .cards {
      font-size: .9rem;
    }

    &.abyssian { color: $color-abyssian; }
    &.lyonar { color: $color-lyonar; }
    &.songhai { color: $color-songhai; }
    &.magmar { color: $color-magmar; }
    &.vanar { color: $color-vanar; }
    &.vetruvian { color: $color-vetruvian; }
  }

  .card-grid {
    display: flex;
    flex-wrap: wrap;

    .card-container {
      flex: 0 0 100%;
      padding: 16px 15px;
      margin-bottom: 15px;

      @include breakpoint(md) {
        flex: 0 0 50%;
      }

      @include breakpoint(lg) {
        flex: 0 0 25%;
      }

      @include breakpoint(vl) {
        flex: 0 0 20%;
      }
    }
  }

  .card-grid.small {
    .card-container {
      @include breakpoint(md) {
        flex: 0 0 50%;
      }

      @include breakpoint(lg) {
        flex: 0 0 33%;
      }

      @include breakpoint(vl) {
        flex: 0 0 20%;
      } 
    }
  }
</style>