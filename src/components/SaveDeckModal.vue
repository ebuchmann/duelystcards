<template>
  <general-modal :show="modal" :close="closeModal" width="440px">
    <div class="save-deck-modal">
      <div class="save-options">
        <button @click="useFaction = !useFaction">Use faction colors for background</button>
        <button @click="useRarity = !useRarity">Use rarity colors</button>
      </div>
      <div ref="image" :class="['deck-wrapper', currentFaction, { 'use-faction': useFaction, 'no-rarity': !useRarity }]">
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
  import { mapState, mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        saving: false,
        useFaction: false,
        useRarity: true,
      }
    },

    computed: {
      ...mapState({
        modal: state => state.app.saveDeck,
      }),

      ...mapGetters(['currentFaction'])
    },

    methods: {
      ...mapActions(['toggleProperty']),

      closeModal () {
        this.toggleProperty('saveDeck')
      },

      async save () {
        this.saving = true
        const image = await domtoimage.toBlob(this.$refs.image)
        saveAs(image, `${this.currentFaction}-deck.png`);
        this.saving = false
      },
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
    background: $blue-dark;
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