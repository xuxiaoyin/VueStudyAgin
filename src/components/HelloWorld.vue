<template>
  <div class="hello">
    <p :title="title"></p>
    
    <!-- 用户输入 -->
    <div>
      <input type="text" v-model="text">
      <button @click="addGood">添加商品</button>
    </div>

    <!-- 循环 -->
    <ul>
      <li v-for="good in goods" :key="good.id">
        <span>{{good.text}}</span>
        <span>￥{{good.price}}</span>
        <button @click="addCart(good)">加购物车</button>
      </li>
    </ul>

    <cart ref="cart" @addCart="onAddCart"></cart>
  </div>
</template>

<script>
import Cart from './Cart'
export default {
  components: { Cart },
  data() {
    return {
      title: '重新学习',
      goods: [
        {id: 0, text: 'Javascript', price: 1000},
        {id: 1, text: 'Html', price: 2000},
        {id: 2, text: 'Css', price: 3000},
        {id: 3, text: 'Vue', price: 4000},
      ],
      text: '',
    }
  },
  methods: {
    addGood() {
      if (this.text) {
        this.goods.push({
          id: this.goods.length + 1,
          text: this.text,
          price: 6999
        })
        this.text = ''
      }
    },
    // 添加购物车
    addCart(good) {
      // this.$refs.cart.addCart(good)
      this.$bus.$emit('addCart', good)
    },
    onAddCart() {
      console.log("成功了")
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
