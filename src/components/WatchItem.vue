<template>
  <div>
    <p>this the message: {{b}}</p>
    <p>this the message: {{e}}</p>
    <p>this the message: {{h}}</p>
    <button @click="() => (a+=1)">a+1</button>
  </div>
</template>

<script>
export default {
  name: "WatchItem",
  data: () => ({
    a: 1,
    b: { c: 2, d: 3 },
    e: {
      f: {
        g: 4,
      },
    },
    h: [],
  }),
  watch: {
    // a: function (val, oldVal) {
    //   this.b.c += 1;
    //   console.log("new: %s, old: %s >> ", val, oldVal);
    // },
    // "b.c": function (val, oldVal) {
    //   this.e.f.g += 1;
    //   console.log("new: %s, old: %s >> ", val, oldVal);
    // },
    e: {
      handler: function () {
        this.h.push("😄");
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>