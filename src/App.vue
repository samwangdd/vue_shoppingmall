<template>
  <div id="app" :class="{active: isActive }">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg='<span style="color: red">hhh</span>'/> -->
    <!-- <event /> -->
    <!-- <TodoItem>
      <span slot="suf">suf-icon</span>
      <template #suf="{list}">
        <span :class="[activeClass, errorClass]">suf-icon, {{list}}</span>
      </template>
    </TodoItem>-->
    <!-- <ModelItem v-model="phoneInfo" :zip-code.sync="zipCode" />
    <ModelItem
      :phone-info="phoneInfo"
      @change="val => (phoneInfo=val)"
      :zip-code="zipCode"
      @update:zipCode="val => (zipCode = val)"
    />-->
    <!-- <WatchItem /> -->
    <!-- <Clock /> -->
    <VNodes :vnodes="getJSXSpan()" />
    <InjectItem></InjectItem>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import "./components/n.js";
// import event from "./components/event";
import debounce from "lodash/debounce";

// import TodoItem from "./components/TodoItem";
// import ModelItem from "./components/ModelItem";
// import WatchItem from "./components/WatchItem";
// import Clock from "./components/Clock";
import InjectItem from "./components/InjectItem";

export default {
  name: "app",
  components: {
    // HelloWorld,
    // event,
    // TodoItem,
    // ModelItem,
    // WatchItem,
    // Clock,
    InjectItem,
    VNodes: {
      functional: true,
      render: (h, ctx) => {
        console.log("h :>> ", h);
        console.log("ctx :>> ", ctx);

        return ctx.props.vnodes;
      },
    },
  },
  data: () => ({
    phoneInfo: {
      phone: "",
    },
    zipCode: "",
    firstName: "sam",
    lastName: "wang",
    isActive: true,
    activeClass: "import-info",
    errorClass: "text-danger",
    color: "blue",
  }),
  watch: {
    zipCode: function () {
      // console.log("next :>> ", next);
      // console.log("pre :>> ", pre);
      this.debouncedGetFullName();
    },
  },
  computed: {
    fullName: function () {
      // console.log("this.firstName :>> ", this.firstName);
      return `${this.firstName} ${this.lastName}`;
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
  },
  provide() {
    return {
      theme: this,
    };
  },
  // VUE 生命周期
  created: function () {
    this.debouncedGetFullName = debounce(this.getFullName, 2000);
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active {
  /* background-color: blueviolet; */
}
.import-info {
  /* color: #ff1; */
}
</style>
