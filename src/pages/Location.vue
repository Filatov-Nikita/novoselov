<template>
  <app-page class="tw-relative">
    <div class="wrapper xl:tw-h-full xl:tw-flex xl-separator md:tw-pb-[410px] xl:tw-pb-0">
      <div class="xl:tw-w-1/2 md:tw-relative md:tw-z-10">
        <h1 class="h1 tw-mb-20 2xl:tw-mb-[50px]">Расположение</h1>
          <div
            class="tw-flex tw-overflow-x-auto app-scroll-x tw-pb-20 tw-mb-20 -tw-ml-20 md:tw-max-w-[700px] md:-tw-mt-16 md:tw-flex-wrap xl:tw-max-w-[450px] xl:-tw-mt-10 xl:-tw-ml-30"
          >
          <div
            class="tw-shrink-0 tw-pl-20 md:tw-pt-16 md:tw-w-1/4 last:tw-mr-0 xl:tw-w-1/2 xl:tw-mr-0 xl:tw-pt-10 xl:tw-pl-30"
            v-for="tab in tabs"
            :key="tab.name"
          >
              <TabsItem
                class="md:tw-w-full"

                :active="tabValue === tab.name"
                :fill="tab.fill"
                v-bind="tab"
                @click="tabValue = tab.name"
              />
            </div>
          </div>
        </div>
        <div class="xl:tw-w-1/2 md:tw-absolute md:tw-bottom-0 md:tw-left-0 md:tw-right-0 md:tw-h-full md:tw-pt-[220px] xl:tw-left-auto xl:tw-pt-0 xl:tw-top-0 2xl:tw-mt-0 2xl:tw-py-30">
          <yandex-map
            class="tw-h-[290px] md:tw-h-full"
            :coords="homePoint.coords"
            :zoom="16"
            :controls="[]"
          >
            <ymap-marker
              v-for="location in markers"
              :key="location.id"
              :marker-id="location.id"
              v-bind="location"
            />
          </yandex-map>
        </div>
      </div>
  </app-page>
</template>

<script>
import TabsItem from '@/components/TabsItem.vue';

export default {
  data() {
    return {
      categoryIcon: {
        razv: 'smile',
        school: 'edu',
        sport: 'sport',
        det: 'horse',
        health: 'health',
        market: 'market',
        bus: 'bus',
        home: 'home'
      },
      tabValue: 'all',
      tabs: [
        {
          name: 'all',
          label: 'Все',
          icon: 'location',
          fill: '#C83E04'
        },
        {
          name: 'razv',
          label: 'Развлечения',
          icon: 'smile',
          fill: '#B618A0'
        },
        {
          name: 'school',
          label: 'Школы',
          icon: 'edu',
          fill: '#15DBB9'
        },
        {
          name: 'sport',
          label: 'Спорт',
          icon: 'sport',
          fill: '#0C9550'
        },
        {
          name: 'det',
          label: 'Детские сады',
          icon: 'horse',
          fill: '#F99C13'
        },
        {
          name: 'health',
          label: 'Здоровье',
          icon: 'health',
          fill: '#EC2121'
        },
        {
          name: 'market',
          label: 'Магазины',
          icon: 'market',
          fill: '#0DACFF'
        },
        {
          name: 'bus',
          label: 'Остановки',
          icon: 'bus',
          fill: '#2D2DFF'
        },
      ],
      points: getPoints(),
      homePoint: {
        id: 0,
        category: 'home',
        coords: [54.783985, 56.118924],
        name: 'Жилой комплекс "Новоселов"',
      }
    }
  },
  computed: {
    markers() {
      return [this.homePoint, ...this.filteredPoints].map(point => ({
        ...point,
        'balloon-template': this.balloonHtml(point.name),
        icon: this.makeIcon(point.category)
      }));
    },
    filteredPoints() {
      if(this.tabValue === 'all') return this.points;
      return this.points.filter(point => point.category === this.tabValue);
    }
  },
  methods: {
    makeIcon(category) {
      if(category === 'home') {
        return {
          layout: 'default#image',
          imageHref: '/markers/home.png',
          imageSize: [64, 64]
        }
      }

      return {
        layout: 'default#image',
        imageHref: '/markers/' + this.categoryIcon[category] + '.svg',
        imageSize: [36, 36]
      }
    },
    balloonHtml(name) {
      return `
        <p>${name}</p>
      `;
    }
  },
  components: {
    TabsItem
  }
}

