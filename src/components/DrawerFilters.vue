<template>
  <div :class="['drawer-filters', { closed }]">
    <label class="label">FILTERS</label>
    <type-select />
    <rarity-select />
    <filter-faction />
    <div class="clear-filters" @click="resetFilters" v-show="hasActiveFilters">
      XX
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
      closed () {
        return !this.$store.state.app.drawerOpen
      },

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
    height: calc(100vh - 60px);
    transition: $all-fast;
    z-index: $z-drawer-filters;
    border-right: 1px solid white;

    > .label {
     font-size: .8rem;
     display: block;
     text-align: center;
     padding: 15px 0;
     border-bottom: 1px solid white;
    }

    &.closed {
      transform: translateX(-112%);
    }
  }
</style>