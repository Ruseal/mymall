<template>
  <div id="app">
<<<<<<< HEAD
    <router-view />
    <tab-bar-main />
  </div>
</template>

<script>
import TabBarMain from "./components/content/home/TabBarMain.vue";
export default {
  name: "app",
  components: { TabBarMain },
  data() {
    return {
      
    };
  },
};
</script>
<style>
@import "assets/css/base.css";
</style>
=======
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
  import MainTabBar from "./components/content/mainTabBar/MainTabBar";
  export default {
    name: 'App',
    data () {
      return {
      }
    },
    components: {
      MainTabBar,
    }
  }
</script>
<style>
  @import "assets/css/base.css";
</style>
>>>>>>> 05c2bac (update commit)
