<template>
  <div class="v-catalog-item">
    <!-- <img
      class="v-catalog-item__image"
      :src=" require('../assets/image/' + product_data.image)"
      alt="img"
    /> -->
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">{{product_data.price}} $</p>
    <button
        class="v-catalog-item__add_to_cart_btn btn"
        @click="eddToCartChild"
    >add to cart</button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    eddToCartChild() {
      this.$emit("eddToCartChild", this.product_data);
    }
  }
};
</script>

<style lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0;
  padding: $padding * 2;
  margin-bottom: $padding * 2;
  &__name {
  }
  &__image {
    width: 200px;
  }
}
</style>