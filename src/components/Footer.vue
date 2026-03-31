<template>
  <footer
    class="tw-border-t tw-bg-white tw-border-dark-line tw-border-opacity-15 tw-py-[13px] md:tw-py-20 xl:tw-py-25">
    <div class="wrapper 2xl:tw-max-w-none 2xl:tw-px-40">
      <div class="tw-flex tw-flex-wrap tw-items-center">
        <a href="#" class="logo tw-block tw-mr-30 tw-mb-8 xl:tw-mb-0">
          <img
            class="tw-w-full"
            width="152"
            height="30"
            src="@/assets/images/logo2.svg"
            alt="логотип агидель-инвест-строй" />
        </a>
        <div
          class="tw-mb-20 xl:tw-mb-0 tw-basis-full xl:tw-basis-[300px] tw-text-[8px] xl:tw-text-xxs tw-leading-100 tw-mr-20 tw-text-gray">
          © 2003-{{ currentYear }}, ООО СЗ «Агидель-ИнвестСтрой». Опубликованная на сайте
          информация носит рекламный характер и не является публичной офертой.
          Проектная декларация на&nbsp;сайте
          <a
            class="tw-text-blue tw-underline"
            :href="$store.state.domrf"
            target="_blank"
            >дом.рф</a
          >
        </div>

        <div class="tw-hidden 2xl:tw-block tw-grow"></div>

        <div class="tw-w-full tw-mb-12 tw-text-gray tw-text-xxs xl:tw-mb-0 xl:tw-w-auto xl:tw-mr-40 2xl:tw-mr-[82px]">
          <a class="tw-underline tw-block tw-w-fit" href="/policy.pdf" target="_blank">
            Политика конфиденциальности
          </a>
          <a class="tw-underline tw-block tw-w-fit tw-mt-4" href="/sogl.pdf" target="_blank">
            Cогласие на обработку персональных данных
          </a>
        </div>

        <div class="tw-flex tw-mr-8 lg:tw-mr-60 tw-space-x-8">
          <a
            v-for="item in soc"
            :key="item.name"
            :href="item.link"
            class="tw-h-24 tw-w-24 tw-block">
            <svg class="tw-w-full tw-h-full">
              <use :xlink:href="item.name"></use>
            </svg>
          </a>
        </div>

        <div class="tw-hidden 2xl:tw-block tw-grow"></div>

        <div class="tw-grow xl:tw-hidden"></div>

        <div
          class="tw-text-gray tw-basis-[108px] lg:tw-basis-[126px] tw-mr-6 tw-pr-6 lg:tw-mr-20 lg:tw-pr-20 tw-py-2 tw-text-xxs tw-leading-120 tw-border-r tw-border-r-white tw-border-solid">
          3D-визуализация, дизайн и разработка
        </div>

        <a href="#" class="tw-w-[80px] tw-h-[25px]">
          <img
            width="119"
            height="25"
            class="tw-w-full"
            src="@/assets/images/logo-yes.svg"
            alt="логотип yes idea" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      soc: [
        {
          name: "/sprite.svg#social-max",
          link: "https://max.ru/id0278093946_bot",
        },
        {
          name: '/sprite.svg#social-telegram',
          link: 'https://telegram.org'
        },
        {
          name: "/sprite.svg#social-vk",
          link: "https://vk.com/agidelinvest",
        },
      ],
      currentYear: this.getCurrentYear(),
    };
  },
  methods: {
    getCurrentYear() {
      const dt = new Date();
      return dt.getFullYear();
    }
  },
};
</script>

<style scoped>
.logo {
  width: 152px;
  height: 30px;
}
</style>
