<template>
<<<<<<< HEAD
 <div class='profile'>
   我的
 </div>
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
  <div id="profile">
    <nav-bar class="nav-bar-profile">
      <div slot="center">我的</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "Profile",
    components: {
     NavBar
    }
  }
</script>

<style scoped>

</style>
>>>>>>> 05c2bac (update commit)
