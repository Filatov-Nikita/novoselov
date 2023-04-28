<template>
  <app-page class="page-pb lg:tw-py-0">
    <div class="tw-container tw-h-full">
      <section v-if="flat" class="content">
        <div class="first">
          <div>
            <a
              class="tw-underline tw-text-gray tw-block tw-mb-30"
              href="javascript:void(0)"
              @click.prevent="$router.back()">
              Назад к этажу
            </a>
            <div
              class="md:tw-flex md:tw-justify-between md:tw-items-start lg:tw-block 2xl:tw-grid 2xl:tw-justify-center">
              <div class="tw-mb-20 lg:tw-mb-30">
                <div
                  class="tw-flex tw-justify-between lg:tw-justify-start lg:tw-gap-40 2xl:tw-flex-col 2xl:tw-gap-0 tw-mb-10">
                  <div class="tw-text-lg">№{{ flat.number }}</div>
                  <div class="tw-text-lg tw-text-gray">
                    {{ flat.total_area }} <span>м<sup>2</sup></span>
                  </div>
                </div>
                <p class="tw-w-full tw-text-sm">
                  {{ flat.house_name }} литер • {{ flat.storey_number }} этаж •
                  {{ flat.rooms_number }} комнаты
                </p>
              </div>

              <div
                class="tw-hidden md:tw-flex lg:tw-hidden tw-justify-between tw-items-center tw-gap-30">
                <svg
                  width="76"
                  height="50"
                  viewBox="0 0 76 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M42.3241 42.3241C32.7563 51.892 17.2437 51.892 7.67588 42.3241C-1.89196 32.7563 -1.89196 17.2437 7.67588 7.67588C17.2437 -1.89196 32.7563 -1.89196 42.3241 7.67588C51.892 17.2437 51.892 32.7563 42.3241 42.3241Z"
                    stroke="#9BA5B0" />
                  <path
                    d="M37.5473 24.3859C30.6384 21.936 16.7614 16.9748 16.5245 16.7298L14.1557 16.1173L22.4464 24.6922L15.044 33.5733L36.659 25.3047L37.5473 24.3859Z"
                    fill="#9BA5B0" />
                  <path
                    d="M13.23 34.7602C13.0827 34.6079 13 34.4014 13 34.186C13 33.9706 13.0827 33.7641 13.23 33.6118L21.5577 24.9987L13.23 16.3855C13.1039 16.2548 13.0246 16.0834 13.0053 15.8998C12.986 15.7162 13.0278 15.5313 13.1238 15.3755C13.2198 15.2198 13.3642 15.1026 13.5333 15.0432C13.7024 14.9837 13.886 14.9857 14.0539 15.0488L38.4817 24.2361C38.6336 24.2929 38.7648 24.3966 38.8575 24.5333C38.9502 24.6699 39 24.8328 39 24.9998C39 25.1668 38.9502 25.3297 38.8575 25.4663C38.7648 25.603 38.6336 25.7067 38.4817 25.7635L14.0539 34.9508C13.9134 35.0038 13.7613 35.0142 13.6154 34.9809C13.4694 34.9475 13.3357 34.8717 13.23 34.7625L13.23 34.7602ZM16.8431 17.8256L23.2232 24.4244C23.3704 24.5767 23.4532 24.7833 23.4532 24.9987C23.4532 25.214 23.3704 25.4206 23.2232 25.5729L16.8431 32.1717L35.9157 24.9975L16.8431 17.8233V17.8256Z"
                    fill="#9BA5B0" />
                  <circle
                    cx="66"
                    cy="25"
                    r="9.5"
                    fill="#C5EAFF"
                    stroke="#C5EAFF" />
                  <path
                    d="M66.5179 28.1324C65.8859 28.1324 65.3299 28.0044 64.8499 27.7484C64.3699 27.4924 63.9979 27.1324 63.7339 26.6684C63.4779 26.1964 63.3499 25.6524 63.3499 25.0364C63.3499 24.4284 63.4819 23.8924 63.7459 23.4284C64.0099 22.9564 64.3779 22.5924 64.8499 22.3364C65.3299 22.0724 65.8819 21.9404 66.5059 21.9404C67.3699 21.9404 68.1179 22.2444 68.7499 22.8524L67.9339 23.7284C67.7579 23.5524 67.5459 23.4164 67.2979 23.3204C67.0499 23.2164 66.7939 23.1644 66.5299 23.1644C65.9859 23.1644 65.5419 23.3404 65.1979 23.6924C64.8619 24.0364 64.6939 24.4844 64.6939 25.0364C64.6939 25.5964 64.8619 26.0484 65.1979 26.3924C65.5419 26.7364 65.9859 26.9084 66.5299 26.9084C66.8179 26.9084 67.0899 26.8564 67.3459 26.7524C67.6019 26.6484 67.8179 26.4964 67.9939 26.2964L68.8219 27.1964C68.4939 27.5164 68.1419 27.7524 67.7659 27.9044C67.3899 28.0564 66.9739 28.1324 66.5179 28.1324Z"
                    fill="#2F4258" />
                </svg>

                <div class="tw-basis-[124px]">
                  <img
                    width="124"
                    height="64"
                    :src="flat.images[0]"
                    alt="срез этажа" />
                </div>
              </div>

              <div class="tw-hidden lg:tw-block tw-mb-40">
                <AppButton class="" @click="showedBook = true">
                  Заявка на бронь
                </AppButton>
              </div>
            </div>
          </div>
        </div>

        <div class="map xl:tw-border-l xl:tw-border-secondary/15">
          <!-- <iframe
            width="100%"
            height="100%"
            :src="flat.video_clip"
            allowfullscreen /> -->
          <div class="map-flat">
            <div class="lg:tw-w-full lg:tw-flex lg:tw-justify-end">
              <div
                class="tw-flex tw-rounded-md tw-overflow-hidden tw-w-fit tw-divide-x tw-divide-white/40 tw-text-sm">
                <button
                  class="tw-text-white tw-py-15 tw-px-28"
                  :class="[visibleImage === 2 ? ' tw-bg-secondary' : 'tw-bg-gray']"
                  @click="visibleImage = 2">
                  С мебелью
                </button>
                <button
                  v-if="flat.images[1]"
                  class="tw-text-white tw-py-15 tw-px-28"
                  :class="[visibleImage === 1 ? ' tw-bg-secondary' : 'tw-bg-gray']"
                  @click="visibleImage = 1">
                  Без мебели
                </button>
                <button
                  v-if="flat.images[3]"
                  class="tw-text-white tw-py-15 tw-px-28"
                  :class="[visibleImage === 3 ? ' tw-bg-secondary' : 'tw-bg-gray']"
                  @click="visibleImage = 3">
                  ЗD
                </button>
              </div>
            </div>
            <div class="map-flat__wrapper">
              <div class="map-img">
                <img
                  class="map-flat__img"
                  :src="flat.images[visibleImage]"
                  style="" />
                <div class="side side--top">Двор (ул. Новосёлов, 10)</div>
                <div class="side side--left">ул. Новосёлов</div>
                <div class="side side--right">ул. Шолохова</div>
                <div class="side side--bottom">Двор (ул. Новосёлов, 6)</div>
              </div>
            </div>
          </div>
        </div>

        <div class="last">
          <div
            class="tw-relative tw-flex tw-flex-col md:tw-items-center lg:tw-items-start tw-w-full">
            <AppButton
              class="tw-w-full lg:tw-hidden tw-mb-40"
              @click="showedBook = true">
              Заявка на бронь
            </AppButton>
            <div class="2xl:tw-grid 2xl:tw-justify-center">
              <div class="tw-mb-30 md:tw-mb-0 lg:tw-mb-30">
                <div>
                  <button class="control" @click="createPDF">
                    <span class="tw-underline tw-text-gray">Скачать pdf</span>
                  </button>
                </div>
              </div>
              <div
                class="tw-flex md:tw-hidden lg:tw-flex tw-justify-between tw-items-center lg:tw-justify-start lg:tw-gap-60">
                <svg
                  width="76"
                  height="50"
                  viewBox="0 0 76 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M42.3241 42.3241C32.7563 51.892 17.2437 51.892 7.67588 42.3241C-1.89196 32.7563 -1.89196 17.2437 7.67588 7.67588C17.2437 -1.89196 32.7563 -1.89196 42.3241 7.67588C51.892 17.2437 51.892 32.7563 42.3241 42.3241Z"
                    stroke="#9BA5B0" />
                  <path
                    d="M37.5473 24.3859C30.6384 21.936 16.7614 16.9748 16.5245 16.7298L14.1557 16.1173L22.4464 24.6922L15.044 33.5733L36.659 25.3047L37.5473 24.3859Z"
                    fill="#9BA5B0" />
                  <path
                    d="M13.23 34.7602C13.0827 34.6079 13 34.4014 13 34.186C13 33.9706 13.0827 33.7641 13.23 33.6118L21.5577 24.9987L13.23 16.3855C13.1039 16.2548 13.0246 16.0834 13.0053 15.8998C12.986 15.7162 13.0278 15.5313 13.1238 15.3755C13.2198 15.2198 13.3642 15.1026 13.5333 15.0432C13.7024 14.9837 13.886 14.9857 14.0539 15.0488L38.4817 24.2361C38.6336 24.2929 38.7648 24.3966 38.8575 24.5333C38.9502 24.6699 39 24.8328 39 24.9998C39 25.1668 38.9502 25.3297 38.8575 25.4663C38.7648 25.603 38.6336 25.7067 38.4817 25.7635L14.0539 34.9508C13.9134 35.0038 13.7613 35.0142 13.6154 34.9809C13.4694 34.9475 13.3357 34.8717 13.23 34.7625L13.23 34.7602ZM16.8431 17.8256L23.2232 24.4244C23.3704 24.5767 23.4532 24.7833 23.4532 24.9987C23.4532 25.214 23.3704 25.4206 23.2232 25.5729L16.8431 32.1717L35.9157 24.9975L16.8431 17.8233V17.8256Z"
                    fill="#9BA5B0" />
                  <circle
                    cx="66"
                    cy="25"
                    r="9.5"
                    fill="#C5EAFF"
                    stroke="#C5EAFF" />
                  <path
                    d="M66.5179 28.1324C65.8859 28.1324 65.3299 28.0044 64.8499 27.7484C64.3699 27.4924 63.9979 27.1324 63.7339 26.6684C63.4779 26.1964 63.3499 25.6524 63.3499 25.0364C63.3499 24.4284 63.4819 23.8924 63.7459 23.4284C64.0099 22.9564 64.3779 22.5924 64.8499 22.3364C65.3299 22.0724 65.8819 21.9404 66.5059 21.9404C67.3699 21.9404 68.1179 22.2444 68.7499 22.8524L67.9339 23.7284C67.7579 23.5524 67.5459 23.4164 67.2979 23.3204C67.0499 23.2164 66.7939 23.1644 66.5299 23.1644C65.9859 23.1644 65.5419 23.3404 65.1979 23.6924C64.8619 24.0364 64.6939 24.4844 64.6939 25.0364C64.6939 25.5964 64.8619 26.0484 65.1979 26.3924C65.5419 26.7364 65.9859 26.9084 66.5299 26.9084C66.8179 26.9084 67.0899 26.8564 67.3459 26.7524C67.6019 26.6484 67.8179 26.4964 67.9939 26.2964L68.8219 27.1964C68.4939 27.5164 68.1419 27.7524 67.7659 27.9044C67.3899 28.0564 66.9739 28.1324 66.5179 28.1324Z"
                    fill="#2F4258" />
                </svg>

                <div class="tw-basis-[124px]">
                  <img
                    width="124"
                    height="64"
                    :src="flat.images[0]"
                    alt="срез этажа" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <teleport to="body">
          <DialogBook v-model:showed="showedBook" :flatNumber="flat.number" />
        </teleport>
      </section>

      <div v-if="$store.getters['loaders/is']('loading flat')">
        <Spinner size="100px" />
      </div>

      <GDialog
        v-model="showedView"
        background="transparent"
        content-class="tw-h-screen tw-flex tw-items-center tw-justify-center tw-relative">
        <template #default="{ onClose }">
          <button class="tw-absolute tw-right-30 tw-top-0" @click="onClose">
            <AppIcon name="close" size="36px" fill="white" />
          </button>
          <div
            class="tw-absolute tw-left-1/2 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 -tw-z-10">
            <Spinner size="100px" />
          </div>
          <img
            v-if="hasView"
            class="tw-w-auto tw-max-h-full"
            :src="images.view"
            alt="вид из окна" />
        </template>
      </GDialog>
    </div>
  </app-page>
