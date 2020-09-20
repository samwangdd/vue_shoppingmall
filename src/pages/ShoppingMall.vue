<template>
  <div>
    <h1>购物车示例</h1>
    <p>账号：{{email}}</p>
    <hr />
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductList from '../components/ProductList';
import ShoppingCart from '../components/ShoppingCart';

export default {
  components: {
    ProductList,
    ShoppingCart,
  },
  computed: mapState({
    email: (state) => state.userInfo.email,
  }),
};
</script>

<style>
</style>