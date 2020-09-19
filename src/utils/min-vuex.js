/**
 *
 */
import Vue from 'vue';

const Store = function Store(options = {}) {
  const { state = {}, mutations = {}, getters = {} } = options;
  // 将 store.state 挂载到Vue实例上
  this._vm = new Vue({
    data: {
      $$state: state,
    },
  });
  this._mutations = mutations;
  this._getters = getters;
};

// 支持 mutation --> this.$store.commit('add')
Store.prototype.commit = function(type, payload) {
  if (this._mutations[type]) {
    this._mutations[type](this.state, payload);
  }
};

// 支持通过 this.$store.state 访问 state
// 实际是访问 Vue 实例下的 data.$$state
Object.defineProperties(Store.prototype, {
  state: {
    get: function() {
      return this._vm._data.$$state;
    },
  },
});

// vuex store 的调用方式：new Vuex.store
export default { Store };