</template>

<script>
import DialogBook from "@/components/DialogBook.vue";
import { GDialog } from "gitart-vue-dialog";

export default {
  props: {
    id: {
      required: true,
      type: [String, Number],
    },
  },
  created() {
    this.getFlat();
  },
  data() {
    return {
      flat: null,
      showedBook: false,
      showedView: false,
      visibleImage: 2,
    };
  },
  methods: {
    async getFlat() {
      this.$store.dispatch("loaders/start", "loading flat");
      this.flat = await this.$store.dispatch("flats/flatsOne", { id: this.id });
      this.$store.dispatch("loaders/end", "loading flat");
    },
    showView() {
      this.showedView = true;
    },
    async createPDF() {
      const path = await this.$store.dispatch("flats/createPDF", {
        pdf_info_rooms_count: this.flat.rooms_number,
        pdf_info_kv_num: this.flat.number,
        pdf_info_kv_etazh: this.flat.storey_number,
        pdf_info_kompleks: this.flat.house_name,
        pdf_info_kv_sq: this.flat.total_area,
        pdf_info_image: this.images.plan,
        pdf_info_storey_plan_image: this.images.place,
      });

      this.downloadPDF(path);
    },
    downloadPDF(path) {
      window.location.href = path;
    },
  },
  computed: {
    images() {
      const list = { plan: null, view: null, place: null };

      if (!(this.flat?.images && Array.isArray(this.flat?.images))) return list;

      this.flat.images.forEach((src) => {
        if (src.indexOf("/plans/") !== -1) list.plan = src;
        else if (src.indexOf("/windows_view/") !== -1) list.view = src;
        else if (src.indexOf("storey_places")) list.place = src;
      });

      return list;
    },
    hasView() {
      return this.images.view !== null;
    },
    hasPlace() {
      return this.images.place !== null;
    },
  },
  components: {
    DialogBook,
    GDialog,
  },
};
</script>

