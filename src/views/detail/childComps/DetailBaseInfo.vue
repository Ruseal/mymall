<template>
  <div class="detail-base-info" v-if="Object.keys(detailtitlemessage) != {}">
    <div class="itemInfo-title"><p>{{detailtitlemessage.title}}</p></div>
    <div class="price">
      <span class="new-price">{{detailtitlemessage.price}}</span>
      <span class="old-price">{{detailtitlemessage.oldPrice}}</span>
      <span class="desc" :style="detailtitlemessage.desc != '' ? {backgroundColor: detailtitlemessage.discountBgColor}:{}">{{detailtitlemessage.desc}}</span>
    </div>
    <div class="columns">
      <span  v-for="index in count" :key="index">{{detailtitlemessage.columns[index-1]}}</span>
      <span>{{columnsback}}</span>
    </div>
    <div class="services">
      <span v-for="index in servicesCount" v-show="detailtitlemessage.services[index-1].hasOwnProperty('icon')" :key="index">
        <span><img :src="detailtitlemessage.services[index- 1].icon" alt=""></span>
        <span>{{detailtitlemessage.services[index- 1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    components: {},
    props: {
      detailtitlemessage: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    computed: {
      count () {
        return this.detailtitlemessage.columns && this.detailtitlemessage.columns.length-1
      },
      columnsback () {
        return this.detailtitlemessage.services && this.detailtitlemessage.services[this.detailtitlemessage.services.length- 1].name
        // return this.detailtitlemessage.services && this.detailtitlemessage.services.length-1

      },
      servicesCount () {
        return this.detailtitlemessage.services && this.detailtitlemessage.services.length- 1
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .detail-base-info{
    padding-bottom: 20px;
    border-bottom: 10px solid #eee;
  }
  .itemInfo-title{
    padding: 8px;
    text-indent: 1em;
  }
  .new-price{
    font-size: 20px;
    color: var(--color-high-text);
    margin-left: 8px;
    font-weight: bold;
    /*line-height: 10em;*/
  }
  .old-price{
    font-size: 10px;
    text-decoration: line-through;
    margin-left: 4px;
  }
  .desc{
    color: white;
    font-size: 1px;
    margin: 0 0 0 5px;
    padding: 5px;
    border-radius: 14px;
    position: relative;
    top: -5px;
  }
  .columns{
    text-align: center;
    margin-top: 14px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }
  .columns span{
    flex: 1;
  }
  .services{
    justify-content: space-between;
    text-align: center;
    margin-top: 20px;
    display: flex;

  }
  .services span{
    font-size: 13px;
    flex: 1;
  }
  .services span span img{
    margin-right: 3px;
    width: 13px;
    height: 13px;
    position: relative;
    top: 2px;
    /*flex: 1;*/
  }
</style>