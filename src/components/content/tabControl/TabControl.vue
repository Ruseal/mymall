<template>
  <div class="tab-control">
    <div v-for="(item, index) in title" class="tab-control-item" :key="item.index"
         :class="{active: index === currentIndex}" @click="btnActive(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    components: {
      // TabControlItem,
    },
    data () {
      return {
        currentIndex:0
      }
    },
    props: {
      title: {
        type:Array,
        default:{
          return: []
        }
      }
    },
    methods: {
      btnActive (index) {
        this.currentIndex = index
        this.$emit('tabclick',index)
      }
    }

  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    height: 40px;
    background-color: #fff;
    z-index: 9;
  }
  .tab-control-item{
    flex: 1;

  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
    color: var(--color-high-text);
    padding: 4px;
  }
</style>