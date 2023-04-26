<template>
  <app-page>
    <div>
      <div class="wrapper">
        <h1 class="h1">Подбор по параметрам</h1>
        <section class="tw-pb-20 lg:tw-py-80 md:tw-pb-60 2xl:tw-pb-120 tw-pt-30 md:tw-pt-40">
          <div class="tw-flex tw-flex-wrap -tw-ml-24 md:-tw-mt-6 md:tw-max-w-[720px] 2xl:tw-max-w-[1172px]">
            <SelectStoreys
              ref="storeys"
              class="tw-ml-24 md:tw-mt-6 tw-basis-full md:tw-basis-[210px]"
              v-model="filter.storey"
            />
            <SelectRooms
              ref="rooms"
              class="tw-ml-24 md:tw-mt-6 tw-basis-full md:tw-basis-[210px]"
              v-model="filter.rooms"
            />
            <SelectSquare
              ref="square"
              class="tw-ml-24 md:tw-mt-6 tw-basis-full md:tw-basis-[210px]"
              v-model="filter.square"
            />
          </div>
        </section>
      </div>
    </div>
    <section class="tw-bg-white">
      <div class="wrapper">
        <div :class="{ 'tw-absolute': flats }" v-if="$store.getters['loaders/is']('loading flats')">
          <Spinner size="100px" />
        </div>
        <template v-if="flats">
          <div class="md:tw-flex md:tw-justify-between">
            <div class="tw-mb-20 tw-items-start tw-flex tw-flex-wrap tw-gap-x-30 tw-gap-y-10 md:tw-mb-0 md:tw-order-1">
              <button @click="clearFilter" class="tw-flex">
                <AppIcon class="tw-mr-10" name="reset" size="18px" fill="gray" />
                <span class="tw-text-gray tw-text-sm tw-leading-100 tw-mt-4">Сбросить фильтр</span>
              </button>

              <button class="tw-flex" @click="changeOrder">
                <span class="tw-mr-10 tw-text-gray tw-text-sm tw-leading-100 tw-mt-4">Цена по возрастанию</span>
                <AppIcon class="tw-stroke-gray" :class="{ 'tw-rotate-180': filter.sortOrder === 'asc' }" name="arrow-down" size="18px" />
              </button>
            </div>
            <p class="lg:tw-text-lg tw-text-md tw-text-secondary tw-leading-100 tw-mb-30">
              Найдено {{ flats.length }} квартир
            </p>
          </div>
          <FlatsParamsList :items="flats" />
        </template>
      </div>
    </section>
  </app-page>
</template>

<script>
import FlatsParamsList from '@/components/FlatsParamsList.vue';
import SelectFeatures from '@/components/SelectFeatures.vue';
import SelectLiter from '@/components/SelectLiter.vue';
import SelectRooms from '@/components/SelectRooms.vue';
import SelectStoreys from '@/components/SelectStoreys.vue';
import SelectSquare from '@/components/SelectSquare.vue';
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const storeys = ref(null);
    const rooms = ref(null);
    const square = ref(null);

    const filter = ref({
      storey: null,
      rooms: null,
      square: null,
      sort: 'price',
      sortOrder: 'desc'
    });

    const filterGetters = {
      storey: (filter, value) => {
        filter.storey_min = value[0];
        filter.storey_max = value[1];
      },
      rooms: (filter, value) => {
        if(value.length <= 0) return;
        value.forEach((val, i) => {
          filter[`rooms_in[${i}]`] = val;
        });
      },
      square: (filter, value) => {
        filter.total_area_min = value[0];
        filter.total_area_max = value[1];
      },
      sort: (filter, value) => {
        filter.sort_by = value;
      },
      sortOrder: (filter, value) => {
        filter.sort_order = value;
      },
    }

    const flats = ref(null);

    const makeFilter = () => {
      const newFilter = {};
      for(let key in filter.value) {
        if(filter.value[key]) filterGetters[key](newFilter, filter.value[key]);
      }
      return newFilter;
    };

    function changeOrder() {
      filter.value.sortOrder = filter.value.sortOrder === 'asc' ? 'desc' : 'asc';
    }

    const getFlats = async () => {
      store.dispatch('loaders/start', 'loading flats');
      flats.value = await store.dispatch('flats/getFlats', makeFilter());
      store.dispatch('loaders/end', 'loading flats');
    };

    function clearFilter() {
      filter.value = {
        storey: null,
        rooms: null,
        square: null,
      }

      storeys.value?.reset();
      rooms.value?.reset();
      square.value?.reset();
    }

    watch(filter, () => getFlats(), { deep: true, immediate: true });

    return {
      filter,
      flats,
      clearFilter,
      storeys,
      rooms,
      square,
      changeOrder
    }
  },
  components: {
    FlatsParamsList,
    SelectFeatures,
    SelectLiter,
    SelectRooms,
    SelectStoreys,
    SelectSquare
  }
}
</script>

<style>

</style>
