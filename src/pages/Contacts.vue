<template>
  <app-page class="2xl:tw-pt-[70px]">
    <div class="wrapper tw-relative contacts">
      <h1 class="tw-text-lg tw-font-stolz tw-font-normal contacts-a">
        Контакты
      </h1>
      <div class="tw-font-arial tw-mb-20 2xl:tw-mb-0 contacts-b">
        <p
          v-if="address"
          class="tw-text-secondary tw-leading-120 tw-text-md tw-mb-20 2xl:tw-text-lg md:tw-max-w-[600px]">
          <!-- {{ address }} -->
          Башкортостан, <br />
          г. Уфа, ул. Новоселов, 10
        </p>
        <div class="tw-text-gray md:tw-flex md:-tw-mx-20">
          <div class="md:tw-px-20">
            <a
              class="tw-block"
              :href="`tel:${$store.getters.unmaskedPhone(
                $store.state.contactPhone
              )}`">
              {{ $store.state.contactPhone }}
            </a>
            <a class="tw-block" href="mailto:grany-ufa@yandex.ru">
              belierosidomufa@yandex.ru
            </a>
          </div>
          <div class="md:tw-px-20" v-html="worktime"></div>
        </div>
      </div>
      <div
        class="tw-rounded-3xl tw-overflow-hidden tw-h-[276px] md:tw-h-[407px] xl:tw-h-auto contacts-c 2xl:tw-w-full">
        <yandex-map
          v-if="coords && address"
          class="tw-mix-blend-luminosity tw-relative tw-z-10 tw-h-full tw-w-full"
          :coords="coords"
          :zoom="17"
          :controls="[]">
          <ymap-marker
            marker-id="place"
            :coords="coords"
            :hint-content="`офис - ${address}`" />
        </yandex-map>
      </div>
      <FormCallBack class="tw-rounded-3xl -tw-mx-16 md:tw-mx-0 contacts-d" />
    </div>
  </app-page>
</template>

<script>
import FormCallBack from "@/components/FormCallBack.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  async created() {
    if (this.address === null) {
      await this.getAddress();
    }

    if (this.coords === null) {
      await this.getCoords();
    }

    if (this.worktime === null) {
      await this.getWorktime();
    }
  },
  computed: {
    ...mapGetters(["address", "coords", "worktime"]),
  },
  methods: {
    ...mapActions(["getAddress", "getCoords", "getWorktime"]),
  },
  components: {
    FormCallBack,
  },
};
</script>

<style scoped>
@screen xl {
  .xl-h {
    height: calc(100vh - 180px);
  }
}

@screen 2xl {
  .xl-h {
    height: 100%;
  }
}
.contacts {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.contacts-a {
  grid-area: A;
}
.contacts-b {
  grid-area: B;
}
.contacts-c {
  grid-area: C;
}
.contacts-d {
  grid-area: D;
}
@media (min-width: 1200px) {
  .contacts {
    display: grid;
    /* grid-template-areas:
      "A A A A   A A A A   A A A A"
      "B B B B   B B B B   B B C C"
      "B B B B   B B B B   B B C C"; */
    grid-template-areas:
      "A A A A   C C C C"
      "B B B B   C C C C"
      "D D D D   D D D D";
    grid-template-columns: repeat(8, 1fr);
    gap: 50px 80px;
  }
}
@media (min-width: 1920px) {
  .contacts {
    display: grid;
    /* grid-template-areas:
      "A A A A   A A A A   A A A A"
      "B B B B   B B B B   B B C C"
      "B B B B   B B B B   B B C C"; */
    grid-template-areas:
      "A A A A   B B B B"
      "D D D D   C C C C";

    grid-template-columns: repeat(8, 1fr);
    gap: 30px 20px;
  }
}
</style>
