<template>
  <div id="main-tab-top">
      <div class="tab-top-item" slot="item-left"></div>
      <div class="tab-top-item" slot="item-center"></div>
      <div class="tab-top-item" slot="item-rigth"></div>
  </div>
</template>

<script>
  // import TabTop from "./TabTop";
  export default {
    name: "Home",
    components: {
      // TabTop,
    }
  }
</script>

<style scoped>
  #main-tab-top{
    background-color: red;
  }
  .tab-top-item{
    flex: 1;
    text-align: center;
  }
</style>
