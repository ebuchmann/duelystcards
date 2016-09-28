<template>
  <dropdown-wrapper>
    <div class="menu">{{ labelText }}</div>
    <ul class="options">
      <li :class="['option', { 'selected': $store.state.cardList.raritySelect.includes('basic') }]" @click="$store.dispatch('raritySelect', 'basic')"> Basic</li>
      <li :class="['option', { 'selected': $store.state.cardList.raritySelect.includes('common') }]" @click="$store.dispatch('raritySelect', 'common')"> Common</li>
      <li :class="['option', { 'selected': $store.state.cardList.raritySelect.includes('rare') }]" @click="$store.dispatch('raritySelect', 'rare')"> Rare</li>
      <li :class="['option', { 'selected': $store.state.cardList.raritySelect.includes('epic') }]" @click="$store.dispatch('raritySelect', 'epic')"> Epic</li>
      <li :class="['option', { 'selected': $store.state.cardList.raritySelect.includes('legendary') }]" @click="$store.dispatch('raritySelect', 'legendary')"> Legendary</li>
    </ul>
  </dropdown-wrapper>
</template>

<script>
  import DropdownWrapper from 'components/DropdownWrapper'

  export default {
    computed: {
      labelText () {
        return this.$store.state.cardList.raritySelect.length
          ? this.$store.state.cardList.raritySelect.map(item => item.charAt(0).toUpperCase() + item.substr(1)).join(', ')
          : 'Select rarity'
      },
    },

    components: {
      DropdownWrapper,
    },
  }
</script>

<style lang="sass">

</style>