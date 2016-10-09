<template>
  <general-modal :show="modal" :close="showModal" width="440px">
    <div class="save-deck-modal">
      <div class="save-options">
        <button @click="faction = !faction">Use faction colors for background</button>
        <button @click="rarity = !rarity">Use rarity colors</button>
      </div>
      <div ref="image" :class="['deck-wrapper', $store.state.route.params.faction, { 'use-faction': faction, 'no-rarity': rarity }]">
        <div class="click-stopper"></div>
        <deck-list></deck-list>
      </div>
      <button @click="save()">Download Image</button>
    </div>
  </general-modal>
</template>

<script>
  import bus from '../bus'
  import GeneralModal from 'components/GeneralModal'
  import DeckList from 'components/DeckList'
  import domtoimage from 'dom-to-image'
  import { saveAs } from 'file-saver'

  export default {
    data () {
      return {
        modal: false,
        saving: false,
        faction: false,
        rarity: false,
      }
    },

    methods: {
      showModal (value) {
        this.modal = value
      },

      closeModal () {
        this.modal = false
      },

      async save () {
        this.saving = true
        const image = await domtoimage.toBlob(this.$refs.image)
        saveAs(image, `${this.$store.state.route.params.faction}-deck.png`);
        this.saving = false
      },
    },

    created () {
      bus.$on('save-deck-modal', this.showModal)
    },

    components: {
      GeneralModal,
      DeckList,
    },
  }
</script>

<style lang="sass">
  @import '../css/includes';

  .save-deck-modal {
    background: $blue;
    padding: 30px;
    @include clearfix;
  }

  .deck-wrapper {
    width: 380px;
    padding: 20px;
    background: $blue;
    position: relative;

    > .click-stopper {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      z-index: $click-stopper;
    }

    .cards {
      max-height: inherit;
      overflow-y: visible;
    }

    &.use-faction {
      .mana-curve {
        color: $dark;
      }

      .mana-numbers {
        border-top-color: $dark;
        border-bottom-color: $dark;
      }

      .bar {
        background: $dark !important;
      }

      .deck-counts {
        color: $dark;
      }

      &.lyonar { background: $color-lyonar; }
      &.abyssian { background: $color-abyssian; }
      &.vanar { background: $color-vanar; }
      &.vetruvian { background: $color-vetruvian; }
      &.magmar { background: $color-magmar; }
      &.songhai { background: $color-songhai; }
    }

    &.no-rarity {
      .cost, .cost::before, .cost::after {
        border-color: $color-basic;
      }
    }
  }
</style>