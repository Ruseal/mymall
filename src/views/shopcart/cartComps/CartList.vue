<template>
  <div class="cart-list">
    <cart-list-item v-for="(cartItem, index) in cartList" :cartItem="cartItem" :key="index"/>
  </div>
</template>

<script>
  import CartListItem from "./CartListItem";
  import {mapGetters} from 'vuex'
  export default {
    name: "CartList",
    components: {
      CartListItem
    },
    computed: {
      ...mapGetters({
        cartList:'cartList'
      })
    }
  }
</script>

<style scoped>
</style>