<template>
  <div :class="['card-cost', card.rarity]">
    <div class="icon icon-mana-empty"></div>
    <span class="number">{{ card.cost }}</span>
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

  .card-cost {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &.basic { color: $color-basic; }
    &.common { color: $color-common; }
    &.rare { color: $color-rare; }
    &.epic { color: $color-epic; }
    &.legendary { color: $color-legendary; }

    > .icon {
      font-size: 2.2rem;
    }

    > .number {
      position: absolute;
      width: 100%;
      text-align: center;
      top: 6px;
      left: 0;
    }
  }
</style>