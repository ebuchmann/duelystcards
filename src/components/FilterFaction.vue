<template>
  <dropdown-wrapper>
    <div class="menu">{{ labelText }}</div>
    <ul class="options">
      <li :class="{ 'selected': $store.state.cardList.factionSelect.includes('neutral') }" @click="$store.dispatch('factionSelect', 'neutral')"> Neutral</li>
      <li :class="{ 'selected': $store.state.cardList.factionSelect.includes(currentFaction) }" @click="$store.dispatch('factionSelect', currentFaction)"> {{ currentFaction }}</li>
    </ul>
  </dropdown-wrapper>
</template>

<script>
  import DropdownWrapper from 'components/DropdownWrapper'

  export default {
    computed: {
      labelText () {
        return this.$store.state.cardList.factionSelect.length
          ? this.$store.state.cardList.factionSelect.join(', ')
          : 'Select faction'
      },

      currentFaction () {
        return this.$store.state.route.params.faction
      },
    },

    components: {
      DropdownWrapper,
    },
  }
</script>

<style lang="sass">

</style>