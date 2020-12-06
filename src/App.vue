<template>
  <div id="app" :class="{active: isActive }">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <InstructionDemo />
    <ProvideInject />
    {{count}}-->
    <!-- {{$store.getters.doubleCount}} -->
    <!-- <button @click="add">add 1</button>
    <button @click="asyncAdd">async add</button>-->
    <Button>click me</Button>
    <ShoppingMall />
  </div>
</template>

<script>
import debounce from 'lodash/debounce';
import ShoppingMall from '@/pages/ShoppingMall';
import { Button } from 'ant-design-vue';
// import InstructionDemo from './basic/instructionDemo/index';
// import ProvideInject from './basic/provideInject';

export default {
  name: 'app',
  components: {
    // InstructionDemo,
    // ProvideInject,
    ShoppingMall,
    Button,
  },
  data: () => ({
    phoneInfo: {
      phone: '',
    },
    zipCode: '',
    firstName: 'sam',
    lastName: 'wang',
    isActive: true,
    activeClass: 'import-info',
    errorClass: 'text-danger',
    color: 'blue',
  }),
  watch: {
    zipCode: function () {
      this.debouncedGetFullName();
    },
  },
  computed: {
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    getFullName: function () {
      // console.log("this.firstName :>> ", this.firstName);
      return `${this.firstName} ${this.lastName}`;
    },
    changeColor: function (color) {
      return (this.color = color);
    },
    getJSXSpan() {
      return <span>message: {this.fullName}</span>;
    },
    add() {
      this.$store.commit('add', 2);
    },
    asyncAdd() {
      this.$store.dispatch('asyncAdd', 6);
    },
  },
  provide() {
    return {
      theme: this,
    };
  },
  created: function () {
    this.debouncedGetFullName = debounce(this.getFullName, 2000);
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
