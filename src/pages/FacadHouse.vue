<template>
  <div
    class="tw-h-screen tw-min-h-[700px] md:tw-min-h-[1000px] lg:tw-min-h-[800px] xl:tw-min-h-[800px] tw-overflow-hidden tw-relative tw-bg-primary">
    <Header class="tw-absolute tw-inset-x-0 tw-top-0" />
    <div
      class="tw-absolute tw-inset-0 tw-z-[5] tw-overflow-x-auto tw-pt-80 xl:tw-pt-[102px] tw-mb-[137px]">
      <div class="storey-popup" v-if="activeStorey">
        <div>
          <p class="tw-text-xl tw-text-secondary">
            {{ activeStorey.entrance }}
          </p>
          <p>секция</p>
        </div>
        <div>
          <p class="tw-text-xl tw-text-secondary">
            {{ activeStorey.number }}
          </p>
          <p>этаж</p>
        </div>
        <div>
          <p class="tw-text-xl tw-text-secondary">
            {{ activeStorey.flats_counters.free }}
          </p>
          <p>
            квартир <br />
            свободно
          </p>
        </div>
      </div>
      <HousePlan
        v-if="
          $grid.breakpoint === '' ||
          $grid.breakpoint === 'sm' ||
          $grid.breakpoint === 'md'
        "
        tappable
        :activeStorey="hoverStorey"
        :storeys="storeys"
        ratio="xMidYMid slice"
        d="M206 192.643V177.14L315.524 200.395L538 169V186.442L315.524 219L206 192.643Z"
        :paths="paths.mobile"
        width="769"
        height="690"
        :offset="17"
        :image="require('@/assets/images/house-mobile.jpg')"
        @enter="onEnter" />
      <!-- <HousePlan
        v-else-if="$grid.breakpoint === 'md'"
        tappable
        :activeStorey="hoverStorey"
        :storeys="storeys"
        ratio="xMidYMid slice"
        d="M290 183.481V166.116L442.74 192.163L753 157V176.535L442.74 213L290 183.481Z"
        width="915"
        height="822"
        :offset="24"
        :image="require('@/assets/images/house-mobile.jpg')"
        @enter="onEnter" /> -->
      <!-- <HousePlan
        v-else-if="$grid.breakpoint === 'lg'"
        :activeStorey="hoverStorey"
        :storeys="storeys"
        ratio="xMidYMid slice"
        d="M626 178.225V163.651L726.617 185.512L931 156V172.395L726.617 203L626 178.225Z"
        width="1120"
        height="735"
        :offset="16"
        :image="require('@/assets/images/house-lg.jpg')"
        @enter="onEnter" /> -->
      <HousePlan
        v-else
        :activeStorey="hoverStorey"
        :storeys="storeys"
        ratio="xMidYMid slice"
        d="M1137 254.736V234.581L1296.01 264.814L1619 224V246.674L1296.01 289L1137 254.736Z"
        width="1920"
        height="720"
        :offset="22"
        :paths="paths.desktop"
        :image="require('@/assets/images/house-1.jpg')"
        @enter="onEnter"
        @leave="onLeave" />
    </div>
    <Footer class="tw-absolute tw-inset-x-0 tw-bottom-0 tw-z-10" />
  </div>
</template>

<script>
import HousePlan from "@/components/HousePlan.vue";

