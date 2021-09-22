<template>
<<<<<<< HEAD
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swipe :banner-list="bannerList" />
    <recommend :recommend-list="recommendList"/>
    <feature/>
=======
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
    <tab-control  :class="{flexed: tabControlIsFlex}" :title="['流行', '新款', '精选']"
                 @tabclick="tabClick" ref="tabcontrol1" v-show="tabControlIsFlex">
    </tab-control>
    <Scroll class="content"
            ref="scroll"
            :probeType="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @up="loadMore">
      
      <!-- <home-swiper ref="hSwiper" :banners="banners" ></home-swiper> -->
      <!-- <swiper class="swiperaaa" :imageList="list"></swiper> -->
      <mobile-swiper class="swiperaaa"></mobile-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :title="['流行', '新款', '精选']" @tabclick="tabClick" ref="tabcontrol2"></tab-control>
      <goods-list :goods="goods[currentTypeArr[currentTypeIndex]].list"></goods-list>
    </Scroll>
    <back-top @click.native="backtopClick" v-show="isShow"/>
>>>>>>> 05c2bac (update commit)
  </div>
</template>

<script>
<<<<<<< HEAD
import NavBar from "../../components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "../../api/home.net";
import HomeSwipe from "./childComponents/HomeSwipe.vue";
import Recommend from "./childComponents/Recommend.vue";
import Feature from './childComponents/Feature.vue';
export default {
  name: "home",
  components: {
    NavBar,
    HomeSwipe,
    Recommend,
    Feature,
  },
  data() {
    return {
      bannerList: [],
      recommendList: [],
    };
  },
  created() {
    this.methodtHomeMultidata();
  },
  methods: {
    async methodtHomeMultidata() {
      const res = await getHomeMultidata();
      this.bannerList = res.data.banner.list;
      this.recommendList = res.data.recommend.list;
      console.log(this.bannerList);
      console.log(this.recommendList);
    },
  },
};
</script>
<style scoped>
.home-nav {
  background-color: var(--color-high-text);
}
</style>
=======

  // import HomeSwiper from './childComps/HomeSwiper';
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backtop/BackTop";
  // import Swiper from "../../common/Swiper.vue" 
  import {getHomeMultidata, getHomeGoods} from "network/homeNet";
  import {debounce} from "common/utils/utilsRefrsh";
  import {backtopMixin} from "common/utils/mixin";
  import {aaa} from "../../../../01-webpack的使用/01-webpack的起步/src/js/info";
import MobileSwiper from '../../components/common/scroll/MobileSwiper.vue';

  export default {
    name: "Home",
    components: {
      // HomeSwiper,
      RecommendView,
      FeatureView,
      // Swiper,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
        MobileSwiper,
    },
    mixins:[backtopMixin],
    data () {
      return {
        list:[],

        banners:[],
        recommends:[],
        goods: {
          pop: {page:0,list:[]},
          new: {page:0,list:[]},
          sell:{page:0,list:[]}
        },
        currentTypeArr:['pop','new','sell'],
        currentTypeIndex: 0,
        // isShow: false,
        timer: 0,
        isAppalyGetGoods: true,
        tabcontrolTop: 0,
        tabControlIsFlex: false,
        saveY: 0,
        itemImgListenner: null,
      }
    },
    created() {
      this.getHomeMultidata()
      this.getGoods('pop')
      this.getGoods('new')
      this.getGoods('sell')
    },
    mounted ()  {
      this.list = [
          require('../../../public/image/a.jpg'),
          require('../../../public/image/b.jpg'),
          require('../../../public/image/c.jpg'),
          require('../../../public/image/d.jpg'),
          require('../../../public/image/e.jpg')
        ]

      let refrsh =debounce(this.$refs.scroll && this.$refs.scroll.refresh,500)

      this.itemImgListenner = () => {
        refrsh()
      }
      this.$bus.$on('itemImgLoad',this.itemImgListenner)
    },
    updated() {
      this.tabcontrolTop = this.$refs.tabcontrol2.$el.offsetTop
    },
    activated () {
      this.$bus.$on('itemImgLoad', this.itemImgListenner)
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.saveY)
    },
    deactivated () {
      this.saveY = this.$refs.scroll.positionY
      this.$bus.$off('itemImgLoad', this.itemImgListenner)
    },
    methods: {
      loadMore () {
        this.$refs.scroll.scroll.finishPullUp()
        if(this.isAppalyGetGoods){
          this.isAppalyGetGoods = false
          this.getGoods(this.currentTypeArr[this.currentTypeIndex])
          setTimeout(() => {
            this.isAppalyGetGoods = true
          },1500)
        }
      },
      contentScroll (scroll) {
        this.isShow = scroll.y <= -1000
        this.tabControlIsFlex = this.tabcontrolTop < (-scroll.y)
      },
      backtopClick () {
        this.$refs.scroll.scrollTo(0,0,600)
      },
      tabClick (index) {
        this.currentTypeIndex=index
        this.$refs.tabcontrol1.currentIndex = index
        this.$refs.tabcontrol2.currentIndex = index
      },
      getHomeMultidata() {
        getHomeMultidata().then( res => {
          // console.log(res);
          this.banners = (res.data.banner.list);
          console.log(this.banners);
          this.recommends = (res.data.recommend.list);
        }).catch( err => console.log('获取服务器数据失败'))
      },
      getGoods(type) {
        const page = this.goods[type].page+1
        getHomeGoods(type,page).then( res => {
          let list = res.data.list
          this.goods[type].list.push(...list)
          this.goods[type].page+=1
          // this.$refs.scroll.finishPullUp()
          // console.log(this.goods.pop.list);
          // console.log(res);
        }).catch( err => console.log('goods获取服务器数据失败'))
      }
    }
  }
</script>

<style scoped>
  .swiperaaa{
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    width: 100vw;
    height: 200px;
  }
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    margin-top: -44px;
    /*position: fixed;*/
    /*top: 0px;*/
    /*left: 0px;*/
    /*right: 0px;*/
    color: white;
    /*z-index: 10;*/
  }
  .content{
    position: absolute;
    /*height: 300px;*/
    top: 44px;
    bottom: 49px;
    /*background-color: #42b983;*/
    overflow: hidden;
  }
  .flexed {
    position: relative;
    /*display: inline-block;*/
    left: 0;
    right: 0;
    top: 0;
    /*display: block;*/
  }

</style>
>>>>>>> 05c2bac (update commit)
