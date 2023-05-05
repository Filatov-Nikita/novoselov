<template>
  <div class="storey-popup">
    <div>
      <p class="tw-text-xl tw-text-secondary">
        {{ storey.entrance }}
      </p>
      <p>секция</p>
    </div>
    <div>
      <p class="tw-text-xl tw-text-secondary">
        {{ storey.number }}
      </p>
      <p>этаж</p>
    </div>
    <div>
      <p class="tw-text-xl tw-text-secondary">
        {{ storey.flats_counters.free }}
      </p>
      <p>
        квартир <br />
        свободно
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      storey: {
        required: true,
        type: Object
      }
    }
  }
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
  position: fixed;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
}

@screen lg {
  .storey-popup {
    left: 25px;
  }
}
</style>
