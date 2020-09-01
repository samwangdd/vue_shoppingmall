<template>
  <div>
    this is SlotTemp
    <slot name="suf" :user="user"></slot>
  </div>
</template>

<script>
/**
 * 使用插槽
 */
export default {
  data: () => ({
    user: {
      name: "sam",
    },
  }),
};
</script>

<style>
</style>