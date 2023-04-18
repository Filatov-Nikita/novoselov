<template>
  <div class="dialog-full tw-overflow-x-hidden" v-if="value">
    <div class="layout-base tw-min-h-full">
      <Header />
      <div class="nav-page nav-bg">
        <div class="list">
          <div class="tw-space-y-20 lg:tw-space-y-30">
            <router-link
              class="tw-block tw-text-md lg:tw-text-lg"
              v-for="item in nav"
              :to="item.to"
            >
              {{ item.label }}
            </router-link>
          </div>

          <div class="tw-max-w-[340px] tw-pt-30 -tw-mt-20 -tw-ml-20 tw-flex tw-flex-wrap">
            <div class="tw-pl-20 tw-pt-20 tw-w-full lg:tw-w-1/2">
              <router-link class="tw-text-base tw-text-blue tw-underline tw-leading-100" :to="{ name: 'news' }">
                Новости и акции
              </router-link>
            </div>
            <div class="tw-pl-20 tw-pt-20 tw-w-full lg:tw-w-1/2">
              <router-link class="tw-text-base tw-text-blue tw-underline tw-leading-100" :to="{ name: 'progress' }">
                Ход строительства
              </router-link>
            </div>
            <div class="tw-pl-20 tw-pt-20 tw-w-full lg:tw-w-1/2">
              <router-link class="tw-text-base tw-text-blue tw-underline tw-leading-100" :to="{ name: 'documents' }">
                Документы
              </router-link>
            </div>
            <div class="tw-pl-20 tw-pt-20 tw-w-full lg:tw-w-1/2">
              <router-link class="tw-text-base tw-text-blue tw-underline tw-leading-100" :to="{ name: 'developer' }">
                Застройщик
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'NavFullScreen',
  data() {
    return {
      nav: [
        {
          label: 'О проекте',
          to: { name: 'about' },
        },
        {
          label: 'Расположение',
          to: { name: 'location' },
        },
        {
          label: 'Выбрать планировку',
          to: { name: 'flats.params' },
        },
        {
          label: 'Галерея',
          to: { name: 'gallery' },
        },
        {
          label: 'Условия покупки',
          to: { name: 'purchase' },
        },
        {
          label: 'Контакты',
          to: { name: 'contacts' },
        },
      ],
    };
  },
  computed: {
    value() {
      return this.$store.state.navShowed;
    },
  },
  methods: {
    ...mapMutations(['navToggle']),
  }
};
</script>

<style scoped>

.nav-page {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr;
}

.list {
  padding: 30px 16px;
}

@screen md {
  .nav-page {
    grid-template-areas: "col nav";
    grid-template-columns: 1fr 320px;
  }

  .list {
    grid-area: nav;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 0px;
    padding-right: 80px;
  }

  .nav-bg {
    background-image: url(@/assets/images/figure.png);
    background-repeat: no-repeat;
    background-size: 690px 690px;
    background-position: -130px bottom;
  }
}

@screen lg {
  .nav-page {
    grid-template-columns: 1fr 520px;
  }

  .nav-bg {
    background-size: 830px 830px;
    background-position: -200px -50px;
  }
}

@screen xl {
  .nav-page {
    grid-template-columns: 50% 50%;
  }
  .list {
    padding-top: 50px;
    padding-bottom: 100px;
  }
}

@screen 2xl {
  .nav-bg {
    background-size: 830px 830px;
    background-position: 0 bottom;
  }

  .list {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}
</style>
