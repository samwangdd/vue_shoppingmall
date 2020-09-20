<template>
  <div>
    <h2>清单</h2>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >{{product.title}} - {{product.price}} * {{product.quantity}}</li>
    </ul>
    <p v-show="!products.length">请添加产品到购物车</p>
    <div>合计：{{total}}</div>
    <button :disabled="!products.length" @click="checkout(products)">提交</button>
    <p v-show="checkoutStatus">提交 {{checkoutStatus}}</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'cart',
  computed: {
    ...mapState({
      checkoutStatus: (state) => state.cart.checkoutStatus,
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice',
    }),
  },
  methods: {
    checkout(products) {
      this.$store.dispatch('cart/checkout', products);
    },
  },
};
</script>

<style>
</style>