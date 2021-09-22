<template>
  <div class="goods-list-item" @click="btnGoodsItem">
    <img v-lazy="showImage" alt="" @load="itemImgLoad">
    <div class="text-item">
      <p>{{item.title}}</p>
      <span class="price">{{item.price}}</span>
      <span class="collect">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    components: {},
    data (){
      return {
        flag: false
      }
    },
    props: {
      item: {
        type: Object,
        default: {
          return: {}
        }
      }
    },
    computed: {
      showImage () {
        return this.item.image || this.item.show.img
      }
    },
    methods: {
      itemImgLoad () {
        this.$bus.$emit('itemImgLoad')
      },
      btnGoodsItem () {
        this.$bus.$emit('flag',this.flag)
        this.$router.push('/detail/' + this.item.iid, )
      }
    }
  }
</script>

<style scoped>
  .goods-list-item{
    width: 47%;
    padding-bottom: 40px;
    position: relative;
    z-index: 3;
  }
  .goods-list-item img{
    width: 100%;
    border-radius: 5px;
    /*height: 48%;*/
  }
  .text-item{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .text-item p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .text-item .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .text-item .collect {
    position: relative;
  }

  .text-item .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    /*background: url("~assets/img/common/collect.svg") 0 0/14px 14px;*/
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>