<style scoped>
.side {
  @apply tw-absolute tw-text-gray tw-text-xs;
}

.side--left,
.side--right {
  @apply tw-top-1/2 -tw-translate-y-1/2 -tw-rotate-90;
}

.side--left {
  @apply -tw-left-[130px];
}

.side--right {
  @apply -tw-right-[130px];
}

.side--bottom,
.side--top {
  @apply tw-left-1/2 -tw-translate-x-1/2;
}

.side--bottom {
  @apply -tw-bottom-[36px];
}

.side--top {
  @apply -tw-top-[36px];
}
.content {
  @apply tw-h-full;
}

.first {
  @apply lg:tw-pt-30;
}

.map {
  @apply tw-mb-40 lg:tw-mb-0;
}
.last {
}

@screen lg {
  .content {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      "A A A  B B B B B B"
      "C C C  B B B B B B";
  }
  .first {
    grid-area: A;
    @apply lg:tw-max-w-[420px] 2xl:tw-max-w-[600px] tw-w-full;
  }
  .map {
    @apply tw-py-30 lg:tw-border-l lg:tw-border-secondary/15 tw-flex tw-justify-center tw-flex-col lg:tw-justify-start;

    grid-area: B;
  }
  .last {
    @apply lg:tw-self-end lg:tw-pb-30;
    grid-area: C;
  }
}
</style>
<style scoped lang="scss">
.map-flat {
  @apply tw-bg-white lg:tw-flex lg:tw-flex-col lg:tw-items-center tw-relative tw-gap-[16px];
  &__wrapper {
    @apply tw-relative  tw-overflow-x-auto lg:tw-flex;
    position: relative;
    scrollbar-width: none;
    width: auto;
    .map-img {
      @apply tw-my-[75px] lg:tw-mx-[130px] lg:tw-my-[36px] tw-relative;
    }
    .side--left,
    .side--right {
      @apply tw-hidden lg:tw-block;
    }
  }
  &__img {
    max-width: none;
    // height: 100%;
    width: 100%;
    margin: auto;
    @apply tw-max-w-none lg:tw-max-w-[320px] lg:tw-max-h-[320px] 2xl:tw-max-w-[560px] 2xl:tw-max-h-[560px] md:tw-h-full;
  }
}
</style>
