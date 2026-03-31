<template>
  <app-page class="2xl:tw-pt-[100px] tw-relative">
    <div class="wrapper decor-rock">
      <div
        class="tw-flex md:tw-justify-end lg:tw-justify-normal lg:tw-pr-[25%] 2xl:tw-pr-[18%] tw-mt-30">
        <div class="">
          <h1 class="h1 tw-mb-20">Документы</h1>
          <div class="tw-text-base tw-text-gray tw-leading-120 2xl:tw-text-md">
            <p>
              Разрешительная документация <br />
              на сайте
              <a
                class="tw-text-blue tw-underline"
                :href="$store.state.domrf"
                target="_blank">
                наш.дом.рф
              </a>
            </p>
            <div class="tw-mt-24 tw-space-y-8">
              <a class="tw-text-blue tw-underline tw-block tw-w-fit" href="/policy.pdf" target="_blank">
                Политика конфиденциальности
              </a>
              <a class="tw-text-blue tw-underline tw-block tw-w-fit" href="/sogl.pdf" target="_blank">
                Cогласие на обработку персональных данных
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </app-page>
</template>
