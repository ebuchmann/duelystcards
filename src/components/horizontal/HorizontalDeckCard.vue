<template>
  <div :class="['horizontal-deck-card', card.rarity]">
    <div class="cost">{{ card.cost }}</div>
    <i class="icon icon-mana"></i>
    <div class="name">{{ card.name }} x{{ card.qty }}</div>
  </div>
</template>

<script>
  export default {
    props: ['card']
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .horizontal-deck-card {
    background: $dark;
    color: $light;
    margin: 3px 0;
    padding: 3px;
    position: relative;
    display: flex;
    align-items: center;
    font-size: .85rem;

    > .cost {
      margin-right: 3px;
      font-size: .8rem;
    }

    > .icon {
      font-size: .8rem;
    }

    &.basic .icon { color: $color-basic; }
    &.common .icon { color: $color-common; }
    &.rare .icon { color: $color-rare; }
    &.epic .icon { color: $color-epic; }
    &.legendary .icon { color: $color-legendary; }

    > .name {
      width: 150px;
      margin-left: 8px;
      line-height: 1.1;

      > .qty {
        font-size: .7rem;
      }
    }

  }
</style>