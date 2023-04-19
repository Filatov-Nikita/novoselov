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
      <path
        v-for="(path, i) in paths.first"
        :key="i"
        :opacity="activeD === path ? 0.65: 0"
        :d="path"
        fill="#FBB03B"
        @click="onClick"
        @mouseenter="onEnter"
        @mouseleave="onLeave" />
      <path
        v-for="(path, i) in paths.second"
        :key="i"
        :opacity="activeD === path ? 0.65: 0"
        :d="path"
        fill="#FBB03B"
        @click="onClick"
        @mouseenter="onEnter"
        @mouseleave="onLeave" />
    </svg>

    <!-- <svg
      style="
        height: 100%;
        left: 0;
        overflow: visible !important;
        position: absolute;
        top: 0;
        width: 100%;
      "
      :viewBox="`0 0 ${width} ${height}`"
      :preserveAspectRatio="ratio"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        v-for="(storey, i) in storeys"
        :key="storey.id"
        class="tw-opacity-0 tw-cursor-pointer"
        :class="[
          activeStorey?.id === storey.id ? 'tw-opacity-50' : 'tw-opacity-0',
        ]"
        fill="#FF8413"
        :d="d"
        :style="{ transform: `translateY(${offset * i}px)` }"
        @click="onClick(storey)"
        @mouseenter="!tappable ? $emit('enter', storey.id) : null"
        @mouseleave="!tappable ? $emit('leave', storey.id) : null" />
    </svg> -->
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
  data(){
    return {
      activeD: ''
    }
  },
  methods: {
    onClick (e){
        
      if(e.target?.getAttribute('d')){
        this.activeD = e.target?.getAttribute('d')
      }
    },
    onEnter(e){
      if(e.target?.getAttribute('d')){
        this.activeD = e.target?.getAttribute('d')
      }
    },
    onLeave(e){
      this.activeD = ''
      
    }
    // onClick(storey) {
    //   if (this.tappable && this.activeStorey?.id !== storey.id) {
    //     return this.$emit("enter", storey.id);
    //   }
    //   this.$router.push({ name: "storey", params: { id: storey.id } });
    // },
  },
};
</script>

<style></style>
