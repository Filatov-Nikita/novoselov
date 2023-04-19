<template>
  <app-page class="2xl:tw-pt-[100px] tw-relative">
    <div class="wrapper decor-rock">
      <div
        class="tw-flex md:tw-justify-end lg:tw-justify-normal lg:tw-pr-[25%] 2xl:tw-pr-[18%] tw-mt-30">
        <div class="">
          <h1 class="h1 tw-mb-20">Документы</h1>
          <div class="tw-text-base tw-text-gray tw-leading-120 2xl:tw-text-md">
            Разрешительная документация <br />
            на сайте
            <a
              class="tw-text-blue tw-underline"
              :href="$store.state.domrf"
              target="_blank">
              наш.дом.рф
            </a>
          </div>
        </div>
      </div>
    </div>
  </app-page>
</template>
