<template>
  <div id="app" :class="{active: isActive }">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg='<span style="color: red">hhh</span>'/> -->
    <!-- <event /> -->
    <TodoItem>
      <!-- <span slot="suf">suf-icon</span> -->
      <template #suf="{list}">
        <span :class="[activeClass, errorClass]">suf-icon, {{list}}</span>
      </template>
    </TodoItem>
    <ModelItem v-model="phoneInfo" :zip-code.sync="zipCode" />
    <ModelItem
      :phone-info="phoneInfo"
      @change="val => (phoneInfo=val)"
      :zip-code="zipCode"
      @update:zipCode="val => (zipCode = val)"
    />
    phoneInfo: {{phoneInfo}}
    <br />
    zipCode: {{zipCode}}
    <br />
    {{fullName}}
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import "./components/n.js";
// import event from "./components/event";
import debounce from "lodash/debounce";

import TodoItem from "./components/TodoItem";
import ModelItem from "./components/ModelItem";

export default {
  name: "app",
  components: {
    // HelloWorld,
    // event,
    TodoItem,
    ModelItem,
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
  }),
  watch: {
    zipCode: function () {
      // console.log("next :>> ", next);
      // console.log("pre :>> ", pre);
      this.debouncedGetFullName();
    },
  },
  created: function () {
    this.debouncedGetFullName = debounce(this.getFullName, 2000);
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
  background-color: blueviolet;
}
.import-info {
  color: #ff1;
}
</style>
