<template>
  <div
    class="tw-rounded-t-3xl tw-bg-dark tw-text-white tw-py-40 tw-px-16 md:tw-px-[72px] md:tw-py-80 lg:tw-px-40 lg:tw-py-40 2xl:tw-px-[150px] 2xl:tw-py-[50px] tw-relative">
    <div
      class="-tw-tracking-sm tw-max-w-[343px] md:tw-max-w-full 2xl:tw-max-w-[620px] tw-w-full tw-mx-auto tw-relative tw-z-10 tw-flex tw-flex-col tw-gap-30 lg:tw-flex-row lg:tw-gap-36 2xl:tw-flex-col 2xl:tw-gap-40">
      <div class="">
        <p
          class="tw-text-lg tw-font-stolz tw-font-normal tw-leading-120 md:tw-max-w-full lg:tw-max-w-full tw-mb-10 2xl:tw-text-xl">
          Заявка на бронь
      </p>
        <p
          class="tw-text-gray tw-font-arial tw-text-md -tw-tracking-sm tw-leading-120 md:tw-max-w-[475px]">
          Оставьте заявку и наши менеджеры свяжутся с вами в ближайшее время
        </p>
      </div>
      <Form v-slot="{ isSubmitting }" @submit="submit" class="lg:tw-grow">
        <div class="tw-flex tw-flex-col md:tw-flex-row md:tw-gap-[22px]">
          <AppInput
            class="tw-basis-full lg:tw-basis-1/2"
            rules="required"
            name="name"
            label="Ваше имя" />
          <AppInput
            rules="required|cellphone"
            class="tw-basis-full lg:tw-basis-1/2"
            name="cellphone"
            label="Номер телефона"
            type="tel" />
          <AppButton
            class="tw-rounded-14 lg:tw-rounded-2xl xl:tw-rounded-14 tw-mt-12 md:tw-mt-0 2xl:tw-ml-15 tw-w-full 2xl:tw-basis-[175px] tw-self-start"
            type="submit"
            :disabled="isSubmitting">
            Отправить
          </AppButton>
        </div>
        <AppCheckbox
          class="tw-mt-24 tw-text-gray"
          name="agreement"
          label="Условия"
          rules="required"
          :value="true"
        >
          Я согласен с
          <AppLink native to="/policy.pdf" target="_blank" class="tw-text-blue"
            >условиями передачи информации</AppLink
          >
        </AppCheckbox>
      </Form>
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    flatNumber: {
      required: true,
      type: Number
    }
  },
  methods: {
    async submit({ name, cellphone }) {
      const payload = {
        name,
        cellphone,
        theme: `Заявка на бронь квартира №${this.flatNumber}`
      };
      await this.$store.dispatch('getFeedback', payload);
      this.$notify({ type: 'success', text: 'Ваша заявка успешно отправлена!' });
    }
  }
}
</script>
