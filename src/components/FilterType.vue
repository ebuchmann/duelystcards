<template>
  <dropdown-wrapper>
    <div :class="['menu', { 'active': filter.length }]"><i class="icon icon-clear-deck"></i></div>
    <ul class="options">
      <li :class="['option', { 'selected': filter.includes('artifact')}]" @click="typeSelect('artifact')">Artifact</li>
      <li :class="['option', { 'selected': filter.includes('minion')}]" @click="typeSelect('minion')">Minion</li>
      <li :class="['option', { 'selected': filter.includes('spell')}]" @click="typeSelect('spell')">Spell</li>
      <li :class="['option', { 'selected': filter.includes('general')}]" @click="typeSelect('general')">General</li>
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
      ...mapActions(['typeSelect'])
    },

    components: {
      DropdownWrapper,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';
</style>