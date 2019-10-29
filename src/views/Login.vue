<template>
  <div>
    <h2>登录</h2>
    <button @click="onLogin">登录</button>
  </div>
</template>

<script>
  export default {
    methods: {
      onLogin() {
        // window.isLogin = true
        // this.$store.commit('login', true)
        this.$store.dispatch('requestLogin').then(res => {
          console.log(res)
          const redirect = this.$route.query.redirect || '/'
          this.$router.push(redirect)
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>