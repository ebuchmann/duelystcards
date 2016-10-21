<template>
  <dropdown-wrapper v-show="hasActiveFilters">
    <div class="menu filter-clear" @click="resetFilters"><svg class="icon icon-mana-empty"><use xlink:href="#icon-mana-empty"></use></svg></div>
  </dropdown-wrapper>
</template>

<script>
  import DropdownWrapper from 'components/DropdownWrapper'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['hasActiveFilters']),
    },

    methods: {
      ...mapActions(['resetFilters'])
    },

    components: {
      DropdownWrapper,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .filter-clear {
    border-top: 1px solid $blue;
  }
</style>