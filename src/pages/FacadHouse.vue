<template>
  <div class="tw-bg-primary layout tw-min-h-screen">
    <Header ref="header" />
    <main>
      <PopupStorey v-if="activeStorey" :storey="activeStorey" />
      <HousePlan
        :activeStorey="hoverStorey"
        width="2280"
        height="1080"
        @enter="onEnter"
        @leave="onLeave"
      >
      </HousePlan>
    </main>
    <Footer ref="footer" />
  </div>
</template>

<script>
import HousePlan from "@/components/HousePlan.vue";
import PopupStorey from "@/components/PopupStorey.vue";

export default {
  data() {
    return {
      entrance: null,
      storeysMap: new Map(),
      activeStorey: null,
      hoverStorey: null,
      timer: null,
    };
  },
  created() {
    this.getEntrance();
  },
  methods: {
    async getEntrance() {
      this.entrance = await this.$store.dispatch("entrances/entrancesOne", {
        id: 1,
      });
    },
    async onEnter(storeyId) {
      this.hoverStorey = { id: storeyId };

      if (this.storeysMap.has(storeyId)) {
        this.activeStorey = this.storeysMap.get(storeyId);
      } else {
        this.activeStorey = await this.$store.dispatch("storeys/storeysOne", {
          id: storeyId,
        });
        this.storeysMap.set(storeyId, this.activeStorey);
      }
    },
    onLeave(storeyId) {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (storeyId === this.activeStorey?.id) {
          this.activeStorey = null;
          this.hoverStorey = null;
        }
      }, 500);
    },
  },
  computed: {
    storeys() {
      if (!this.entrance) return [];
      const entries = Object.entries(this.entrance.storeys);
      const sorted = entries.sort((a, b) => b[0] - a[0]);
      return sorted.map((entry) => ({ id: entry[1], number: entry[0] }));
    },
  },
  components: {
    HousePlan,
    PopupStorey
  },
};
</script>
<style scoped>
  .layout {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;
  }
</style>
