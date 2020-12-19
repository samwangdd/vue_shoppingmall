import shop from '@/services/shop';
import { CART, PRODUCTS } from '../mutation-types';

const state = {
  items: [], // 购物车中的商品 --> [{id, quantity}...]
  checkoutStatus: null,
};

// computed value
const getters = {
  // 计算值，添加到购物车中的商品
  cartProducts: (state, _, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(i => i.id === id);
      return {
        title: product.title,
        price: product.price,
        quantity,
        id,
      };
    });
  },

  // 商品总价
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  },
};

// sync handle
const mutations = {
  // 提交状态：成功/失败
  [CART.SET_CHECKOUT_STATUS](state, status) {
    state.checkoutStatus = status;
  },
  // 购物车商品数量 加1
  [CART.INCREMENT_ITEM_QUANTITY](state, { id }) {
    const cartItem = state.items.find(i => i.id === id);
    cartItem.quantity++;
  },
  // 批量设置购物车商品
  [CART.SET_CART_ITEMS](state, { items }) {
    state.items = items;
  },
  // 增加购物车中的商品
  [CART.PUSH_PRODUCT_TO_CART](state, { id }) {
    state.items.push({ id, quantity: 1 });
  },
};

// async handle
const actions = {
  // 添加商品到购物车
  addProductToCart({ state, commit }, product) {
    commit(CART.SET_CHECKOUT_STATUS, null);
    // 如果还有剩余商品
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id);
      // 如果购物车中不存在该商品，新增一项；否则让商品数量加1
      if (!cartItem) {
        commit(CART.PUSH_PRODUCT_TO_CART, {
          id: product.id,
        });
      } else {
        commit(CART.INCREMENT_ITEM_QUANTITY, cartItem);
      }
      commit(
        `products/${PRODUCTS.DECREMENT_PRODUCT_INVENTORY}`,
        {
          id: product.id,
        },
        {
          root: true,
        }
      );
    }
  },
  // 提交（购物车订单）
  async checkout({ commit }, products) {
    // const savedCartItems = [...state.items];
    commit(CART.SET_CHECKOUT_STATUS, null);
    const res = await shop.submitOrder(products);
    if (res.error) {
      commit(CART.SET_CHECKOUT_STATUS, 'failed');
    } else {
      commit(CART.SET_CHECKOUT_STATUS, 'success');
      commit(CART.SET_CART_ITEMS, { items: [] });
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
