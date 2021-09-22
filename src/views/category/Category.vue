<template>
<<<<<<< HEAD
 <div class='category'>分类</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      
    };
  },
}
</script>
<style lang='stylus' ref='stylesheet/stylus' scoped>
</style>
=======
  <div id="category">
        <nav-bar class="nav-bar-category"><div slot="center">分类</div></nav-bar>
        <lunbo-tu/>
  </div>

</template>

<script>
  import BSscroll from 'better-scroll'
  import NavBar from "components/common/navbar/NavBar";
  import LunboTu from "./childComps/LunboTu";
  export default {
    name: "Category",
    components: {
      NavBar,
      LunboTu,
    },
    data () {
      return {
        scroll: null,
      }
    },

  }
</script>

<style scoped>
  #category{
    height: 100vh;
    position: relative;
  }
  .nav-bar-category{
    background-color: var(--color-tint);
    color: white;
  }
</style>
>>>>>>> 05c2bac (update commit)
