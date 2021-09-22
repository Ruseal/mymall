<template>
  <div class="tab-bar-item" @click="itemClick">
<<<<<<< HEAD
    <div v-if="!isActive" class="item-img"><slot name="item-icon"></slot></div>
    <div v-else class="item-img"><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
=======
    <div v-if="!isActive()"><slot name="img"></slot></div>
    <div v-else><slot name="img_active"></slot></div>
    <div :style="isStyle()"><slot name="test"></slot></div>
>>>>>>> 05c2bac (update commit)
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  props: {
    to: {
      type: String,
    },
    activeColor: {
      type: String,
      default() {
        return "deepPink";
      },
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.to) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      if (this.to !== this.$route.path) {
        this.$router.replace(this.to);
      }
    },
  },
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  font-size: 13px;
}
.item-img {
  margin-top: 5px;
  margin-bottom: 3px;
}

</style>
=======
  export default {
    name: "TabBarItem",
    data () {
      return {
      }
    },
    components: {},
    props: {
      path: String,
      changeColor: {
        type: String,
        default: 'red',
      }
    },
    methods: {
      itemClick () {
        console.log(this.path);
        this.$router.replace(this.path)
        // console.log('true');
      },
      isActive () {
        return this.$route.path.indexOf(this.path) !== -1
      },
      isStyle () {
        return this.isActive()? {color: this.changeColor}:{}
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
>>>>>>> 05c2bac (update commit)
