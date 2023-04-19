<template>
  <div
    class="dialog-full callback tw-z-[910] tw-bg-white"
    v-if="$store.state.dialogCallbackShowed">
    <Header />
    <FormCallBack class="tw-flex tw-w-full tw-justify-center tw-items-center r-none">
      <button
        class="tw-absolute tw-right-30 tw-top-20"
        @click="$store.commit('callbackToggle')">
        <AppIcon name="close" size="36px" fill="gray" />
      </button>
    </FormCallBack>
  </div>
</template>

<script>
import FormCallBack from './FormCallBack.vue';

export default {
  components: {
    FormCallBack
  }
}
</script>

<style scoped>
.callback {
  display: grid;
  grid-template-rows: auto 1fr;
}

.r-none {
  @apply tw-rounded-b-none !important;
}
</style>
