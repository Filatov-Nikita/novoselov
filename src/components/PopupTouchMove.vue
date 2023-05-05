<template>
  <div class="touch-move" @touchstart="hide">
    <div class="tw-basis-[215px] tw-text-white tw-text-sm tw-flex tw-items-center">
      <AppIcon class="tw-mr-24" name="swipe" size="48px" fill="white" />
      <p>Перемещайтесь по экрану для просмотра всего литера</p>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['hide'],
  methods: {
    hide() {
      this.$emit('hide');
    }
  }
}
</script>
<style scoped>
  .touch-move {
    background: rgb(138, 152, 167, 0.8);
    position: absolute;
    inset: 0;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
