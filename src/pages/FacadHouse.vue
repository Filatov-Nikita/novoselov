<template>
  <div
    class="tw-h-screen tw-min-h-[700px] md:tw-min-h-[1000px] lg:tw-min-h-[800px] xl:tw-min-h-[800px] tw-overflow-hidden tw-relative tw-bg-primary">
    <Header class="tw-absolute tw-inset-x-0 tw-top-0" />
    <div
      class="tw-absolute tw-inset-0 tw-z-[5] tw-overflow-x-auto tw-pt-80 xl:tw-pt-[102px]">
      <div class="storey-popup" v-if="activeStorey">
        <div>
          <p class="tw-text-xl tw-text-orange tw-font-extrabold">
            {{ activeStorey.number }}
          </p>
          <p>этаж</p>
        </div>
        <div>
          <p class="tw-text-xl tw-text-orange tw-font-extrabold">
            {{ activeStorey.flats_counters.free }}
          </p>
          <p>квартир свободно</p>
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
            "M286.136 108.771L179.262 123.809L179.264 91.8019L286.137 73.3668L595.705 130.581L595.704 163.078L286.136 108.771Z",
            "M286.135 142.234L179.262 156.5L179.262 124.5L286.136 109.255L595.704 164.53L595.703 192.659L286.135 142.234Z",
            "M285.5 175.5L179.26 188.311L179.261 157.757L285.5 143.499L593.983 194.112L593.982 220.786L285.5 175.5Z",
            "M286.131 211.103L179.5 221L180 189L286.133 176.668L593.981 222.244L593.98 251.343L286.131 211.103Z",
            "M286.13 244.079L180.321 252.813L180.323 222.26L286.132 212.07L593.502 252.795L593.501 278.984L286.13 244.079Z",
            "M285.65 278.512L179.841 289.671L180.321 253.783L286.13 245.048L593.501 279.954L593.978 309.052L285.65 278.512Z",
            "M285.648 314.402L180.318 320.711L179.841 290.158L285.65 279L593.978 309.54L593.977 337.182L285.648 314.402Z",
            "M285.647 347.864L180.317 353.203L180.318 321.195L285.648 314.885L593.977 337.666L593.976 366.28L285.647 347.864Z",
            "M285.646 380.844L180.316 385.213L180.317 354.175L285.647 348.35L593.976 367.252L593.974 394.411L285.646 380.844Z",
            "M285.644 414.308L180.314 415.766L180.315 385.699L285.645 381.329L593.974 394.896L593.973 421.083L285.644 414.308Z",
            "M285.643 448.255L180.313 449.714L180.314 416.25L285.644 415.276L593.973 422.052L593.972 450.181L285.643 448.255Z",
            "M285.641 480.263L180.312 480.268L180.313 450.199L285.643 449.225L593.972 451.152L593.971 477.825L285.641 480.263Z",
            "M285.64 512.272L180.31 512.762L180.311 481.238L285.641 481.235L593.971 478.311L593.969 507.894L285.64 512.272Z",
            "M285.639 546.705L180.309 546.225L180.31 513.731L285.64 513.242L593.97 508.864L593.968 536.022L285.639 546.705Z",
            "M285.637 581.14L180.307 579.689L180.309 546.711L285.639 547.19L593.968 536.993L593.967 564.636L285.637 581.14Z",
            "M285.636 613.633L180.306 609.271L180.307 580.657L285.637 581.623L593.967 565.606L593.966 592.764L285.636 613.633Z",
            "M285.634 649.52L180.305 643.705L180.306 610.081L285.636 614.117L593.966 593.735L593.965 623.805L285.634 649.52Z",
          ],
          second: [
            "M616 167.727V136L743 160.516V189.359L616 167.727Z",
            "M616 195.61V168.209L743 189.841V216.761L616 195.61Z",
            "M616 223.971V196.09L743 217.241V242.719L616 223.971Z",
            "M616 252.332V224.451L743 242.988V268.677L616 252.332Z",
            "M616 281.175V252.572L743 269.157V295.115L616 281.175Z",
            "M616 310.497V281.654L743 295.595V321.073L616 310.497Z",
            "M616 339.187V310.979L743 321.555V348.474L616 339.187Z",
            "M616 367.704V339.822L743 348.956V374.434L616 367.704Z",
            "M616 396.065V368.184L743 374.914V401.353L616 396.065Z",
            "M616 424.907V396.545L743 401.833V427.311L616 424.907Z",
            "M616 453.751V425.389L743 427.792V454.712L616 453.751Z",
            "M616 482.113V453.975L743 455.193V481.632L616 482.113Z",
            "M616 510.956V482.836L743 482.113V507.11L616 510.956Z",
            "M616 539.163V511.436L743 507.59V533.798L616 539.163Z",
            "M616 567.679V539.798L743 534.51V560.468L616 567.679Z",
            "M616 596.522V568.16L743 560.949V586.584L616 596.522Z",
            "M616 622V597.003L743 586.908V611.905L616 622Z",
          ],
        },
        desktop: {
          first: [
            "M689.5 118L577.889 133.5L577.889 100.501L689.5 81.4995L1012.8 140.5L1012.8 174.003L689.5 118Z",
            "M689.5 152.5L577.889 166.5L577.889 134L689.5 118.5L1012.8 175.5L1012.8 204.5L689.5 152.5Z",
            "M689.5 186.5L577.889 200.001L577.889 167.501L689.5 153.5L1011 206L1011 233.5L689.5 186.5Z",
            "M689.5 223.5L579 234L578.5 201L689.5 188L1011 235L1011 265L689.5 223.5Z",
            "M689.5 257.5L579 266.5L579 235L689.5 224.5L1010.5 266.5L1010.5 293.5L689.5 257.5Z",
            "M689 293L578.5 304.5L579 267.5L689.5 258.499L1010.5 294.5L1011 324.5L689 293Z",
            "M689 330L579 336.5L578.5 305.001L689 293.502L1011 325.001L1011 353.5L689 330Z",
            "M689 364.501L579 370L579 337.001L689 330.5L1011 354.001L1011 383.501L689 364.501Z",
            "M689 398.501L579 403L579 371.001L689 365L1011 384.501L1011 412.501L689 398.501Z",
            "M689 433.001L579 434.5L579 403.501L689 399L1011 413.001L1011 440L689 433.001Z",
            "M689 468.001L579 469.5L579 435L689 434L1011 441L1011 470L689 468.001Z",
            "M689 501L579 501L579 470L689 469L1011 471L1011 498.5L689 501Z",
            "M689 534L579 534.5L579 502L689 502.001L1011 499L1011 529.5L689 534Z",
            "M689 569.5L579 569L579 535.5L689 535.001L1011 530.5L1011 558.5L689 569.5Z",
            "M689 605.001L579 603.501L579 569.501L689 570L1011 559.5L1011 588L689 605.001Z",
            "M689 638.501L579 634L579 604.5L689 605.5L1011 589L1011 617L689 638.501Z",
            "M689 675.5L579 669.5L579 634.834L689 639L1011 618L1011 649.001L689 675.5Z",
          ],
          second: [
            "M1032 176.5V143.5L1166.5 169V199L1032 176.5Z",
            "M1032 205.5V177L1166.5 199.5V227.5L1032 205.5Z",
            "M1032 235V206L1166.5 228V254.5L1032 235Z",
            "M1032 264.5V235.5L1166.5 254.78V281.5L1032 264.5Z",
            "M1032 294.5V264.75L1166.5 282V309L1032 294.5Z",
            "M1032 325V295L1166.5 309.5V336L1032 325Z",
            "M1032 354.84V325.5L1166.5 336.501V364.5L1032 354.84Z",
            "M1032 384.5V355.5L1166.5 365V391.5L1032 384.5Z",
            "M1032 414V385L1166.5 392V419.5L1032 414Z",
            "M1032 444V414.5L1166.5 420V446.5L1032 444Z",
            "M1032 474V444.5L1166.5 447V475L1032 474Z",
            "M1032 503.5V474.232L1166.5 475.5V503L1032 503.5Z",
            "M1032 533.5V504.252L1166.5 503.5V529.5L1032 533.5Z",
            "M1032 562.84V534L1166.5 530V557.259L1032 562.84Z",
            "M1032 592.5V563.5L1166.5 558V585L1032 592.5Z",
            "M1032 622.5V593L1166.5 585.5V612.163L1032 622.5Z",
            "M1032 649V623L1166.5 612.5V638.5L1032 649Z",
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
  padding: 24px;
  border-radius: 18px;
  background: rgba(8, 25, 36, 0.7);
  backdrop-filter: blur(7px);
  color: #ffffff;
  font-size: 14px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
}

@screen lg {
  .storey-popup {
    right: auto;
    left: 25px;
  }
}

@screen 2xl {
  .storey-popup {
    left: 100px;
  }
}
</style>
