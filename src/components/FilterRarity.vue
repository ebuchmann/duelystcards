<template>
  <dropdown-wrapper>
    <div :class="['menu', { 'active': filter.length }]"><i class="icon icon-rarity"></i></div>
    <span class="tool-tip-right">Rarity</span>
    <ul class="options">
      <li :class="['option', { 'selected': filter.includes('basic') }]" @click="toggleFilter({ type: 'raritySelect', value: 'basic' })"> Basic</li>
      <li :class="['option', { 'selected': filter.includes('common') }]" @click="toggleFilter({ type: 'raritySelect', value: 'common' })"> Common</li>
      <li :class="['option', { 'selected': filter.includes('rare') }]" @click="toggleFilter({ type: 'raritySelect', value: 'rare' })"> Rare</li>
      <li :class="['option', { 'selected': filter.includes('epic') }]" @click="toggleFilter({ type: 'raritySelect', value: 'epic' })"> Epic</li>
      <li :class="['option', { 'selected': filter.includes('legendary') }]" @click="toggleFilter({ type: 'raritySelect', value: 'legendary' })"> Legendary</li>
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
      ...mapActions('cardList', ['toggleFilter'])
    },

    components: {
      DropdownWrapper,
    },
  }
</script>

<style lang="sass">

</style>