<template>
  <dropdown-wrapper>
    <div :class="['menu', { 'active': filter.length }]"><i class="icon icon-mana"></i></div>
    <span class="tool-tip-right">Mana</span>
    <ul class="options">
      <li v-for="n in 10" :class="['option', { 'selected': filter.includes(n - 1) }]" @click="toggleFilter({ type: 'manaSelect', value: n - 1 })">{{ n - 1 }}</li>
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
      ...mapActions('cardList', ['toggleFilter'])
    },

    components: {
      DropdownWrapper,
    },
  }
</script>

<style lang="sass">

</style>