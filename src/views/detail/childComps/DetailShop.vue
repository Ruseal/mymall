<template>
  <div v-if="Object.keys(detailShop).length !== 0" class="detail-shop">
    <div class="shop-top">
      <img :src="detailShop.shopLogo" alt="">
      <span class="shop-name">{{detailShop.name}}</span>
    </div>
    <div class="shop-module">
      <div class="shop-item shop-module-left">
        <div class="shop-item-sell">
          <div class="shop-csells">{{sellCount}}</div>
          <div>总销量</div>
        </div>
        <div class="shop-item-goods">
          <div class="shop-cgoods">{{detailShop.cGoods}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="shop-item shop-module-right">
        <table>
          <tr v-for="(item, index) in detailShop.score" :key="index">
             <td>{{item.name}}</td>
             <td class="score-color" :class="{'isbetter-color': item.isBetter}">{{item.score}}</td>
             <td class="score-background" :class="{'isbetter-background':item.isBetter}">{{item.isBetter? '高': '低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShop",
    components: {},
    data () {
      return {

      }
    },
    props: {
      detailShop: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    computed: {
      sellCount () {
        if (this.detailShop.cSells < 10000) return this.detailShop.cSells;
        return (this.detailShop.cSells/10000).toFixed(1) + '万'
      }

    }
  }
</script>

<style scoped>
  .detail-shop{
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .shop-top{
    line-height: 45px;
    /* 让元素垂直中心对齐 */
    display: flex;
    align-items: center;

  }
  .shop-top img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }
  .shop-name{
    margin-left: 10px;
    vertical-align: center;
  }
  .shop-module{
    margin-top: 15px;
    display: flex;
    align-items: center;
  }
  .shop-item{
    flex: 1;
  }
  .shop-module-left{
    border-right: 1px solid rgba(0,0,0,.1);
    display: flex;
    font-size: 14px;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
  }
  .shop-csells{
    font-size: 15px;
    margin-bottom: 3px;
  }
  .shop-cgoods{
    font-size: 15px;
    margin-bottom: 3px;
  }
  .shop-item-sell,.shop-item-goods{
    flex: 1;
  }
  .shop-module-right{
    text-align: center;
    font-size: 14px;
  }
  .shop-module-right table {
    width: 120px;
    margin-left: 20px;
  }
  .shop-module-right table td{
    padding: 4px 0;
  }
  .score-color{
    color: #5ea732;
  }
  .score-background{
    font-size: 13px;
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }
  .isbetter-color{
    color: red;
  }
  .isbetter-background {
    background-color: red;
  }
  .shop-bottom {
    text-align: center;
    margin-top: 10px;
    /*background-color: #f2f5f8;*/
  }

  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: lavender;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>