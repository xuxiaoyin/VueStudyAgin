<template>
  <div>
    <h3>商品详情</h3>
    <p>{{id}}</p>
  </div>
</template>

<script>
  export default {
    // props: ['id'],
    props: {
      id: {
        type: Number,
        default: -1
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>