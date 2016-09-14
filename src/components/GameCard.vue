<template>
  <div class="game-card" :class="[cardType, { 'disabled': inDeck === 'X 3' }]" @click="selectCard(card)" @contextmenu.prevent="removeCard(card)">
    <div class="cost" v-show="cardType !== 'general'">{{ card.cost }}</div>
    <div class="name">{{ card.name }}</div>
    <div class="type">{{ card.type }}</div>
    <div class="rarity" :class="[card.rarity]"></div>
    <div v-if="card.attack" class="attack">{{ card.attack }}</div>
    <div v-if="card.health" class="health">{{ card.health }}</div>
    <div class="text">{{ card.text }}</div>
    <div class="qty">{{ inDeck }}</div>
  </div>
</template>

<script>
export default {
  props: ['card'],

  computed: {
    cardType() {
      return ['general', 'artifact', 'spell'].includes(this.card.type)
        ? this.card.type
        : 'minion'
    },

    inDeck() {
      const matchingCard = this.$store.state.deck.cards.find(card => card.name === this.card.name)
      if (matchingCard) return `X ${matchingCard.qty}`
    }
  },

  methods: {
    selectCard(card) {
      card.type === 'general'
        ? this.$store.dispatch('selectGeneral', card)
        : this.$store.dispatch('selectCard', card)
    },

    removeCard(card) {
      this.$store.dispatch('removeCard', card)
    }
  },
}
</script>

<style lang="sass">
  .game-card {
    max-width: 224px;
    height: 296px;
    background-image: url(https://dl.dropboxusercontent.com/u/24984522/card_backgrounds.png);
    color: #fff;
    position: relative;
    text-align: center;
    font-family: LatoRegular;

    &.spell {
      background-position: -225px 0;
    }
    &.artifact {
      background-position: -452px 0;
    }

    &:hover {

    }

    > .cost {
      width: 57px;
      height: 63px;
      font-size: 22px;
      background-image: url(https://dl.dropboxusercontent.com/u/24984522/icon_mana.png);
      position: absolute;
      top: -16px;
      left: -16px;
      line-height: 63px;
      color: #00213b;
      font-weight: bold;
    }

    > .name {
      text-transform: uppercase;
      position: absolute;
      text-align: center;
      width: 100%;
      top: 112px;
      font-size: .8rem;
    }

    > .type {
      color: #90cacf;
      text-transform: uppercase;
      position: absolute;
      text-align: center;
      width: 100%;
      top: 130px;
      font-size: .75rem;
    }

    > .rarity {
      width: 44px;
      height: 44px;
      position: absolute;
      top: 151px;
      left: 89px;

      &.common {
        background-image: url(https://dl.dropboxusercontent.com/u/24984522/collection_card_rarity_common.png)
      }
      &.epic {
        background-image: url(https://dl.dropboxusercontent.com/u/24984522/collection_card_rarity_epic.png)
      }
      &.legendary {
        background-image: url(https://dl.dropboxusercontent.com/u/24984522/collection_card_rarity_epic.png)
      }
      &.rare {
        background-image: url(https://dl.dropboxusercontent.com/u/24984522/collection_card_rarity_rare.png)
      }
    }

    > .attack {
      position: absolute;
      top: 168px;
      left: 27px;
      width: 50px;
      text-align: center;
    }

    > .health {
      position: absolute;
      top: 168px;
      left: 148px;
      width: 50px;
      text-align: center;
    }

    > .text {
      color: #90cacf;
      line-height: 1.2;
      text-align: center;
      position: absolute;
      top: 215px;
      width: 90%;
      left: 5%;
      font-size: .75rem;
    }

    > .qty {
      position: absolute;
      bottom: -1px;
      width: 100%;
      font-size: .7rem;
    }
  }
</style>