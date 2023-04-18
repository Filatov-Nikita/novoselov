<template>
  <div class="layout-base tw-bg-primary tw-min-h-screen" :class="{ 'decor-cropped': decor }">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
export default {
  props: {
    decor: {
      default: false,
      type: Boolean
    }
  }
}
</script>
<style scoped>
@screen 2xl {
  .decor-cropped {
    background: theme('colors.primary');
    background-image: url(@/assets/images/figure.png);
    background-repeat: no-repeat;
    background-size: 75%;
    background-position: -120px bottom;
  }
}
</style>
