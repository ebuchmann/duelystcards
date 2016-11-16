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

  .dropdown-wrapper:focus > .menu, .dropdown-wrapper > .menu:hover {
    background: lighten($blue-dark, 25%);
  }

  .dropdown-wrapper {
    position: relative;

    > .menu {
      text-align: center;
      cursor: pointer;
      height: 48px;
      display: flex;
      align-items: center;

      > .icon {
        width: 100%;
        font-size: 1.3rem;
      }

      &.active {
        color: $blue-light;
      }
    }

    &:focus, &:active {
      outline: none;
    }

    > .options {
      list-style: none;
      padding: 0;
      display: none;
      position: absolute;
      background: $blue;
      z-index: $filter-area;
      margin-left: $width-drawer-filter;
      top: 0;

      > .option {
        padding: 10px 20px;
        white-space: nowrap;

        &::before {
          @include font-icon($icon-checkbox-empty);
          position: relative;
          top: 2px;
          margin-right: 10px;
        }

        &.selected::before {
          @include font-icon($icon-checkbox);
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

  .dropdown-wrapper > .menu + .tool-tip-right {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    background: $blue;
    left: 55px;
    top: 50%;
    padding: 4px;
    transform: translateY(-50%);
    white-space: nowrap;
    transition: visibility 0s, opacity 0.3s ease-out;
    border-radius: 4px;
  }

  .dropdown-wrapper > .menu:hover + .tool-tip-right {
    visibility: visible;
    opacity: 1;
  }
</style>