<template>
  <div
    class="tw-relative"
    style="
      height: 100%;
      position: relative;
      scrollbar-width: none;
      width: auto;
      width: 100%;
    ">
    <img :src="image" style="height: 100%; max-width: none; width: auto" />

    <!-- id:1 -->
    <!-- id:2 -->
    <svg
      style="
        height: 100%;
        left: 0;
        overflow: visible !important;
        position: absolute;
        top: 0;
        width: 100%;
      "
      :viewBox="`0 0 ${width} ${height}`"
      fill="none"
      preserveAspectRatio="xMinYMin slice">
      <slot name="flags"></slot>
      <path
        v-for="(path, i) in paths.first"
        :key="i"
        :opacity="activeD === path ? 0.65 : 0"
        :d="path"
        fill="#FBB03B"
        @click="onClick($event, i + 1)"
        @mouseenter="onEnter($event, i + 1)"
        @mouseleave="onLeave($event, i + 1)" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    d: {
      required: true,
      type: String,
    },
    offset: {
      required: true,
      type: Number,
    },
    storeys: {
      required: true,
      type: Array,
    },
    image: {
      required: true,
      type: String,
    },
    ratio: {
      default: "xMidYMid slice",
      type: String,
    },
    height: {
      required: true,
      type: String,
    },
    width: {
      required: true,
      type: String,
    },
    tappable: {
      default: false,
      type: Boolean,
    },
    activeStorey: {
      default: undefined,
    },
    paths: {
      type: Object,
      requiredt: true,
    },
  },
  emits: ["enter", "leave"],
  data() {
    return {
      activeD: "",
    };
  },
  methods: {
    onClick(e, id) {
      if (e.target?.getAttribute("d")) {
        this.activeD = e.target?.getAttribute("d");
        if (this.tappable && this.activeStorey?.id !== id) {
          return this.$emit("enter", id);
        }
        this.$router.push({ name: "storey", params: { id: id } });
      }
    },
    onEnter(e, id) {
      if (e.target?.getAttribute("d")) {
        if (!this.tappable) {
          this.activeD = e.target?.getAttribute("d");
          return this.$emit("enter", id);
        }
      }
    },
    onLeave(e, id) {
      if (!this.tappable) {
        this.activeD = "";
        return this.$emit("leave", id);
      }
    },
  },
};
</script>

<style></style>
