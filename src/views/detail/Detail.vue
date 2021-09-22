<template>
  <div class="detail">
    <detail-navbar class="detail-navbar" @detailtopnavbar="detailtopnavbar" :detailNavcurrentIndex="detailNavcurrentIndex"/>
    <scroll class="content" :probeType="3" ref="detailscroll" @scroll="contentScrollDetail">
      <swiper class="detail-swiper">
        <swiper-item class="detail-swiper-item" v-for="item in detailSwiperImg" :key="item.id"><img :src="item" alt=""></swiper-item>
      </swiper>
      <detail-base-info :detailtitlemessage="detailtitlemessage"/>
      <detail-shop :detail-shop="detailShop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="param" :param-info="itemParams"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="list" :goods="recommend"/>
    </scroll>
    <detail-buttom-bar @clickpusharr="clickPushArr"/>
    <back-top @click.native="backtopClick" v-show="isShow"/>
  </div>
</template>

<script>
  import DetailNavbar from "./childComps/DetailNavbar";
  import {Swiper,SwiperItem} from 'components/common/swiper'
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShop from "./childComps/DetailShop";
  import Scroll from "components/common/scroll/Scroll";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import GoodsList from "components/content/goods/GoodsList";
  import DetailButtomBar from "./childComps/DetailButtomBar";
  import BackTop from "components/content/backtop/BackTop";

  import {getDetail, DetailTitleMessage, DetailShow, getRecommend} from "network/detailNet";
  import {debounce} from "common/utils/utilsRefrsh";
  import {backtopMixin} from "common/utils/mixin";
  // import {mapActions} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    name: "Detail",
    components: {
      DetailNavbar,
      Swiper,
      SwiperItem,
      DetailBaseInfo,
      DetailShop,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailButtomBar,
      // BackTop
    },
    mixins:[backtopMixin],
    data () {
      return {
        detailSwiperImg: [],
        detailtitlemessage: {},
        detailShop: {},
        detailInfo: {},
        itemParams: {},
        commentInfo: {},
        recommend: [],
        itemImgListenner: null,
        detailNavTopY:[],
        fundetailNavTopY: null,
        detailNavcurrentIndex: 0,
        detailIid:null,
        // isShow: false,
      }
    },
    created() {
      this.detailIid = this.$route.params.iid
      // console.log(this.$route.params.iid);
      this.getDetailMethod(this.detailIid)
      getRecommend().then(res => {
        this.recommend = res.data.list
        // console.log(res.data);
      })
      this.fundetailNavTopY = debounce(() => {
        this.detailNavTopY = []
        this.detailNavTopY.push(0)
        this.detailNavTopY.push(this.$refs.param.$el.offsetTop)
        this.detailNavTopY.push(this.$refs.comment.$el.offsetTop)
        this.detailNavTopY.push(this.$refs.list.$el.offsetTop)
        // console.log(this.detailNavTopY);
      },500)
    },
    mounted ()  {
      let refrsh =debounce(this.$refs.detailscroll && this.$refs.detailscroll.refresh,500)
      this.itemImgListenner = () => {
        refrsh()
      }
      this.$bus.$on('itemImgLoad',this.itemImgListenner)
    },

    destroyed () {
      this.$bus.$off('itemImgLoad', this.itemImgListenner)
    },

    methods: {
      ...mapActions(['addCart']),
      clickPushArr () {
        const cartitem = {}
        cartitem.images = this.detailtitlemessage.topImages[0]
        cartitem.title = this.detailtitlemessage.title
        cartitem.desc = this.detailtitlemessage.jsDesc
        cartitem.price = this.detailtitlemessage.lowPrice
        cartitem.iid = this.detailIid
        this.addCart(cartitem).then(res => {
          this.$toast.show(res)
          // console.log(res);
          // console.log(this.$toast);
        })
      },
      backtopClick () {
        this.$refs.detailscroll.scrollTo(0,0,600)
      },
      contentScrollDetail (position) {
        this.isShow = position.y <= -1000
        // console.log(position.y+'|||'+this.detailNavTopY);
        const positionY = - position.y
        let length = this.detailNavTopY.length
        // console.log(positionY);
        for (let i = 0; i < length; i++) {
          if(this.detailNavcurrentIndex !== i && ((i < length -1 && positionY >= this.detailNavTopY[i] && positionY < this.detailNavTopY[i+1]) ||
              (i === length -1 && positionY >= this.detailNavTopY[i]))){
            // console.log(i)
            this.detailNavcurrentIndex = i
          }
        }
      },
      detailtopnavbar (index) {
        this.$refs.detailscroll.scrollTo(0,-this.detailNavTopY[index],100)
      },
      imageLoad () {
        // console.log('qqq');
        this.$refs.detailscroll.refresh()
        this.fundetailNavTopY()
      },
      getDetailMethod (iid){
        getDetail(iid).then( res => {

          console.log(res);
          const result = res.result
          this.detailSwiperImg = result.itemInfo.topImages
          this.detailtitlemessage = new DetailTitleMessage (result.itemInfo, result.columns, result.shopInfo.services)
          this.detailShop = new DetailShow (result.shopInfo)
          this.detailInfo = result.detailInfo
          this.itemParams = result.itemParams
          if (result.rate.cRate !=0){
            this.commentInfo = result.rate.list[0]
          }
        })
      }
    }
  }
</script>

<style scoped>
  .detail{
    height: 100vh;
  }
  .detail-navbar{
    position: relative;
    z-index: 10;
    background-color: #fff;
  }
  .content{
    height: calc(100% - 44px - 49px);
  }
  .detail-swiper{
    height: 50vh;
    overflow: hidden;
  }
</style>