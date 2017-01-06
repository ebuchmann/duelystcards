<template>
  <dropdown-wrapper>
    <div :class="['menu', { 'active': filter.length }]"><i class="icon icon-rarity"></i></div>
    <span class="tool-tip-right">Rarity</span>
    <ul class="options">
      <li :class="['option', { 'selected': filter.includes('basic') }]" @click="raritySelect('basic')"> Basic</li>
      <li :class="['option', { 'selected': filter.includes('common') }]" @click="raritySelect('common')"> Common</li>
      <li :class="['option', { 'selected': filter.includes('rare') }]" @click="raritySelect('rare')"> Rare</li>
      <li :class="['option', { 'selected': filter.includes('epic') }]" @click="raritySelect('epic')"> Epic</li>
      <li :class="['option', { 'selected': filter.includes('legendary') }]" @click="raritySelect('legendary')"> Legendary</li>
    </ul>
  </dropdown-wrapper>
</template>

<script>
  import DropdownWrapper from 'components/DropdownWrapper'
  import { mapActions } from 'vuex'

  export default {
    computed: {
      filter () {
        return this.$store.state.cardList.raritySelect
      },
    },

    methods: {
      ...mapActions('cardList', ['raritySelect'])
    },

    components: {
      DropdownWrapper,
    },
  }
</script>

<style lang="sass">

</style>