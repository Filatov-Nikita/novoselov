<template>
  <app-page class="2xl:tw-pt-[100px] page-pb">
    <div
      class="wrapper tw-relative decor-rock after:tw-content-none 2xl:after:tw-content-['']">
      <div class="xl:tw-flex xl:tw-justify-between">
        <div class="">
          <p
            class="tw-font-stolz -tw-tracking-sm tw-text-lg tw-leading-120 md:tw-text-xl 2xl:tw-text-xl10 tw-mb-20 md:tw-mb-40 xl:tw-mb-20">
            Упс ...
          </p>
          <h1
            class="tw-text-gray tw-text-base tw-leading-120 tw-max-w-[260px] tw-mb-60 md:tw-max-w-[600px] xl:tw-text-md md:tw-font-extrabold md:tw-mb-60">
            Извините, страница не найдена
          </h1>
        </div>
        <div class="2xl:tw-basis-[862px]">
          <div
            class="tw-flex tw-flex-col md:tw-max-w-[519px] xl:tw-max-w-[645px] 2xl:tw-max-w-[910px] md:tw-ml-auto md:tw-mr-0">
            <div class="tw-mb-40 md:tw-mb-60">
              <div class="tw-relative">
                <img
                  class="tw-w-full"
                  width="288"
                  height="107"
                  src="@/assets/images/fallback.svg"
                  alt="404" />

                <span
                  class="tw-font-misto tw-text-red tw-text-lg 2xl:tw-text-xl tw-leading-120 tw-absolute tw-top-1/2 tw-left-1/2 tw-transform -tw-translate-x-1/2 -tw-translate-y-1/2 -tw-rotate-[15deg]">
                  Ошибка
                </span>
              </div>
            </div>
            <div class="">
              <AppLink
                class="md:tw-inline-flex !tw-text-gray"
                external
                :to="{ name: 'main' }"
                >На главную</AppLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </app-page>
</template>

<script>
export default {};
</script>
