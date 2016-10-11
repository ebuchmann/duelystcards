<template>
  <section class="card-section">
    <div :class="['title', faction]">
      <h2>{{ faction | capitalize }}</h2>
      <span>{{ cards.length }} visible cards</span>
    </div>
    <div class="card-grid">
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

  export default {
    props: ['faction', 'cards'],

    filters: {
      capitalize (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      },
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

    .title {
      border-bottom: 1px solid white;

      &.abyssian { color: $color-abyssian; }
      &.lyonar { color: $color-lyonar; }
      &.songhai { color: $color-songhai; }
      &.magmar { color: $color-magmar; }
      &.vanar { color: $color-vanar; }
      &.vetruvian { color: $color-vetruvian; }
    }
  }

  .card-grid {
    display: flex;
    flex-wrap: wrap;
  }
</style>