export default {
  data() {
    return {
      entrance: null,
      storeysMap: new Map(),
      activeStorey: null,
      hoverStorey: null,
      timer: null,
      paths: {
        mobile: {
          first: [
            "M286.18 687.62L180.622 678.431L180.623 643.6L286.181 649.886L595.18 623.271L595.179 659.554L286.18 687.62Z",
            "M286.181 648.436L180.623 642.634L180.624 609.093L286.182 613.121L595.181 592.794L595.18 622.789L286.181 648.436Z",
            "M286.182 612.636L180.624 608.284L180.624 579.742L286.183 580.706L595.181 564.734L595.181 591.825L286.182 612.636Z",
            "M286.183 580.225L180.624 578.776L180.625 545.88L286.184 546.36L595.182 536.193L595.181 563.767L286.183 580.225Z",
            "M286.184 545.876L180.626 545.396L180.627 512.983L286.185 512.497L595.183 508.134L595.182 535.225L286.184 545.876Z",
            "M286.185 511.53L180.626 512.016L180.627 480.571L286.186 480.57L595.184 477.658L595.183 507.167L286.185 511.53Z",
            "M286.186 479.603L180.627 479.606L180.628 449.612L286.187 448.642L595.185 450.568L595.184 477.176L286.186 479.603Z",
            "M286.186 447.673L180.628 449.127L180.629 415.747L286.187 414.777L595.185 421.541L595.184 449.599L286.186 447.673Z",
            "M286.187 413.81L180.629 415.264L180.63 385.271L286.188 380.913L595.186 394.451L595.185 420.574L286.187 413.81Z",
            "M286.188 380.43L180.63 384.786L180.631 353.826L286.189 348.017L595.187 366.876L595.186 393.967L286.188 380.43Z",
            "M286.189 347.533L180.631 352.856L180.632 320.929L286.19 314.636L595.188 337.365L595.187 365.907L286.189 347.533Z",
            "M286.19 314.152L180.631 320.444L180.152 289.967L286.191 278.839L595.188 309.307L595.188 336.881L286.19 314.152Z",
            "M286.191 278.353L180.153 289.483L180.633 253.684L286.672 244.973L594.709 279.796L595.188 308.822L286.191 278.353Z",
            "M286.672 244.006L180.633 252.717L180.634 222.239L286.673 212.077L594.71 252.705L594.709 278.828L286.672 244.006Z",
            "M286.673 211.11L180.634 221.272L180.155 189.343L286.674 176.762L595.191 222.229L595.19 251.255L286.673 211.11Z",
            "M286.674 175.311L179.569 188.376L179.57 156.931L286.675 143.381L595.192 194.169L595.191 220.776L286.674 175.311Z",
            "M286.675 142.415L179.57 155.963L179.57 124.518L286.676 109.518L596.916 164.66L596.915 192.718L286.675 142.415Z",
            "M286.675 109.035L179.57 124.034L179.571 92.1066L286.676 73.7191L596.917 130.796L596.916 163.211L286.675 109.035Z",

            // "M616.133 654.999V623.825L750.633 613.754V643.489L616.133 654.999Z",
            "M616.133 622.868V597.929L750.633 587.857V612.796L616.133 622.868Z",
            "M616.133 597.451V569.155L750.633 561.961V587.536L616.133 597.451Z",
            "M616.133 568.672V540.856L750.633 535.58V561.478L616.133 568.672Z",
            "M616.133 540.222V512.559L750.633 508.723V534.869L616.133 540.222Z",
            "M616.133 512.082V484.028L750.633 483.307V508.245L616.133 512.082Z",
            "M616.133 483.307V455.234L750.633 456.45V482.828L616.133 483.307Z",
            "M616.133 455.009V426.713L750.633 429.111V455.968L616.133 455.009Z",
            "M616.133 426.235V397.939L750.633 403.215V428.633L616.133 426.235Z",
            "M616.133 397.459V369.643L750.633 376.357V402.734L616.133 397.459Z",
            "M616.133 369.164V341.348L750.633 350.46V375.878L616.133 369.164Z",
            "M616.133 340.715V312.572L750.633 323.124V349.98L616.133 340.715Z",
            "M616.133 312.092V283.316L750.633 297.225V322.643L616.133 312.092Z",
            "M616.133 282.837V254.301L750.633 270.847V296.745L616.133 282.837Z",
            "M616.133 254.062V226.246L750.633 244.74V270.369L616.133 254.062Z",
            "M616.133 225.766V197.949L750.633 219.051V244.47L616.133 225.766Z",
            "M616.133 197.47V170.133L750.633 191.714V218.572L616.133 197.47Z",
            "M616.133 169.653V138L750.633 162.459V191.235L616.133 169.653Z",
          ],
          second: [],
        },
        desktop: {
          first: [
            "M689 715.999L579 706.499L579 670.499L689 676.999L1011 649.5L1011 687.001L689 715.999Z",
            "M689 675.5L579 669.5L579 634.834L689 639L1011 618L1011 649.001L689 675.5Z",
            "M689 638.501L579 634L579 604.5L689 605.5L1011 589L1011 617L689 638.501Z",
            "M689 605.001L579 603.501L579 569.501L689 570L1011 559.5L1011 588L689 605.001Z",
            "M689 569.5L579 569L579 535.5L689 535.001L1011 530.5L1011 558.5L689 569.5Z",
            "M689 534L579 534.5L579 502L689 502.001L1011 499L1011 529.5L689 534Z",
            "M689 501L579 501L579 470L689 469L1011 471L1011 498.5L689 501Z",
            "M689 468.001L579 469.5L579 435L689 434L1011 441L1011 470L689 468.001Z",
            "M689 433.001L579 434.5L579 403.501L689 399L1011 413.001L1011 440L689 433.001Z",
            "M689 398.501L579 403L579 371.001L689 365L1011 384.501L1011 412.501L689 398.501Z",
            "M689 364.501L579 370L579 337.001L689 330.5L1011 354.001L1011 383.501L689 364.501Z",
            "M689 330L579 336.5L578.5 305.001L689 293.502L1011 325.001L1011 353.5L689 330Z",
            "M689 293L578.5 304.5L579 267.5L689.5 258.499L1010.5 294.5L1011 324.5L689 293Z",
            "M689.5 257.5L579 266.5L579 235L689.5 224.5L1010.5 266.5L1010.5 293.5L689.5 257.5Z",
            "M689.5 223.5L579 234L578.5 201L689.5 188L1011 235L1011 265L689.5 223.5Z",
            "M689.5 186.5L577.889 200.001L577.889 167.501L689.5 153.5L1011 206L1011 233.5L689.5 186.5Z",
            "M689.5 152.5L577.889 166.5L577.889 134L689.5 118.5L1012.8 175.5L1012.8 204.5L689.5 152.5Z",
            "M689.5 118L577.889 133.5L577.889 100.501L689.5 81.4995L1012.8 140.5L1012.8 174.003L689.5 118Z",

            // "M1032 682.5V650L1166.5 639.5V670.5L1032 682.5Z",
            "M1032 649V623L1166.5 612.5V638.5L1032 649Z",
            "M1032 622.5V593L1166.5 585.5V612.163L1032 622.5Z",
            "M1032 592.5V563.5L1166.5 558V585L1032 592.5Z",
            "M1032 562.84V534L1166.5 530V557.259L1032 562.84Z",
            "M1032 533.5V504.252L1166.5 503.5V529.5L1032 533.5Z",
            "M1032 503.5V474.232L1166.5 475.5V503L1032 503.5Z",
            "M1032 474V444.5L1166.5 447V475L1032 474Z",
            "M1032 444V414.5L1166.5 420V446.5L1032 444Z",
            "M1032 414V385L1166.5 392V419.5L1032 414Z",
            "M1032 384.5V355.5L1166.5 365V391.5L1032 384.5Z",
            "M1032 354.84V325.5L1166.5 336.501V364.5L1032 354.84Z",
            "M1032 325V295L1166.5 309.5V336L1032 325Z",
            "M1032 294.5V264.75L1166.5 282V309L1032 294.5Z",
            "M1032 264.5V235.5L1166.5 254.78V281.5L1032 264.5Z",
            "M1032 235V206L1166.5 228V254.5L1032 235Z",
            "M1032 205.5V177L1166.5 199.5V227.5L1032 205.5Z",
            "M1032 176.5V143.5L1166.5 169V199L1032 176.5Z",
          ],
        },
      },
    };
  },
  created() {
    this.getEntrance();
  },
  methods: {
    async getEntrance() {
      this.entrance = await this.$store.dispatch("entrances/entrancesOne", {
        id: 1,
      });
    },
    async onEnter(storeyId) {
      this.hoverStorey = { id: storeyId };

      if (this.storeysMap.has(storeyId)) {
        this.activeStorey = this.storeysMap.get(storeyId);
      } else {
        this.activeStorey = await this.$store.dispatch("storeys/storeysOne", {
          id: storeyId,
        });
        console.log(this.activeStorey);
        this.storeysMap.set(storeyId, this.activeStorey);
      }
    },
    onLeave(storeyId) {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (storeyId === this.activeStorey?.id) {
          this.activeStorey = null;
          this.hoverStorey = null;
        }
      }, 500);
    },
  },
  computed: {
    storeys() {
      if (!this.entrance) return [];
      const entries = Object.entries(this.entrance.storeys);
      const sorted = entries.sort((a, b) => b[0] - a[0]);
      return sorted.map((entry) => ({ id: entry[1], number: entry[0] }));
    },
  },
  components: {
    HousePlan,
  },
};
</script>

<style scoped>
.storey-popup {
  z-index: 10;
  padding: 16px;
  border-radius: 16px;
  background: #f5f5f5;
  backdrop-filter: blur(7px);
  color: theme("colors.gray");
  font-size: 14px;
  position: absolute;

  left: 16px;
  bottom: 35px;
}

@screen lg {
  .storey-popup {
    right: auto;
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
    bottom: auto;
  }
}

@screen 2xl {
  .storey-popup {
    left: 100px;
  }
}
</style>
