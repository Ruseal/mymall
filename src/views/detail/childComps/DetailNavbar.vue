<template>
  <div class="detail-navbar">
    <nav-bar>
      <div slot="left" class="navbar-left" @click="backHome"><img src="~assets/img/detail/back.svg" alt=""></div>
      <div class="detail-navbar-center" slot="center">
        <div @click="clickCenterItem(index)" :class="{active: centerTextCurrentIndex === index}"
             class="center-item" v-for="(text, index) in navbarTextArr" :key="text.index">
          {{text}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "DetailNavbar",
    components: {
      NavBar
    },
    data () {
      return {
        centerTextCurrentIndex: 0,
        flagnavbar: true
      }
    },
    props: {
      navbarTextArr: {
        type:Array,
        default() {
          return ['商品', '参数', '评论' , '推举'];
        }
      },
      detailNavcurrentIndex: {
        type: Number,
        default() {
          return 0
        }
      }
    },
    watch: {
      detailNavcurrentIndex(newValue) {
        this.centerTextCurrentIndex=newValue
        // this.centerTextCurrentIndex=newValue
      }

      // this.centerTextCurrentIndex= this.detailNavcurrentIndex

    },
    methods: {
      backHome () {
        this.$bus.$emit('flag',this.flagnavbar)
        this.$router.back()

      },
      clickCenterItem (index) {
        this.centerTextCurrentIndex = index
        this.$emit('detailtopnavbar', index)
      }
    }
  }
</script>

<style scoped>
  .detail-navbar-center{
    text-align: center;
    display: flex;
    font-size: 14px;
  }
  .center-item{
    flex: 1;
  }
  .navbar-left{
    margin-top: 7%;
  }
  .active{
    color: red;
  }
</style>