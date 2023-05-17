<template>
  <app-page>
    <div class="wrapper">
      <div class="grid tw-pb-40 2xl:tw-pt-30">
        <div class="md:tw-mt-0 2xl:tw-flex 2xl:-tw-mr-48">
          <div class="2xl:tw-w-1/2">
            <h1 class="h1 tw-text-lg tw-text-dark tw-mb-30 2xl:tw-text-xl">
              О проекте
            </h1>
          </div>
          <div class="tw-max-w-[360px] md:tw-max-w-[500px] 2xl:tw-max-w-full 2xl:tw-w-1/2 2xl:tw-pl-48">
            <p class="tw-text-md tw-text-secondary tw-leading-120 tw-mb-20 2xl:tw-text-lg">
              Жилой комплекс «Новоселов» от&nbsp;застройщика «Агидель-ИнвестСтрой»&nbsp;—
            </p>
            <p class="tw-text-gray tw-mb-30 tw-max-w-[320px] md:tw-max-w-[420px]">
              это современный объект с&nbsp;детским садом и&nbsp;поликлиникой. Представляем третий завершающий литер ЖК&nbsp;«Новоселов».
            </p>
            <div class="tw-flex tw-space-x-[50px] 2xl:tw-space-x-[90px]">
              <div>
                <p class="tw-text-lg tw-mb-4 2xl:tw-text-xl tw-font-stolz">18</p>
                <p class="tw-text-gray">этажей</p>
              </div>
              <div>
                <p class="tw-text-lg tw-mb-4 2xl:tw-text-xl tw-font-stolz">2</p>
                <p class="tw-text-gray">секции</p>
              </div>
              <div>
                <p class="tw-text-lg tw-mb-4 2xl:tw-text-xl tw-font-stolz">276</p>
                <p class="tw-text-gray">квартир</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="cards">
            <article
              v-for="card, index in cards"
            >
              <div class="tw-mb-20 2xl:-tw-ml-[100px] 2xl:tw-mb-30">
                <span class="tw-inline-block tw-align-top tw-text-orange tw-mr-30 2xl:tw-text-[18px] 2xl:tw-mr-60">
                  (0{{ index + 1 }}—)
                </span>
                <router-link
                  class="tw-inline-block tw-text-md tw-leading-100 2xl:tw-text-lg"
                  v-if="card.to" :to="card.to"
                >
                  {{ card.name }}
                </router-link>
                <h2 v-else class="tw-inline-block tw-text-md tw-leading-100 2xl:tw-text-lg">
                  {{ card.name }}
                </h2>
              </div>
              <div class="tw-mb-30">
                <img class="tw-rounded-3xl tw-w-full" width="350" height="188" loading="lazy" :src="card.img" alt="">
              </div>
              <p class="tw-leading-[1.7]" v-html="card.text"></p>
            </article>
          </div>
        </div>

        <div class="2xl:tw-flex 2xl:tw-pt-20">
          <div class="engen">
            <div class="tw-mb-30 2xl:-tw-ml-[100px]">
              <span class="tw-inline-block tw-align-top tw-text-orange tw-mr-30 2xl:tw-mr-60">
                (05—)
              </span>
              <h2 class="tw-inline-block tw-text-md tw-leading-100 2xl:tw-text-lg">
                Инженерия
              </h2>
            </div>
            <ul class="tw-px-16 tw-flex tw-flex-wrap -tw-ml-10 -tw-mt-30 md:tw-px-0 lg:-tw-ml-20 lg:-tw-mt-40 lg:tw-px-0 2xl:-tw-ml-30">
              <li
                class="tw-w-full md:tw-w-1/2 tw-pl-10 tw-pt-30 lg:tw-w-1/3 lg:tw-pl-20 lg:tw-pt-40 2xl:tw-pl-30"
                style="--color: #FBB03B"
                v-for="(item, i) in items"
                :key="i"
              >
                <span class="before:tw-mb-10 list-marker tw-flex tw-flex-nowrap md:before:tw-shrink-0">
                  <span class="tw-basis-full md:tw-basis-auto" v-html="item"></span>
                </span>
              </li>
            </ul>
          </div>

          <div class="callback">
            <FormCallBack class="-tw-mx-16 2xl:tw-mx-0" />
          </div>
        </div>
      </div>
    </div>
  </app-page>
