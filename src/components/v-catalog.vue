<template>
  <div class="v-catalog">
    <router-link
        :to="{name:'cart', params: {cart_data:CART}}">
      <div class="v-catalog__link_to_cart">cart: {{CART.length}}</div>
    </router-link>

    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <v-catalog-item

        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @eddToCartChild="eddToCartParent"
      />
    </div>


  </div>
</template>




// line6 == v-for="product in this.$store.state.products"




<script>
import vCatalogItem from "./v-catalog-item";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  props: {},
  data() {
    return {
    };
  },
  computed: {
      ...mapGetters([
          'PRODUCTS',
          'CART'
      ])
  },
  methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
    eddToCartParent(data) {
      console.log(data);
      this.ADD_TO_CART(data);
    }
  },
  mounted(){
      this.GET_PRODUCTS_FROM_API()
      .then((res)=>{
          if(res.data)
          console.log(res.data)
      })
  }
};
</script>

<style lang="scss" >
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link_to_cart{
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding*2;
    border: solid 1px #aeaeae
  }
}
</style>