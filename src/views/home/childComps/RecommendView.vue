<template>
  <div class="recommend">
   <div class="recommend-item" v-for="item in recommends" :key="item.index">
     <a :href="item.link">
       <img :src="item.image" alt="">
       <div>{{item.title}}</div>
     </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    components: {},
    props: {
      recommends: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    width: 100%;
    display: flex;
    font-size: 12px;
    margin-top: 5px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex: 1;
    text-align: center;
    /*background-color: #888888;*/
  }
  .recommend-item img{
    width: 90%;
    margin: 5px 0 10px;
    /*background-color: #42b983;*/

  }
</style>