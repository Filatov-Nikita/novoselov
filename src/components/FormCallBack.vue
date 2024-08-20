<template>
  <div class="tw-bg-dark tw-rounded-[24px] tw-py-[45px] tw-px-16 md:tw-px-[36px] 2xl:tw-py-[76px] 2xl:tw-px-[145px] tw-relative">
    <div class="xl:tw-flex 2xl:tw-block">
      <div class="xl:tw-basis-[420px] xl:tw-mr-40 2xl:tw-mr-0">
        <p class="tw-text-lg tw-text-white tw-font-stolz tw-mb-10 2xl:tw-text-xl">
          Заказать звонок
        </p>
        <p class="tw-text-md tw-leading-120 tw-text-gray tw-mb-30 tw-max-w-[320px] md:tw-max-w-[430px]">
          Оставьте заявку и&nbsp;наши менеджеры свяжутся с&nbsp;вами в&nbsp;ближайшее время
        </p>
      </div>
      <Form class="tw-grow" v-slot="{ isSubmitting }" @submit="submit">
        <div class="md:tw-flex md:tw-space-x-20 md:tw-items-center">
          <AppInput
            class="md:tw-basis-[190px]"
            rules="required"
            name="name"
            label="Ваше имя"
          />
          <AppInput
            class="md:tw-basis-[190px]"
            rules="required|cellphone"
            name="cellphone"
            label="Номер телефона"
            type="tel"
          />
          <AppButton
            class="tw-mt-20 tw-w-full tw-py-15 md:tw-mt-0 md:tw-basis-[200px]"
            type="submit"
            :disabled="isSubmitting"
          >
            Отправить
          </AppButton>
        </div>
        <AppCheckbox class="tw-mt-30 tw-text-gray tw-text-xs md:tw-mt-10 xl:tw-mt-25" name="agreement" label="Условия" rules="required" :value="true">
          Я согласен с <AppLink native to="/policy.pdf" target="_blank">условиями передачи информации</AppLink>
        </AppCheckbox>
      </Form>
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  methods: {
    async submit({ name, cellphone }) {
      await this.$store.dispatch('getFeedback', { name, cellphone, theme: 'Обратный звонок' });
      this.$notify({ type: 'success', text: 'Ваша заявка успешно отправлена!' });
      this.$ym.fireCallbackGoal();
    }
  }
}
</script>
<style scoped>
</style>
