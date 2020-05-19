<template>
  <div>
    <p>basket</p>
    <div class="basket">
      <p v-if="!cart_data.length">There are no products in cart ...</p>
      <router-link :to="{name:'catalog'}">
        <div class="v-catalog__link_to_cart">to catalog</div>
      </router-link>
      <v-cart-item
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @decrementItem="decrementItem(index)"
        @incrementItem="incrementItem(index)"
      />
    </div>
    <div class="v-cart__total">
      <p class="v-cart__total_name">Total: {{total_price}} $</p>
    </div>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item";
import { mapActions } from "vuex";

export default {
  name: "v-cart",
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM"
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    decrementItem(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    incrementItem(index) {
      this.INCREMENT_CART_ITEM(index);
    }
  },
  computed: {
    total_price() {
      let total = 0;
      for (let item of this.cart_data) {
        total += item.price * item.quantity;
      }
      return Math.round(total);
    }
  }
};
</script>

<style lang="scss">
.basket{
    margin-bottom: 120px;
}
.v-cart {
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding * 2 $padding * 3;
    display: flex;
    justify-content: center;
    background: #26ae68;
    color: #ffffff;
    &_name {
      margin-right: $margin * 2;
      font-size: 25px;
    }
  }
}
</style>