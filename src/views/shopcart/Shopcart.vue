<template>
  <div id="shopcart">
    <nav-bar class="nav-bar-shopcart"><div slot="center">购物车({{length}})</div></nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-botton/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";
  import CartList from "./cartComps/CartList";
 import CartBotton from "./cartComps/CartBotton";

  import {mapGetters}  from 'vuex'

  export default {
    name: "Shopcart",
    components: {
      NavBar,
      Scroll,
      CartList,
     CartBotton,
    },
    computed: {
     ...mapGetters({
       length: 'cartLenth'
     })
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  #shopcart {
    padding-top: 44px;
    height: 100vh;
    width: 100vw;
    position: relative;
  }
  .nav-bar-shopcart{
    background-color: var(--color-tint);
    margin-top: -44px;
    color: white;
  }
  .content{
    height: calc(100% - 49px - 35px);
    overflow: hidden;
    /*background-color: #cccccc;*/
  }
</style>
