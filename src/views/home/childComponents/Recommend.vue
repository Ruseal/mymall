<template>
  <div class="recommend">
    <div v-for="(item, index) in recommendList" :key="index">
      <a :href="item.v">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
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
    recommendList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.recommend {
  display: flex;
  width: 100vw;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 30px;
  border-bottom: 8px solid #eee;
  justify-content: space-evenly;
}
.recommend img {
  width: 65px;
  height: 65px;
  margin-bottom: 3px;
}
</style>