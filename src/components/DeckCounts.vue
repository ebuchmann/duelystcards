<template>
  <div class="deck-counts">
    <span class="count">
      <label class="label">Minions</label>
      <span :class="['value', currentFaction]">{{ minionCount }}</span> 
    </span>
    <span class="count">
      <label class="label">Spells</label>
      <span :class="['value', currentFaction]">{{ spellCount }}</span>
    </span>
    <span class="count">
      <label class="label">Artifacts</label>
      <span :class="['value', currentFaction]">{{ artifactCount }}</span>
    </span>
    <span class="count">
      <label class="label">Spirit</label>
      <span :class="['value', currentFaction]">{{ spirit }}</span>
    </span>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      minionCount () {
        return this.$store.state.deck.cards.filter(card => !['spell', 'artifact'].includes(card.type)).reduce((prev, curr) => prev + curr.qty, 0)
      },

      spellCount () {
        return this.$store.state.deck.cards.filter(card => card.type === 'spell').reduce((prev, curr) => prev + curr.qty, 0)
      },

      artifactCount () {
        return this.$store.state.deck.cards.filter(card => card.type === 'artifact').reduce((prev, curr) => prev + curr.qty, 0)
      },

      spirit () {
        return this.$store.state.deck.spirit
      },

      ...mapGetters('deck', ['currentFaction']),
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .deck-counts {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;

    > .count {
      flex: 0 0 23%;
      background: $dark;
      text-align: center;
      font-size: 1.2rem;

      &:last-child {
        border-right: none;
      }

      > .label {
        text-align: center;
        display: block;
        font-size: .9rem;
        margin: 0;
        padding-top: 4px;
        color: #999;
      }

      > .value {
        &.lyonar { color: $color-lyonar; }
        &.abyssian { color: $color-abyssian; }
        &.vanar { color: $color-vanar; }
        &.vetruvian { color: $color-vetruvian; }
        &.magmar { color: $color-magmar; }
        &.songhai { color: $color-songhai; }
      }
    }
  }
</style>