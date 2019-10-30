<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <!-- <router-link to="/login" v-if="!$store.state.isLogin">Login</router-link> -->
    <router-link to="/login" v-if="!isLogin">Login</router-link>
    <span v-else>欢迎回来</span>
    <div>{{count}}</div>
    <button @click="onAdd">add</button>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from './KStore'

export default {
  name: 'app',
  computed: {
    count() {
      return store.state.count
    },
    ...mapState(['isLogin'])
  },
  methods: {
    onAdd() {
      store.commit('add')
    }
  },
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