function getPoints() {
  let id = 0;

  function setId() {
    return ++id;
  }

  return  [
    {
      id: setId(),
      category: 'bus',
      coords: [54.781249, 56.124376],
      name: 'АЗС № 114',
    },
    {
      id: setId(),
      category: 'bus',
      coords: [54.781786, 56.124259],
      name: 'Бульвар Тухвата Янаби',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.784362, 56.118704],
      name: 'Магнит',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.780877, 56.127327],
      name: 'Магнит',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.780585, 56.122049],
      name: 'Магнит Косметик',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.780657, 56.123660],
      name: 'Монетка',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.784919, 56.123888],
      name: 'Полушка',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.782530, 56.121058],
      name: 'Ярмарка',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.783525, 56.122714],
      name: 'Чижик',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.783715, 56.123644],
      name: 'Пятерочка',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.780524, 56.118260],
      name: 'Пятерочка',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.779382, 56.125553],
      name: 'Пятерочка',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.780561, 56.118903],
      name: 'Байрам',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.783779, 56.123917],
      name: 'Fix Price, товары для дома',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.780564, 56.117830],
      name: 'Мастер ВИН',
    },
    {
      id: setId(),
      category: 'market',
      coords: [54.780556, 56.118882],
      name: 'Мир электроники',
    },
    {
      id: setId(),
      category: 'health',
      coords: [54.787145, 56.124296],
      name: 'Поликлиническое отделение № 1',
    },
    {
      id: setId(),
      category: 'health',
      coords: [54.779915, 56.120141],
      name: 'Городская клиническая больница № 13, стационар',
    },
    {
      id: setId(),
      category: 'health',
      coords: [54.779669, 56.117778],
      name: 'Детская поликлиника № 4, филиал № 3',
    },
    {
      id: setId(),
      category: 'health',
      coords: [54.787145, 56.124296],
      name: 'Городская клиническая больница № 13, Поликлиника № 1',
    },
    {
      id: setId(),
      category: 'health',
      coords: [54.780674, 56.123010],
      name: 'Вита Экспресс',
    },
    {
      id: setId(),
      category: 'health',
      coords: [54.778802, 56.124992],
      name: 'Аптека Плюс',
    },
    {
      id: setId(),
      category: 'sport',
      coords: [54.784374, 56.121138],
      name: 'Адреналин, спортивный зал',
    },
    {
      id: setId(),
      category: 'sport',
      coords: [54.785805, 56.122836],
      name: 'Бассейн',
    },
    {
      id: setId(),
      category: 'sport',
      coords: [54.778348, 56.133188],
      name: 'Атлетик, фитнес-клуб',
    },
    {
      id: setId(),
      category: 'sport',
      coords: [54.782518, 56.125052],
      name: 'Gaz Boxing Team, спортивный клуб',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.783690, 56.121121],
      name: 'Умничка, Детский сад',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.782333, 56.122316],
      name: 'Детский сад № 59',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.783711, 56.127746],
      name: 'Детский сад № 169',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.785238, 56.127518],
      name: 'Детский сад № 109',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.781369, 56.110969],
      name: 'Детский сад № 107',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.783384, 56.110030],
      name: 'Детский сад № 106',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.778900, 56.118282],
      name: 'Детский сад № 58',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.781518, 56.119418],
      name: 'Детский сад № 266',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.778406, 56.127507],
      name: 'Детский сад № 262',
    },
    {
      id: setId(),
      category: 'det',
      coords: [54.778480, 56.128939],
      name: 'Детский сад № 264',
    },
    {
      id: setId(),
      category: 'school',
      coords: [54.781939, 56.127875],
      name: 'Лицей № 60 им. М. А. Ферина',
    },
    {
      id: setId(),
      category: 'school',
      coords: [54.782954, 56.112896],
      name: 'МАОУ школа № 157',
    },
    {
      id: setId(),
      category: 'school',
      coords: [54.781956, 56.117716],
      name: 'МБОУ школа № 74',
    },
    {
      id: setId(),
      category: 'school',
      coords: [54.777129, 56.118227],
      name: 'Гимназия № 121',
    },
    {
      id: setId(),
      category: 'school',
      coords: [54.776982, 56.127587],
      name: 'Лицей № 68',
    },
    {
      id: setId(),
      category: 'school',
      coords: [54.787062, 56.130198],
      name: 'Спортивная школа № 31',
    },
    {
      id: setId(),
      category: 'razv',
      coords: [54.780620, 56.123226],
      name: 'ТЦ Гелиос',
    },
    {
      id: setId(),
      category: 'razv',
      coords: [54.778472, 56.132784],
      name: 'ТЦ АкварИн',
    },
    {
      id: setId(),
      category: 'razv',
      coords: [54.783716, 56.123961],
      name: 'Своя компания',
    },
    {
      id: setId(),
      category: 'razv',
      coords: [54.783985, 56.121169],
      name: 'FARFOR, суши-бар',
    },
    {
      id: setId(),
      category: 'razv',
      coords: [54.778682, 56.133423],
      name: 'Ташир Пицца',
    },
    {
      id: setId(),
      category: 'razv',
      coords: [54.780304, 56.123020],
      name: 'Папа-Гриль',
    },
  ];
}
</script>

<style>

</style>
