<template>
  <dropdown-wrapper>
    <div :class="['menu', { 'active': filter.length }]"><i class="icon icon-tribe"></i></div>
    <span class="tool-tip-right">Tribe</span>
    <ul class="options">
      <li :class="['option', { 'selected': filter.includes('arcanyst')}]" @click="tribeSelect('arcanyst')">Arcanyst</li>
      <li :class="['option', { 'selected': filter.includes('battle pet')}]" @click="tribeSelect('battle pet')">Battle Pet</li>
      <li :class="['option', { 'selected': filter.includes('golem')}]" @click="tribeSelect('golem')">Golem</li>
      <li :class="['option', { 'selected': filter.includes('mech')}]" @click="tribeSelect('mech')">Mech</li>
      <li :class="['option', { 'selected': filter.includes('structure')}]" @click="tribeSelect('structure')">Structure</li>
      <li :class="['option', { 'selected': filter.includes('warmaster')}]" @click="tribeSelect('warmaster')">Warmaster</li>
      <li :class="['option', { 'selected': filter.includes('vespyr')}]" @click="tribeSelect('vespyr')">Vespyr</li>
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
      ...mapActions('cardList', ['tribeSelect'])
    },

    components: {
      DropdownWrapper,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';
</style>