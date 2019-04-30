<template lang="html">
  <div>
    <button v-on:click="msg">test</button>
  </div>
</template>
<script>
export default {
  methods: {
    msg: function() {
      console.log('111 :', 111);
    }
  },
}
</script>

<style lang="css">
  
</style>