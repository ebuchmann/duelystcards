<template>
  <dropdown-wrapper>
    <div :class="['menu', { 'active': filter.length }]"><i class="icon icon-tribe"></i></div>
    <span class="tool-tip-right">Tribe</span>
    <ul class="options">
      <li :class="['option', { 'selected': filter.includes('Arcanyst')}]" @click="toggleFilter({ type: 'tribeSelect', value: 'Arcanyst' })">Arcanyst</li>
      <li :class="['option', { 'selected': filter.includes('Battle Pet')}]" @click="toggleFilter({ type: 'tribeSelect', value: 'Battle Pet' })">Battle Pet</li>
      <li :class="['option', { 'selected': filter.includes('Golem')}]" @click="toggleFilter({ type: 'tribeSelect', value: 'Golem' })">Golem</li>
      <li :class="['option', { 'selected': filter.includes('Mech')}]" @click="toggleFilter({ type: 'tribeSelect', value: 'Mech' })">Mech</li>
      <li :class="['option', { 'selected': filter.includes('Structure')}]" @click="toggleFilter({ type: 'tribeSelect', value: 'Structure' })">Structure</li>
      <li :class="['option', { 'selected': filter.includes('Vespyr')}]" @click="toggleFilter({ type: 'tribeSelect', value: 'Vespyr' })">Vespyr</li>
    </ul>
  </dropdown-wrapper>
</template>

<script>
import DropdownWrapper from 'components/DropdownWrapper';
import { mapActions } from 'vuex';

export default {
  computed: {
    filter() {
      return this.$store.state.cardList.tribeSelect;
    }
  },

  methods: {
    ...mapActions('cardList', ['toggleFilter'])
  },

  components: {
    DropdownWrapper
  }
};
</script>

<style lang="sass">
  @import '../css/includes';
</style>
