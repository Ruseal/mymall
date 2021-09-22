<template>
  <div class="swipe">
    <van-swipe :autoplay="3000">
      <van-swipe-item
        class="swipe-item"
        v-for="(image, index) in bannerList"
        :key="index"
      >
        <img v-lazy="image.image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  props: {
    bannerList: {
      type: Array,
      default() {
        return [
          "https://img.yzcdn.cn/vant/apple-1.jpg",
          "https://img.yzcdn.cn/vant/apple-2.jpg",
        ];
      },
    },
  },
};
</script>
<style scoped>
.swipe-item {
  width: 100vw;
  height: 170px;
}
.swipe-item img {
  width: 100%;
  height: 100%;
}
</style>