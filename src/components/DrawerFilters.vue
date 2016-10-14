<template>
  <div class="drawer-filters">
    <label class="label">FILTERS</label>
    <type-select />
    <rarity-select />
    <filter-faction />
    <div class="clear-filters" @click="resetFilters" v-show="hasActiveFilters">
      <i class="material-icons">cancel</i>
    </div>
  </div>
</template>

<script>
  import TypeSelect from 'components/TypeSelect'
  import RaritySelect from 'components/RaritySelect'
  import FilterFaction from 'components/FilterFaction'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['hasActiveFilters']),
    },

    methods: {
      ...mapActions(['resetFilters'])
    },

    components: {
      TypeSelect,
      RaritySelect,
      FilterFaction,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .drawer-filters {
    width: $width-drawer-filter;
    position: fixed;
    left: 0;
    top: 48px;
    bottom: 0;
    margin-right: 20px;
    height: calc(100vh - 48px);
    transition: $all-fast;
    z-index: $z-drawer-filters;
    background: darken($blue-dark, 2%);

    > .label {
     font-size: .8rem;
     display: block;
     text-align: center;
     padding: 15px 0;
     border-bottom: 1px solid white;
    }
  }

  .clear-filters {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
</style>