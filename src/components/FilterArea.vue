<template>
  <div class="filter-area">
    <div class="medium">
      <text-search></text-search>
    </div>
    <div class="small">
      <type-select></type-select>
    </div>
    <div class="small">
      <rarity-select></rarity-select>
    </div>
  </div>
</template>

<script>
  import TextSearch from 'components/TextSearch'
  import TypeSelect from 'components/TypeSelect'
  import RaritySelect from 'components/RaritySelect'

  export default {
    components: {
      TextSearch,
      TypeSelect,
      RaritySelect,
    }
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .filter-area {
    height: 40px;
    z-index: $filter-area;

    > .medium {
      height: 100%;
      @include span (4 of 12)
    }

    > .small {
      height: 100%;
      @include span (2 of 12)
    }
  }
</style>