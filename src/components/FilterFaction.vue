<template>
  <dropdown-wrapper v-show="currentFaction">
    <div :class="['menu', { 'active': filter.length }]"><i class="material-icons">navigation</i></div>
    <ul class="options">
      <li :class="['option', { 'selected': filter.includes('neutral') }]" @click="factionSelect('neutral')">Neutral</li>
      <li :class="['option', { 'selected': filter.includes(currentFaction) }]" @click="factionSelect(currentFaction)">{{ currentFaction }}</li>
    </ul>
  </dropdown-wrapper>
</template>

<script>
  import DropdownWrapper from 'components/DropdownWrapper'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    computed: {
      filter () {
        return this.$store.state.cardList.factionSelect
      },

      ...mapGetters(['currentFaction']),
    },

    methods: {
      ...mapActions(['factionSelect'])
    },

    components: {
      DropdownWrapper,
    },
  }
</script>

<style lang="sass">

</style>