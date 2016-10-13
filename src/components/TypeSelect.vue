<template>
  <dropdown-wrapper>
    <div class="menu">{{ labelText }}</div>
    <ul class="options">
      <li :class="['option', { 'selected': $store.state.cardList.typeSelect.includes('artifact')}]" @click="typeSelect('artifact')">Artifact</li>
      <li :class="['option', { 'selected': $store.state.cardList.typeSelect.includes('minion')}]" @click="typeSelect('minion')">Minion</li>
      <li :class="['option', { 'selected': $store.state.cardList.typeSelect.includes('spell')}]" @click="typeSelect('spell')">Spell</li>
      <li :class="['option', { 'selected': $store.state.cardList.typeSelect.includes('general')}]" @click="typeSelect('general')">General</li>
    </ul>
  </dropdown-wrapper>
</template>

<script>
  import DropdownWrapper from 'components/DropdownWrapper'
  import { mapActions } from 'vuex'

  export default {
    computed: {
      labelText () {
        return this.$store.state.cardList.typeSelect.length
          ? this.$store.state.cardList.typeSelect.map(item => item.charAt(0).toUpperCase() + item.substr(1)).join(', ')
          : 'All types'
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