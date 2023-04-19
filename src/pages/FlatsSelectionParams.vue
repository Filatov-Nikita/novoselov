<template>
  <app-page>
    <div>
      <div class="wrapper">
        <h1 class="h1">Подбор по параметрам</h1>
        <section class="tw-pb-20 lg:tw-py-80 md:tw-pb-60 2xl:tw-pb-120 tw-pt-30 md:tw-pt-40">
          <div class="tw-flex tw-flex-wrap -tw-ml-24 md:-tw-mt-6 md:tw-max-w-[720px] 2xl:tw-max-w-[1172px]">
            <SelectStoreys
              class="tw-ml-24 md:tw-mt-6 tw-basis-full md:tw-basis-[210px]"
              v-model="filter.storey"
            />
            <SelectRooms
              class="tw-ml-24 md:tw-mt-6 tw-basis-full md:tw-basis-[210px]"
              v-model="filter.rooms"
            />
            <SelectSquare
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
          <p class="lg:tw-text-lg tw-text-md tw-text-secondary tw-leading-100 tw-mb-30">
            Найдено {{ flats.length }} квартир
          </p>
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

    const filter = ref({
      storey: null,
      rooms: null,
      square: null,
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
    }

    const flats = ref(null);

    const makeFilter = () => {
      const newFilter = {};
      for(let key in filter.value) {
        if(filter.value[key]) filterGetters[key](newFilter, filter.value[key]);
      }
      return newFilter;
    };

    const getFlats = async () => {
      store.dispatch('loaders/start', 'loading flats');
      flats.value = await store.dispatch('flats/getFlats', makeFilter());
      store.dispatch('loaders/end', 'loading flats');
    };

    watch(filter, () => getFlats(), { deep: true, immediate: true });

    return {
      filter,
      flats
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
