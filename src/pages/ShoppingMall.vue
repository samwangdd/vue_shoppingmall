<template>
  <div>
    <h1>购物车示例</h1>
    <p>账号：{{ email }}</p>
    <hr />
    <ProductList />
    <hr />
    <ShoppingCart />
    <hr />
    <div class="wrapper">
      <Like />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductList from '../components/ProductList';
import Like from '@/components/Like';
import ShoppingCart from '../components/ShoppingCart';

export default {
  components: {
    ProductList,
    ShoppingCart,
    Like,
  },
  computed: mapState({
    email: (state) => state.userInfo.email,
  }),
};
</script>

<style scoped lang="scss">
.wrapper {
  height: 90px;
}
</style>