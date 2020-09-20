<template>
  <div>
    <h2>产品列表</h2>
    <ul>
      <li v-for="item in products" :key="item.id">
        {{item.title}} - {{item.price}}
        <br />
        <button :disabled="!item.inventory" @click="addProductToCart(item)">加入购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ProductList',
  computed: mapState({
    products: (state) => state.products.all,
  }),
  methods: mapActions('cart', ['addProductToCart']),
  // methods: {
  //   addProductToCart(product) {
  //     this.$store.dispatch('cart/addProductToCart', product);
  //   },
  // },
  created() {
    this.$store.dispatch('products/getAllProducts');
  },
};
</script>

<style>
</style>