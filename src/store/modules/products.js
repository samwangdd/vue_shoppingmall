import shop from '@/services/shop';
// import { getProducts } from '@/services/shop';
import { PRODUCTS } from '@/store/mutation-types';

const state = {
  all: [], // 所有商品列表
};

// computed value
const getters = {};

// sync handle
const mutations = {
  // 所有商品列表
  [PRODUCTS.SET_PRODUCTS](state, products) {
    state.all = products;
  },
  // 商品数量减1
  [PRODUCTS.DECREMENT_PRODUCT_INVENTORY](state, { id }) {
    console.log('state :>> ', state);
    const product = state.all.find(i => i.id === id);
    product.inventory--;
  },
};

// async handle
const actions = {
  async getAllProducts({ commit }) {
    // const res = getProducts();
    const res = await shop.getProducts();
    if (!res.error) {
      commit(PRODUCTS.SET_PRODUCTS, res);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
