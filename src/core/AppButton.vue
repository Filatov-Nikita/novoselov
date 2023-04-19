<template>
  <component
    :is="tag"
    class="tw-rounded-[14px] tw-text-white tw-bg-yellow tw-text-center tw-py-20 tw-px-20 lg:tw-py-15 lg:tw-px-30 hover:tw-bg-orangeHover active:tw-bg-opacity-90 disabled:tw-bg-dark disabled:tw-text-secondary"
    :class="{ disable: disabled }">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      default: "button",
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style scoped lang="scss">
.disable {
  @apply tw-text-gray tw-bg-dark-line/15;
}
</style>
