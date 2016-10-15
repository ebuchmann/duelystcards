<template>
  <dropdown-wrapper v-show="hasActiveFilters">
    <div class="menu" @click="resetFilters"><i class="material-icons">cancel</i></div>
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
</style>