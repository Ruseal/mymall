<template>
<<<<<<< HEAD
  <div class="tab-bar">
=======
  <div id="tabbar">
>>>>>>> 05c2bac (update commit)
    <slot></slot>
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
.tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
  box-shadow: 0px -1px 1px rgba(110, 107, 107, 0.2);
  background-color: #f6f6f6;
}
</style>
=======
  export default {
    name: "TabBar",
    data () {
      return {

      }

    },
    components: {}
  }
</script>

<style scoped>
  #tabbar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  }
</style>
>>>>>>> 05c2bac (update commit)