</template>

<script>
import FormCallBack from '@/components/FormCallBack.vue';

export default {
  data() {
    return {
      cards: [
        {
          to: { name: 'location' },
          name: 'Расположение',
          img: require('@/assets/images/about/location.png'),
          text: 'Жилой комплекс расположен в микрорайоне Инорс, в квартале, ограниченном бульваром Т. Янаби и улицами Г. Мушникова, М. Шолохова и Новоселов. В микрорайоне активно развивается собственная инфраструктура: от магазинов и супермаркетов до детских садов, школ, кафе, аптек и поликлиник.<br/><br/> Расположение дома выгодно и с точки зрения транспортной доступности: удобный выезд для автомобилистов и остановки общественного транспорта в 5 минутах ходьбы для пешеходов.'
        },
        {
          name: 'Территория',
          img: require('@/assets/images/about/place.png'),
          text: 'Внутренняя территория дома предназначена для игр и занятий спортом детей самых разных возрастов. Центром притяжения для малышей станет большой игровой комплекс с горками, лесенками и качелями. Пространство с противоположной стороны дома отведено для активного отдыха и проведения турниров среди соседей: здесь будет универсальная спортивная площадка для футбола, баскетбола и других игр и воркаут-зона.'
        },
        {
          name: 'Подъезды',
          img: require('@/assets/images/about/entr.png'),
          text: 'Атмосферу домашнего тепла и уюта создают прозрачная входная группа с теплым тамбуром и мягким освещением. В холле первого этажа предусмотрена комната для консьержа. Мамы самых маленьких жителей безусловно оценят просторную колясочную и удобные пандусы.'
        },
        {
          to: { name: 'flats.params' },
          name: 'Квартиры',
          img: require('@/assets/images/about/flats.png'),
          text: 'ЖК Новоселов — новый дом с комфортными квартирами для больших и маленьких семей, поэтому здесь нет минималистичных студий, а только полноразмерные одно-, двух-и трехкомнатные квартиры.'
        },
      ],
      items: getItems()
    }
  },
  components: {
    FormCallBack
  }
}

function getItems() {
  return [
    'Технология строительства: «монолит-каркас» с&nbsp;заполнением стен керамическим кирпичом',
    'Наружная отделка стен: теплый штукатурный фасад',
    'По 2 лифта в каждой секции — пассажирский и&nbsp;грузовой',
    'Внутренние перегородки: кирпич',
    'Звукоизоляция пола',
    'Окна: ПВХ, двухкамерные стеклопакеты',
    'Разводка электрических сетей',
    'Отделка: черновая',
    'Современная система пожаротушения и&nbsp;дымоудаления',
  ]
}
</script>

<style scoped>
  .grid {
    display: grid;
    row-gap: 60px;
    grid-template-columns: 100%;
  }

  .cards {
    display: grid;
    grid-template-columns: 100%;
    row-gap: 60px;
  }

  .callback {
    margin-top: 60px;
  }

  @screen md {
    .cards {
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
    }
  }

  @screen xl {
    .cards {
      column-gap: 96px;
    }
  }

  @screen 2xl {
    .cards {
      column-gap: 260px;
      max-width: 1380px;
      row-gap: 128px;
    }

    .engen {
      flex-basis: 818px;
      padding-right: 105px;
    }

    .callback {
      flex-grow: 1;
      flex-basis: 700px;
      margin-right: -150px;
      margin-top: 0;
    }
  }
</style>
