<template>
<div id="main-tab-bar">
  <keep-alive exclude="Detail,category"><router-view></router-view></keep-alive>
  <tab-bar v-show="flag">
    <tab-bar-item path="/home">
      <img slot="img" src="~assets/img/home/home.svg" alt="">
      <img slot="img_active" src="~assets/img/home/home_active.svg" alt="">
      <div slot="test">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="img" src="~assets/img/category/category.svg" alt="">
      <img slot="img_active" src="~assets/img/category/category_active.svg" alt="">
      <div slot="test">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <img slot="img" src="~assets/img/shopcart/shopcart.svg" alt="">
      <img slot="img_active" src="~assets/img/shopcart/shopcart_active.svg" alt="">
      <div slot="test">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="img" src="~assets/img/profile/profile.svg" alt="">
      <img slot="img_active" src="~assets/img/profile/profile_active.svg" alt="">
      <div slot="test">我的</div>
    </tab-bar-item>
  </tab-bar>
</div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    data () {
      return {
        flag: true
      }
    },
    components: {
      TabBar,
      TabBarItem,
    },
    updated() {
      this.$bus.$on('flag',(flag) => {
        this.flag = flag
      })

    }
  }
</script>

<style scoped>

</style>
