<template>
  <div class="">
    <tab-bar>
      <tab-bar-item
        v-for="(item, index) in tabBarData"
        :key="index"
        :to="item.path"
      >
        <img slot="item-icon" :src="item.image" alt="" />
        <img slot="item-icon-active" :src="item.imageActive" alt="" />
        <div slot="item-text">{{ item.name }}</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar.vue";
import TabBarItem from "../../common/tabbar/TabBarItem.vue";
export default {
  name: "",
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {
      tabBarData: [
        {
          name: "首页",
          path: "/home",
          image: require("assets/img/tabbar/home.svg"),
          imageActive: require("assets/img/tabbar/home_active.svg"),
        },
        {
          name: "分类",
          path: "/category",
          image: require("assets/img/tabbar/category.svg"),
          imageActive: require("assets/img/tabbar/category_active.svg"),
        },
        {
          name: "购物车",
          path: "/cart",
          image: require("assets/img/tabbar/shopcart.svg"),
          imageActive: require("assets/img/tabbar/shopcart_active.svg"),
        },
        {
          name: "我的",
          path: "/profile",
          image: require("assets/img/tabbar/profile.svg"),
          imageActive: require("assets/img/tabbar/profile_active.svg"),
        },
      ],
    };
  },
};
</script>
<style scoped>
img {
  width: 20px;
  height: 20px;
}
</style>