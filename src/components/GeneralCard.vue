<template>
  <div class="card-container">
    <div :class="['game-card', card.type, { 'disabled': inDeck, 'flash': flash, 'dull': dull }]" @click="selectCard(card)" @contextmenu.prevent="removeCard(card)">
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
    }
  },

  methods: {
    selectCard (card) {
      this.flashCard()
      this.$store.dispatch('selectGeneral', card)
    },

    removeCard (card) {
      this.flashDull()
      this.$store.dispatch('removeCard', card)
    },

    flashCard () {
      clearTimeout(this.timeout)
      this.flash = true
      this.timeout = setTimeout(() => {
        this.flash = false
      }, 200)
    },

    flashDull () {
      this.dull = true
      setTimeout(() => {
        this.dull = false
      }, 200)
    }
  },
}
</script>

<style lang="sass">
  @import '../css/includes';

  @keyframes flashBrightness{
    from{-webkit-filter:brightness(5);filter:brightness(5)}
    to{-webkit-filter:brightness(1);filter:brightness(1)}
  }

  @keyframes flashDull{
    from{-webkit-filter:brightness(2);filter:brightness(2)}
    to{-webkit-filter:brightness(1);filter:brightness(1)}
  }

  .flash {
    animation: flashBrightness .2s;
  }

  .dull {
    animation: flashDull .2s;
  }

  .card-container {
    width: 253px;
    height: 320px;
    float: left;
    padding: 16px 15px;

    &:hover {
      background-image: url(https://dl.dropboxusercontent.com/u/24984522/spritesheet.png);
    }
  }
  
  .game-card {
    width: 224px;
    height: 296px;
    background-image: url(https://dl.dropboxusercontent.com/u/24984522/spritesheet.png);
    color: #fff;
    position: relative;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;

    &.minion, &.general {
      background-position: -719px -2px;

      &.disabled {
        background-position: -1409px -2px;
      }
    }

    &.spell {
      background-position: -489px -2px;

      &.disabled {
        background-position: -1179px -2px;
      }
    }

    &.artifact {
      background-position: -259px -2px;

      &.disabled {
        background-position: -949px -2px;
      }
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
      font-size: .65rem;

      &.artifact {
        color: #edd144;
      }
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
        background-image: url(https://dl.dropboxusercontent.com/u/24984522/collection_card_rarity_legendary.png)
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
      bottom: 0;
      width: 100%;
      font-size: .65rem;
    }
  }
</style>