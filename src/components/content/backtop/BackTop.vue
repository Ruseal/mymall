<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    components: {}
  }
</script>

<style scoped>
  .backtop img{
    /*display: none;*/
    position: fixed;
    width: 45px;
    right: 10px;
    bottom: 60px;
  }
</style>