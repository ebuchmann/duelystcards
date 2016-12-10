<template>
  <general-modal :show="modal" width="500px" :close="closeModal">
    <div class="login-modal">
      <h2 class="title">Login</h2>
      <label>Username</label>
      <input v-model="username" />
      <label>Password</label>
      <input v-model="password" />
      <button @click="handleLogin">Login</button>
    </div>
  </general-modal>
</template>

<script>
  import GeneralModal from 'components/GeneralModal'
  import { mapActions, mapState } from 'vuex'

  export default {
    data () {
      return {
        username: '',
        password: '',
      }
    },

    computed: {
      ...mapState({
        modal: ({ app }) => app.loginModal,
      }),
    },

    methods: {
      ...mapActions(['toggleProperty', 'login']),

      closeModal () {
        this.toggleProperty('loginModal')
      },

      async handleLogin () {
        await this.login({ username: this.username, password: this.password })
        this.closeModal()
      }
    },

    components: {
      GeneralModal,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .login-modal {
    text-align: center;

    > .title {
      padding-top: 15px;
    }
  }
</style>