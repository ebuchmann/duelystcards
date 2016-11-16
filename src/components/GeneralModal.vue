<template>
  <div class="modal-mask" v-show="show"  @click="close(false)">
    <div class="modal-wrapper">
      <div class="modal-container" :style="{ width: this.width }" @click.stop>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['show', 'width', 'close'],

    watch: {
      show () {
        if (this.show) document.querySelector('body').classList.add('modal-open')
        else document.querySelector('body').classList.remove('modal-open')
      }
    }
  };
</script>

<style lang="sass">
  @import '../css/includes';

  body.modal-open {
    overflow: hidden;
    margin-right: 17px;
  }

  .modal-mask {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
  }

  .modal-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    transform: translate(0,0);
  }

  .modal-container {
  }
</style>
