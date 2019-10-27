<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <form-text></form-text>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FormText from './components/FormText.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    FormText
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
