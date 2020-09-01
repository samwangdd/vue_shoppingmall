<template>
  <div class="hello">
    <h1>message: {{ msg }}</h1>
    <div v-html="msg1" v-bind:id="id">
      {{msg1}}
    </div>
    <div>
      {{num + 1}}
    </div>
    <p v-if="seen">你看到我了</p>
    <p v-else>看不到了</p>
    <p v-n="3" />
    <div :class="[s1, s2]">
      我借给你{{money}}块，你还给我了{{a}}，还剩{{b}}块
    </div>
    <ul>
      <li v-for="(item, index) in list" :key="item">
        {{item}}, {{index}}
      </li>
    </ul>
    <ul>
      <template v-for="(item, index) in list">
        <li :key="item">
          hello
        </li>
        <li :key="index">
          {{item}}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return{
      msg1: '<span style="color: red">hhh</span>',
      id: 'text',
      num: 2,
      seen: false,
      money: 100,
      a: 1,
      s1: 'test-1',
      s2: 'test-2',
      a1: true,
      list: ['a', 'b', 'c', 'd']
    }
  },
  computed: {
    // 不支持箭头函数
    b: function() {
      return this.money - this.a
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
