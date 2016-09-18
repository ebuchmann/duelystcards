<template>
  <dropdown-wrapper>
    <div class="menu">{{ labelText }}</div>
    <ul class="options">
      <li :class="{ 'selected': $store.state.cardList.typeSelect.includes('artifact')}" @click="$store.dispatch('typeSelect', 'artifact')">Artifact</li>
      <li :class="{ 'selected': $store.state.cardList.typeSelect.includes('minion')}" @click="$store.dispatch('typeSelect', 'minion')">Minion</li>
      <li :class="{ 'selected': $store.state.cardList.typeSelect.includes('spell')}" @click="$store.dispatch('typeSelect', 'spell')">Spell</li>
      <li :class="{ 'selected': $store.state.cardList.typeSelect.includes('general')}" @click="$store.dispatch('typeSelect', 'general')">General</li>
    </ul>
  </dropdown-wrapper>
</template>

<script>
  import DropdownWrapper from 'components/DropdownWrapper'

  export default {
    computed: {
      labelText () {
        return this.$store.state.cardList.typeSelect.length
          ? this.$store.state.cardList.typeSelect.join(', ')
          : 'Select type'
      },
    },

    components: {
      DropdownWrapper,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';
</style>