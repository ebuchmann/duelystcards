<template>
  <div class="type-select" tabindex="1">
    <div class="menu">Any type</div>
    <ul class="options">
      <li :class="{ 'selected': $store.state.cardList.typeSelect.includes('artifact')}" @click="$store.dispatch('typeSelect', 'artifact')">Artifact</li>
      <li :class="{ 'selected': $store.state.cardList.typeSelect.includes('minion')}" @click="$store.dispatch('typeSelect', 'minion')">Minion</li>
      <li :class="{ 'selected': $store.state.cardList.typeSelect.includes('spell')}" @click="$store.dispatch('typeSelect', 'spell')">Spell</li>
      <li :class="{ 'selected': $store.state.cardList.typeSelect.includes('general')}" @click="$store.dispatch('typeSelect', 'general')">General</li>
    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="sass">
  .type-select {
    background: #104365;

    > .menu {
 
    }

    > .options {
      list-style: none;
      padding: 0;
      display: none;

      > .selected {
        background: green;
      }
    }
  }

  .type-select:focus > .options {
    display: block;
  }
</style>