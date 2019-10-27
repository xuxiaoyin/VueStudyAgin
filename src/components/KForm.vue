<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    provide() { 
      return {
        form: this
      }
    },
    props: {
      model: {type: Object, required: true},
      rules: {type: Object}
    },
    methods: {
      async validate(cb) {
        const tasks = this.$children.filter(item => item.prop).map(item => {
          item.validate()
        })
        const results = await Promise.all(tasks)
        if (results.some(item => !item)) {
          cb(false)
        } else {
          cb(true)
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>