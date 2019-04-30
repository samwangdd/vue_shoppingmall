<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg='<span style="color: red">hhh</span>'/>
    <event />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './components/n.js';
import event from './components/event';
export default {
  name: 'app',
  components: {
    HelloWorld,
    event
  }
}
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
