<template>
  <dropdown-wrapper>
    <span class="menu account-button account-button">
      {{ user.username }}
    </span>
    <ul class="options">
      <li class="item" @click="toggleProperty('settingsModal')">User Settings</li>
      <li class="divider"></li>
      <li class="item" @click="logout">Sign out</li>
    </ul>
  </dropdown-wrapper>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import DropdownWrapper from 'components/DropdownWrapper'

  export default {
    computed: {
      ...mapState({
        user: ({ user }) => user.user,
      })
    },

    methods: {
      ...mapActions(['logout', 'toggleProperty'])
    },

    components: {
      DropdownWrapper,
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .account-button {
    cursor: pointer;
    background: linear-gradient(to bottom, #134f77 0%,#104365 100%);
    padding: 8px 14px;
    height: auto !important;
    border-radius: 3px;

    &:hover {
      background: linear-gradient(to bottom, #155d84 0%,#134f77 100%);
    }

    > .menu {
      display: none;
    }

    + .options {
      top: 48px;
      right: 0;
      width: 140px;
      margin: 0;

      > .item {
        padding: 5px 12px;
        cursor: pointer;

        &:hover {
          background: lighten($blue, 10%);
        }
      }

      > .divider {
        border-bottom: 1px solid black;
      }
    }
  }
</style>