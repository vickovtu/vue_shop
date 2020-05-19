<template>
  <div class="v-cart-item">
    <div class="v-cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="v-cart-item__quantity">
        <p>Стоимость :</p>
        <div class="v-cart-item__quantity_info">
        <span class="v-cart-item__q" @click="decrementItem">-</span>
        <p>{{cart_item_data.quantity}}</p>
        <span class="v-cart-item__q" @click="incrementItem">+</span>
        </div>
    </div>
    <button class="btn" @click="deleteFromCart">Delete</button>
  </div>
</template>




<script>


export default {
  name: "v-cart-item",
  components: {},
  props: {
    cart_item_data: {
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
      deleteFromCart(){
          this.$emit('deleteFromCart')
      },
      decrementItem(){
        this.$emit('decrementItem')
      },
      incrementItem(){
        this.$emit('incrementItem')
      }

      },

  watch: {},

  mounted() {
      this.$set(this.cart_item_data, 'quantity', 1)
  }
};
</script>





<style lang="scss" scoped>
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0;
  padding: $padding * 2;
  margin-bottom: $padding * 2;
  &__quantity_info {
    display: flex;
  }
  &__q {
    display:inline-block;
    text-align: center;
    padding: $padding;
    margin-top: $margin;
    cursor: pointer;
  }
}
</style>