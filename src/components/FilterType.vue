<template>
  <dropdown-wrapper>
    <div :class="['menu', { 'active': filter.length }]"><i class="icon icon-type"></i></div>
    <span class="tool-tip-right">Type</span>
    <ul class="options">
      <li :class="['option', { 'selected': filter.includes('artifact')}]" @click="toggleFilter({ type: 'typeSelect', value: 'artifact' })">Artifact</li>
      <li :class="['option', { 'selected': filter.includes('minion')}]" @click="toggleFilter({ type: 'typeSelect', value: 'minion' })">Minion</li>
      <li :class="['option', { 'selected': filter.includes('spell')}]" @click="toggleFilter({ type: 'typeSelect', value: 'spell' })">Spell</li>
      <li :class="['option', { 'selected': filter.includes('general')}]" @click="toggleFilter({ type: 'typeSelect', value: 'general' })">General</li>
    </ul>
  </dropdown-wrapper>
</template>

<script>
  import DropdownWrapper from 'components/DropdownWrapper'
  import { mapActions } from 'vuex'

  export default {
    computed: {
      filter () {
        return this.$store.state.cardList.typeSelect
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