<template>
  <div class="deck-card" @click="selectCard(card)" @contextmenu.prevent="removeCard(card)">
    <div class="cost">{{ card.cost }}</div>
    <div class="name">{{ card.name }} x{{ card.qty }}</div>
  </div>
</template>

<script>
  export default {
    props: ['card'],

    methods: {
      selectCard(card) {
        this.$store.dispatch('selectCard', card)
      },

      removeCard(card) {
        this.$store.dispatch('removeCard', card)
      }
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .deck-card {
    background-image: url(https://dl.dropboxusercontent.com/u/24984522/deck_builder_card_bg.png);
    width: 243px;
    height: 40px;
    font-family: LatoRegular;

    > .cost {
      line-height: 40px;
      text-align: center;
      font-weight: bold;
      width: 40px;
      float: left;
    }

    > .name {
      color: #fff;
      line-height: 40px;
      text-indent: 10px;
    }
  }
</style>