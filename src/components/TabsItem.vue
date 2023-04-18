<template>
  <button
    class="tw-p-10 tw-flex tw-items-center tw-rounded-lg tw-text-white"
    :class="{
      'tw-bg-secondary': active,
      'tw-bg-[#BEC4CC]': !active
    }"
  >
    <AppIcon
      class="tw-mr-10"
      :name="icon"
      fill="secondary"
      :fillHex="active ? fill : '#8A98A7'"
      size="30px"
    />
    <span class="tw-text-sm tw-leading-100">{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      required: true,
      type: String
    },
    icon: {
      required: true,
      type: String
    },
    active: {
      default: false,
      type: Boolean
    },
    fill: {
      required: true,
      type: String
    }
  }
}
</script>

<style>

</style>
