<template>
  <div class="nav-bar">
<<<<<<< HEAD
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
=======
    <div class="nav-top-left"><slot name="left"></slot></div>
    <div class="nav-top-center"><slot name="center"></slot></div>
    <div class="nav-top-rigth"><slot name="rigth"></slot></div>
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
};
</script>
<style scoped>
.nav-bar {
  display: flex;
  height: 44px; /* 64px */
  line-height: 44px;
  text-align: center;
  color: var(--color-background);
  box-shadow: 0px 2px 1px rgba(110, 107, 107, 0.2);
}
.left,
.right {
  flex: 0.3;
}
.center {
  flex: 1;
}
</style>
=======
  export default {
    name: "NavBar",
    components: {}
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }
  .nav-top-left, .nav-top-rigth{
    width: 60px;
    /*background-color: red;*/
  }
  .nav-top-center{
    flex: 1;
    /*background-color: #42b983;*/
  }
</style>
>>>>>>> 05c2bac (update commit)
