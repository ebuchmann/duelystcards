<template>
  <div class="dropdown-wrapper" tabindex="1">
    <slot></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="sass">
  @import '../css/includes';

  .dropdown-wrapper {
    background: $blue;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;

    > .menu {
      padding: 0 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:focus, &:active {
      outline: none;
    }

    > .options {
      list-style: none;
      padding: 0;
      display: none;
      position: absolute;
      width: 100%;
      background: $blue;
      z-index: $filter-area;
      top: 42px;

      > li {
        padding: 10px;

        &.selected {
          background: darken($blue, 10%)
        }

        &:hover {
          background: darken($blue, 10%)
        }
      }
    }
  }

  .dropdown-wrapper:focus > .options {
    display: block;
  }
</style>