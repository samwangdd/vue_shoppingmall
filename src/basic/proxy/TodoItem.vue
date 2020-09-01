<template>
  <ul>
    <!-- <li v-for="item in list" :key="item.title">
      {{item.title}}
      <button @click.stop="handleClick" v-show="item.del">删除</button>
    </li> -->
    <slot name="suf" :list="list" />
  </ul>
</template>

<script>
/**
 * 插槽
 */
export default {
  name: "TodoItems",
  props: {
    index: Number,
    title: String,
  },
  data: () => ({
    list: [
      { title: "课程1", del: true },
      { title: "课程2", del: false },
    ],
    value: Math.random(),
  }),
  methods: {
    handleClick() {
      // console.log("this :>> ", this.title);
    },
  },
  compoted: {
    reverseTitle: function () {
      return this.title;
    },
  },
};
</script>

<style scope>
</style>