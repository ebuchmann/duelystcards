<template>
  <div :class="['card-cost', card.rarity]">
    <div class="number">{{ card.cost }}</div>
  </div>
</template>

<script>
  import updateHash from 'utils/updateHash'

  export default {
    props: ['card'],
  }
</script>

<style lang="sass">
  @import '../css/includes';

  $card-cost-width-edges: 2.8284px;
  $card-cost-width-sides: 2px;
  $card-cost-size: 22.63px;

  .card-cost {
    position: relative;
    width: 32px; 
    height: 18.48px;
    margin: 9.24px 0;
    margin-left: 10px;
    border-left-style: solid;
    border-right-style: solid;
    border-left-width: $card-cost-width-sides;
    border-right-width: $card-cost-width-sides;

    &.basic, &.basic::before, &.basic::after {
      border-color: $color-basic;
    }

    &.common, &.common::before, &.common::after {
      border-color: $color-common;
    }

    &.rare, &.rare::before, &.rare::after {
      border-color: $color-rare;
    }

    &.epic, &.epic::before, &.epic::after {
      border-color: $color-epic;
    }

    &.legendary, &.legendary::before, &.legendary::after {
      border-color: $color-legendary;
    }

    > .number {
      z-index: $z-card-cost;
      width: 28px;
      line-height: 1.2;
      position: relative;
      text-align: center;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      width: $card-cost-size;
      height: $card-cost-size;
      -webkit-transform: scaleY(0.5774) rotate(-45deg);
      -ms-transform: scaleY(0.5774) rotate(-45deg);
      transform: scaleY(0.5774) rotate(-45deg);
      background-color: inherit;
      left: 2.6863px;
    }

    &::before {
      top: -11.3137px;
      border-top-style: solid;
      border-top-width: $card-cost-width-edges;
      border-right-style: solid;
      border-right-width: $card-cost-width-edges;
    }

    &::after {
      bottom: -11.3137px;
      border-bottom-style: solid;
      border-bottom-width: $card-cost-width-edges;
      border-left-style: solid;
      border-left-width: $card-cost-width-edges;
    }
  }
</style>