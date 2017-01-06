<template>
  <general-modal :show="modal" :close="closeModal">
    <form class="login-modal" @submit.prevent="handleSubmit">
      <div class="login-left">
        <h2 class="title">
          <template v-if="showLogin">Sign In</template>
          <template v-else>Sign up</template>
        </h2>

        <div :class="['msg', `msg-${msgType}`]" v-if="msg.length > 0">{{ msg }}</div>

        <label class="label">Username</label>
        <input :class="['input', { error: !validate.username}]" v-model="username" ref="username" />
        <span class="error-text" v-if="!validate.username">Username is required</span>

        <label class="label">Password</label>
        <input :class="['input', { error: !validate.password}]" v-model="password" type="password" />
        <span class="error-text" v-if="!validate.password">Password must be at least 8 characters</span>


        <template v-if="showLogin">
          <button class="button">Login</button>
          <div class="extra">Don't have an account? <span class="link" @click="showLogin = false">Sign up here!</span></div>
        </template>

        <template v-else>
          <label class="label">Email</label>
          <input :class="['input', { error: !validate.email}]" v-model="email" />
          <span class="error-text" v-if="!validate.email">Email is required</span>

          <button class="button">Create account</button>

          <div class="extra">Already have an account? <span class="link" @click="showLogin = true">Sign in here!</span></div>
        </template>
      </div>
      <div class="login-right">
        <img src="../../assets/images/login_background.jpg" alt="login" />
      </div>
    </form>
  </general-modal>
</template>

<script>
  import GeneralModal from 'components/GeneralModal'
  import { mapActions, mapState } from 'vuex'
  import isEmail from 'validator/lib/isEmail'

  export default {
    data () {
      return {
        username: '',
        password: '',
        email: '',
        msg: '',
        msgType: 'success',
        showLogin: true,
        waiting: false,
        validate: {
          username: true,
          password: true,
          email: true,
        }
      }
    },

    computed: {
      ...mapState({
        modal: ({ app }) => app.loginModal,
      }),
    },

    watch: {
      modal() {
        if (!this.modal) return;

        this.$nextTick(() => {
          this.$refs.username.focus()
        })
      },
    },

    methods: {
      ...mapActions('app', ['toggleProperty']),
      ...mapActions('user', ['login', 'createAccount']),

      closeModal () {
        this.toggleProperty('loginModal')
        this.resetForm()
      },

      handleSubmit () {
        this.showLogin ? this.handleLogin() : this.handleSignup()
      },

      async handleLogin () {
        this.validateLogin();

        if (!this.validate.username || !this.validate.password) return;

        try {
          this.waiting = true
          await this.login({ username: this.username, password: this.password })
          this.resetForm()
          this.closeModal()
        } catch (error) {
          this.waiting = false
          this.msg = error.message
          this.msgType = 'error'
        }
      },

      async handleSignup () {
        this.validateLogin();

        if (!this.validate.username || !this.validate.password || !this.validate.email) return;

        try {
          this.waiting = true
          await this.createAccount({ username: this.username, password: this.password, email: this.email })
          this.resetForm();
          this.msg = 'Account created. Please sign in.';
        } catch (error) {
          this.waiting = false;
          this.msg = error.message;
          this.msgType = 'error';
        }
      },

      validateLogin () {
        this.validate.username = true;
        this.validate.password = true;
        this.validate.email = true;
        this.msg = '';
        this.msgType = 'success';

        if (this.username.length === 0) this.validate.username = false;
        if (this.password.length < 8) this.validate.password = false;
        if (!this.showLogin && !isEmail(this.email)) this.validate.email = false;
      },

      resetForm () {
        this.username = ''
        this.password = ''
        this.email = ''
        this.showLogin = true
        this.validate.username = true;
        this.validate.password = true;
        this.validate.email = true;
      },
    },

    components: {
      GeneralModal,
    },
  }
</script>

<style lang="sass">
  @import '../../css/includes';

  .login-modal {
    display: flex;

    > .login-left {
      flex: 0 0 60%;
      padding: 15px 15px 0;
      display: flex;
      flex-direction: column;

      > .msg {
        border-width: 2px;
        border-style: solid;
        padding: 10px;
        margin-bottom: 10px;

        &-error {
          border-color: $color-red;
        }

        &-success{
          border-color: $color-green;
        }
      }

      > .title {
        text-align: center;
      }

      > .input {
        background: rgba(#000, 0.9);
        border: 1px solid $blue;
        color: $light;
        width: 100%;
        padding: 8px;
        margin-bottom: 15px;

        &.error {
          border: 1px solid rgba($color-red, .6);

          &:focus {
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba($color-red, .6);
          }
        }

        &:focus {
          outline: 0;
          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
        }
      }

      > .error-text {
        color: $color-red;
        font-size: .8rem;
        margin: -15px 0 15px;
      }

      > .label {
        
      }

      > .button {
        cursor: pointer;
        margin-bottom: 15px;
      }

      > .extra {
        margin-bottom: 15px;
        font-size: 90%;
        width: 100%;
        align-self: flex-end;
        margin-top: auto;
        text-align: center;

        > .link {
          color: $blue-light;
          cursor: pointer;
        }
      }
    }

    > .login-right {
      img {
        width: 100%;
        height: 100%;
      }
    }

  }
</style>