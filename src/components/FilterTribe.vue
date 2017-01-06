<template>
  <dropdown-wrapper>
    <div :class="['menu', { 'active': filter.length }]"><i class="icon icon-tribe"></i></div>
    <span class="tool-tip-right">Tribe</span>
    <ul class="options">
      <li :class="['option', { 'selected': filter.includes('arcanyst')}]" @click="toggleFilter({ type: 'tribeSelect', value: 'arcanyst' })">Arcanyst</li>
      <li :class="['option', { 'selected': filter.includes('battle pet')}]" @click="toggleFilter({ type: 'tribeSelect', value: 'battle pet' })">Battle Pet</li>
      <li :class="['option', { 'selected': filter.includes('golem')}]" @click="toggleFilter({ type: 'tribeSelect', value: 'golem' })">Golem</li>
      <li :class="['option', { 'selected': filter.includes('mech')}]" @click="toggleFilter({ type: 'tribeSelect', value: 'mech' })">Mech</li>
      <li :class="['option', { 'selected': filter.includes('structure')}]" @click="toggleFilter({ type: 'tribeSelect', value: 'structure' })">Structure</li>
      <li :class="['option', { 'selected': filter.includes('warmaster')}]" @click="toggleFilter({ type: 'tribeSelect', value: 'warmaster' })">Warmaster</li>
      <li :class="['option', { 'selected': filter.includes('vespyr')}]" @click="toggleFilter({ type: 'tribeSelect', value: 'vespyr' })">Vespyr</li>
    </ul>
  </dropdown-wrapper>
</template>

<script>
  import DropdownWrapper from 'components/DropdownWrapper'
  import { mapActions } from 'vuex'

  export default {
    computed: {
      filter () {
        return this.$store.state.cardList.tribeSelect
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
  @import '../css/includes';
</style>