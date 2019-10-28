<template>
  <div>
    <ul>
      <li v-for="good in goods" :key="good.id">
        <router-link :to="`detail/${good.id}`">
          <span>{{good.text}}</span>
          <span>￥{{good.price}}</span>
          <button @click="addCart(good)">加购物车</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [
        { id: 0, text: "Javascript", price: 1000 },
        { id: 1, text: "Html", price: 2000 },
        { id: 2, text: "Css", price: 3000 },
        { id: 3, text: "Vue", price: 4000 }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>