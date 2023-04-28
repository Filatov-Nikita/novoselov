<template>
  <div class="map-floor">
    <div class="map-floor__wrapper">
      <div class="map">
        <img class="map-floor__img" :src="storeyImg" style="" />
        <svg
          style="
            height: 100%;
            left: 0;
            overflow: visible !important;
            position: absolute;
            top: 0;
            width: 100%;
          "
          :viewBox="viewbox"
          fill="none"
          preserveAspectRatio="xMinYMin slice">
          <g
            v-for="(flat, index) in flatsMap"
            :key="index"
            style="mix-blend-mode: multiply"
            opacity="0.4">
            <path
              :d="flat.polygon"
              class="flat"
              :class="{
                'flat--free': flat.status === 'free',
                'flat--booked flat-hover': flat.status === 'booked',
                'flat--sold flat-hover': flat.status === 'sold',
                'flat-hover': flatPopup?.flat?.id === flat.id,
              }"
              @click="showFlat(flat.id, flat.status)"
              @mouseenter="onMouseenter($event, flat)"
              @mouseleave="onMouseleave" />
          </g>
        </svg>
        <div class="side side--top">Двор (ул. Новосёлов, 10)</div>
        <div class="side side--left">ул. Новосёлов</div>
        <div class="side side--right"> ул. Шолохова</div>
        <div class="side side--bottom">Двор (ул. Новосёлов, 6)</div>
      </div>
    </div>

    <div class="tw-pt-30">
      <ul class="tw-flex tw-flex-wrap tw-justify-center tw-gap-x-30 tw-gap-y-8">
        <li class="status-info before:tw-bg-[#081903a1]">
          <span>квартира продана</span>
        </li>
        <li class="status-info before:tw-bg-positive">
          <span>квартира свободна</span>
        </li>
        <li class="status-info before:tw-bg-orange">
          <span>квартира забронирована</span>
        </li>
      </ul>
    </div>

    <teleport to="body">
      <div
        v-if="flatPopup"
        class="flat-popup"
        :style="flatPopup.coords"
        @mouseenter="showedPopup = true"
        @mouseleave="onMouseleave">
        <div class="tw-flex tw-gap-16">
          <p class="tw-text-xl tw-leading-100">
            {{ flatPopup.flat.rooms_number }}
          </p>
          <div class="tw-text-xs tw-leading-100 tw-pt-4">
            <p class="tw-pb-2 tw-border-b-2 tw-border-gray">
              {{ flatPopup.flat.living_area }}
            </p>
            <p class="tw-pt-4">
              {{ flatPopup.flat.total_area }}
            </p>
          </div>
        </div>
        <div class="">
          <p class="tw-text-gray tw-leading-100">
            № {{ flatPopup.flat.number }}
          </p>
        </div>
        <!-- <button
          class="tw-absolute tw-bottom-10 hover:tw-opacity-80 active:tw-opacity-70"
          @click="showedBook = true">
          <AppIcon name="plus" size="36px" />
        </button> -->
      </div>

      <DialogBook
        v-if="flatPopup"
        v-model:showed="showedBook"
        :flatNumber="flatPopup.flat.number"
        @update:showed="flatPopup = null" />
    </teleport>
  </div>
</template>

<script>
import DialogBook from "@/components/DialogBook.vue";
import { computed, toRef, ref, watch, nextTick } from "vue";
import { useRouter } from "vue-router";
import { debounce } from "throttle-debounce";

export default {
  props: {
    imageMap: {
      required: true,
      type: Object,
    },
  },
  emits: ["update:showed"],
  setup(props, { emit }) {
    const router = useRouter();
    const imageMap = toRef(props, "imageMap");
    const flatPopup = ref(null);
    const showedPopup = ref(null);
    const showedBook = ref(false);
    const map = ref(null);

    const viewbox = computed(
      () => `0 0 ${imageMap.value.width} ${imageMap.value.height}`
    );
    const storeyImg = computed(() => imageMap.value.path);
    const flatsMap = computed(() => imageMap.value.flats);

    const showFlat = (flatId, flatStatus) => {
      if (flatStatus === "sold") return;
      router.push({ name: "flats.one", params: { id: flatId } });
    };

    const onMouseenter = (e, flat) => {
      showedPopup.value = true;
      const { left, top } = e.srcElement.getBoundingClientRect();
      const { pageYOffset: pageY, pageXOffset: pageX } = window;
      flatPopup.value = {
        coords: { top: top + pageY + "px", left: left + pageX + "px" },
        flat,
      };
      emit("update:showed", flat);
    };

    const hidePopup = debounce(200, () => {
      if (showedPopup.value || showedBook.value) return;
      flatPopup.value = null;
      emit("update:showed", null);
    });

    const onMouseleave = () => {
      showedPopup.value = false;
      hidePopup();
    };

    watch(imageMap, () => {
      nextTick(() => {
        map.value.classList.remove("a");
        setTimeout(() => {
          map.value.classList.add("a");
        }, 50);
      });
    });

    return {
      map,
      viewbox,
      storeyImg,
      flatsMap,
      flatPopup,
      showFlat,
      onMouseenter,
      onMouseleave,
      showedPopup,
      showedBook,
    };
  },
  components: {
    DialogBook,
  },
};
</script>

<style scoped>
@keyframes appear {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.a {
  animation-duration: 1.5s;
  animation-name: appear;
}

.flat {
  opacity: 1;
  cursor: pointer;
}

.flat:hover,
.flat-hover {
  opacity: 0.75;
}

.flat--free {
  fill: #0ab81b;
}

.flat--booked {
  fill: theme("colors.orange");
}

.flat--sold {
  fill: theme("colors.primary");
  cursor: auto !important;
}

.status-info {
  @apply tw-font-arial tw-text-xs tw-leading-120 tw-text-gray  tw-flex tw-flex-wrap tw-items-center tw-gap-x-10;
}

.status-info::before {
  content: "";
  width: 10px;
  height: 10px;

  border-radius: 50%;
}

.flat-popup {
  position: absolute;
  transform: translateY(-100%);
  padding: 14px;
  display: flex;
  gap: 27px;
  z-index: 100;
  min-width: 150px;
  border-radius: 14px;
  color: theme("colors.white");
  background: theme("colors.secondary");
  box-shadow: 0px 74px 30px rgba(0, 0, 0, 0.01),
    0px 42px 25px rgba(0, 0, 0, 0.05), 0px 19px 19px rgba(0, 0, 0, 0.09),
    0px 5px 10px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
}

@screen xl {
  .status-info {
    @apply tw-text-sm;
  }

  .status-info::before {
    width: 14px;
    height: 14px;
  }
}

/* @screen 2xl { */
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
/* } */
</style>
<style lang="scss" scoped>
.map-floor {
  @apply tw-bg-white lg:tw-flex lg:tw-flex-col lg:tw-items-center tw-relative tw-gap-[36px];
  &__wrapper {
    @apply tw-relative  tw-overflow-x-auto;
    position: relative;
    scrollbar-width: none;
    width: auto;
    .map {
      @apply tw-my-[75px] lg:tw-mx-[130px] lg:tw-my-[36px] tw-relative;
    }
    .side--left,
    .side--right {
      @apply tw-hidden lg:tw-block;
    }
  }
  &__img {
    height: 40vh;
    max-width: none;
    // height: 100%;
    width: auto;
    margin: auto;
    @apply tw-max-w-none md:tw-max-w-full md:tw-h-full;
  }
}
</style>
