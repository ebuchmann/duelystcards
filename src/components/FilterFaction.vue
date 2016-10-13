<template>
  <dropdown-wrapper v-show="currentFaction">
    <div class="menu">{{ labelText }}</div>
    <ul class="options">
      <li :class="['option', { 'selected': $store.state.cardList.factionSelect.includes('neutral') }]" @click="$store.dispatch('factionSelect', 'neutral')">Neutral</li>
      <li :class="['option', { 'selected': $store.state.cardList.factionSelect.includes(currentFaction) }]" @click="$store.dispatch('factionSelect', currentFaction)">{{ currentFaction }}</li>
    </ul>
  </dropdown-wrapper>
</template>

<script>
  import DropdownWrapper from 'components/DropdownWrapper'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      labelText () {
        return this.$store.state.cardList.factionSelect.length
          ? this.$store.state.cardList.factionSelect.map(item => item.charAt(0).toUpperCase() + item.substr(1)).join(', ')
          : 'Select faction'
      },

      ...mapGetters(['currentFaction']),
    },

    components: {
      DropdownWrapper,
    },
  }
</script>

<style lang="sass">

</style>