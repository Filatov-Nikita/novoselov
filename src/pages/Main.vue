<template>
  <div class="layout-base tw-bg-primary tw-h-screen tw-overflow-hidden tw-relative">
    <Header />
    <div class="slider">
      <div class="text">
        <div class="text-p">
          <p class="tw-font-stolz tw-text-lg 2xl:tw-text-xl tw-font-normal tw-leading-120" v-html="slide.text"></p>
        </div>
        <div class="controls tw-mt-30 lg:tw-mt-60">
          <div
            class="controlOne"
            :class="{ 'controlOne-active': current === index }"
            v-for="item, index in slides"
            @click="_e => current = index"
          ></div>
        </div>
      </div>
      <div class="picture">
        <div
          class="imgOne"
          v-for="item, index in slides"
          :style="styles(item)"
          :class="{ 'current': current === index }"
        >
      </div>
      </div>
    </div>
    <Footer />

    <GDialog v-model="showedBanners" background="transparent" content-class="tw-h-screen tw-flex tw-items-center tw-justify-center tw-relative">
      <template #default="{ onClose }">
        <button
          class="tw-absolute tw-right-30 tw-top-0"
          @click="onClose"
        >
          <AppIcon name="close" size="36px" fill="white" />
        </button>
        <div class="tw-absolute tw-left-1/2 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 -tw-z-10">
          <Spinner size="100px" />
        </div>
        <template v-for="banner in banners">
          <img
            v-if="isMobileBanner && banner.title === 'banner-mobile'"
            class="tw-w-auto tw-max-h-full"
            :src="banner.url"
            alt="баннер"
            @click="showCallback"
          />
          <img
            v-else-if="!isMobileBanner && banner.title === 'banner-desktop'"
            class="tw-w-auto tw-max-h-full tw-cursor-pointer"
            :src="banner.url"
            alt="баннер"
            @click="showCallback"
          />
        </template>
      </template>
    </GDialog>
  </div>
</template>
<script>
import { GDialog } from 'gitart-vue-dialog';
import { mapGetters, mapActions } from 'vuex';

export default {
  async created() {
    if(!this.hasBanners) await this.getBanners();
    if(this.hasBanners && !this.bannerWasShown) {
      this.showedBanners = true;
      this.$store.commit('setBannerWasShown', true);
    }
  },
  mounted() {
    this.start();
  },
  components: { GDialog },
  data() {
    return {
      showedBanners: false,
      interval: null,
      current: 0,
      slides: [
        {
          text: 'Старт продаж квартир <br class="md:tw-hidden lg:tw-block"> в&nbsp;новом доме',
          image: require('@/assets/images/main/home.jpg'),
        },
        {
          text: 'Старт продаж квартир <br class="md:tw-hidden lg:tw-block"> в&nbsp;новом доме',
          image: require('@/assets/images/main/r1.jpg'),
        },
        {
          text: 'Старт продаж квартир <br class="md:tw-hidden lg:tw-block"> в&nbsp;новом доме',
          image: require('@/assets/images/main/r3.jpg'),
        },
        {
          text: 'Старт продаж квартир <br class="md:tw-hidden lg:tw-block"> в&nbsp;новом доме',
          image: require('@/assets/images/main/r4.jpg'),
        },
        {
          text: 'Старт продаж квартир <br class="md:tw-hidden lg:tw-block"> в&nbsp;новом доме',
          image: require('@/assets/images/main/r5.jpg'),
        },
        {
          text: 'Старт продаж квартир <br class="md:tw-hidden lg:tw-block"> в&nbsp;новом доме',
          image: require('@/assets/images/main/r6.jpg'),
        },
        {
          text: 'Старт продаж квартир <br class="md:tw-hidden lg:tw-block"> в&nbsp;новом доме',
          image: require('@/assets/images/main/r7.jpg'),
        },
        {
          text: 'Старт продаж квартир <br class="md:tw-hidden lg:tw-block"> в&nbsp;новом доме',
          image: require('@/assets/images/main/r8.jpg'),
        },
        {
          text: 'Старт продаж квартир <br class="md:tw-hidden lg:tw-block"> в&nbsp;новом доме',
          image: require('@/assets/images/main/r9.jpg'),
        },
      ]
    }
  },
  methods: {
    ...mapActions(['getBanners']),
    showCallback() {
      this.$store.commit('callbackToggle', true);
      this.showedBanners = false;
    },
    onClick(i) {
      this.current = i;
      this.reset();
    },
    start() {
      this.interval = setInterval(() => this.tick(), 3000);
    },
    tick() {
      this.current >= this.slides.length -1 ? this.current = 0 : this.current++;
    },
    stop() {
      clearInterval(this.interval);
    },
    reset() {
      this.stop();
      this.start();
    }
  },
  computed: {
    ...mapGetters(['banners', 'bannerWasShown']),
    hasBanners() {
      return this.banners.length >= 2;
    },
    isMobileBanner() {
      const bp = ['', 'sm', 'md']
      return bp.includes(this.$grid.breakpoint);
    },
    slide() {
      return this.slides[this.current];
    },
    styles() {
      return (slide) => ({
        'background-image': `url(${slide.image})`,
      })
    }
  },
}
</script>
<style scoped>
  .slider {
    display: grid;
    grid-template-areas: "picture" "text";
    grid-template-columns: 100%;
    grid-template-rows: 1fr auto;
    row-gap: 30px;
    padding: 30px 16px;
  }

  .text {
    grid-area: text;
    align-self: center;
  }

  .text-p {
    max-width: 343px;
  }

  .picture {
    grid-area: picture;
    position: relative;
  }

  .imgOne {
    border-radius: 24px;
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity, 500ms;
    z-index: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .current {
    opacity: 1;
    z-index: 10;
  }

  .controlOne {
    padding: 4px;
    width: 14px;
    height: 14px;
    position: relative;
    cursor: pointer;
    box-sizing: content-box;
    text-align: center;
  }

  .controls {
    display: flex;
  }

  .controlOne::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    line-height: 14px;
    display: inline-block;
    box-sizing: content-box;
    vertical-align: middle;
    @apply tw-bg-opacity-15 tw-bg-dark-line;
  }

  .controlOne-active::before {
    border: 4px solid #C5EAFF;
  }

  @screen md {
    .slider {
      padding: 30px 40px;
    }
    .text-p {
      max-width: 490px;
    }
  }

  @screen lg {
    .slider {
      grid-template-areas: "text picture";
      grid-template-columns: 400px 1fr;
      grid-template-rows: auto;
      column-gap: 17px;
    }
    .text-p {
      max-width: 343px;
    }
  }

  @screen 2xl {
    .slider {
      grid-template-columns: 600px 1fr;
    }

    .text-p {
      max-width: 380px;
    }
  }
</style>
