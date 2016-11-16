<template>
  <general-modal :show="modal" width="500px" :close="closeModal">
    <div class="imgur-modal">
      <h2 class="title">Image ready</h2>
      <a class="link" :href="imgurLink" target="_blank">{{ imgurLink }}</a>
      <div class="modal-buttons">
        <button class="button" ref="copy">Copy link</button>
      </div>
    </div>
  </general-modal>
</template>

<script>
  import GeneralModal from 'components/GeneralModal'
  import Clipboard from 'clipboard'
  import { mapState, mapActions } from 'vuex'

  export default {
    data () {
      return {
        error: false,
      }
    },

    computed: {
      ...mapState({
        modal: ({ app }) => app.imgurModal,
        imgurLink: ({ app }) => app.imgurLink,  
      }),
    },

    methods: {
      ...mapActions(['toggleProperty']),

      closeModal () {
        this.toggleProperty('imgurModal')
      },
    },

    mounted () {
      new Clipboard(this.$refs.copy, {
        text: () => this.imgurLink
      })
    },

    components: {
      GeneralModal,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .imgur-modal {
    background: $blue;
    text-align: center;

    > .title {
      padding-top: 15px;
    }

    > .link {
      font-size: 1.2rem;
      margin-bottom: 15px;
      display: inline-block;
    }
  }

  .modal-buttons {
    border-top: 1px solid $blue-dark;
    display: flex;


    > .button {
      flex: 1;
      cursor: pointer;
      transition: background .2s ease-out;

      &:hover {
        background: darken($blue, 5%);
      }
    }
  }
</style>