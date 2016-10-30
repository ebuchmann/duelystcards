<template>
  <dropdown-wrapper>
    <div :class="['menu', { 'active': filter.length }]"><i class="icon icon-mana"></i></div>
    <span class="tool-tip-right">Mana</span>
    <ul class="options">
      <li :class="['option', { 'selected': filter.includes(0) }]" @click="manaSelect(0)"> 0</li>
      <li :class="['option', { 'selected': filter.includes(1) }]" @click="manaSelect(1)"> 1</li>
      <li :class="['option', { 'selected': filter.includes(2) }]" @click="manaSelect(2)"> 2</li>
      <li :class="['option', { 'selected': filter.includes(3) }]" @click="manaSelect(3)"> 3</li>
      <li :class="['option', { 'selected': filter.includes(4) }]" @click="manaSelect(4)"> 4</li>
      <li :class="['option', { 'selected': filter.includes(5) }]" @click="manaSelect(5)"> 5</li>
      <li :class="['option', { 'selected': filter.includes(6) }]" @click="manaSelect(6)"> 6</li>
      <li :class="['option', { 'selected': filter.includes(7) }]" @click="manaSelect(7)"> 7</li>
      <li :class="['option', { 'selected': filter.includes(8) }]" @click="manaSelect(8)"> 8</li>
      <li :class="['option', { 'selected': filter.includes(9) }]" @click="manaSelect(9)"> 9+</li>
    </ul>
  </dropdown-wrapper>
</template>

<script>
  import DropdownWrapper from 'components/DropdownWrapper'
  import { mapActions } from 'vuex'

  export default {
    computed: {
      filter () {
        return this.$store.state.cardList.manaSelect
      },
    },

    methods: {
      ...mapActions(['manaSelect'])
    },

    components: {
      DropdownWrapper,
    },
  }
</script>

<style lang="sass">

</style>