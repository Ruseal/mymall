<template>
  <div class="cart-botton">
    <div class="check-context">
      <div @click="allClick"><check-button :isCheck="isAllCheck" class="check-click"/></div>
      <div>全选</div>
    </div>
    <div class="all">合计:{{price}}</div>
    <div @click="btnCountClick" class="cart-count">去计算({{lengthCount}})</div>
  </div>
</template>

<script>
  import CheckButton from "./CheckButton";
  import {mapGetters} from 'vuex'
  export default {
    name: "CartBotton",
    components: {
      CheckButton,
    },
    computed: {
      ...mapGetters({
        price: 'cartPrice',
        lengthCount: 'cartLenthCount'
      }),
      isAllCheck () {
        return this.$store.state.cartList.length !==0 && !this.$store.state.cartList.find(item => !item.check)
        //     (this.$store.state.cartList.filter(item => item.check).length === this.$store.state.cartList.length)
        // !this.$store.state.cartList.find(item => !item.check)
      }
    },

    methods: {
      btnCountClick () {
        if (!this.lengthCount){
          this.$toast.show('请选择要购买的商品')
        }
      },
      allClick () {
        if(this.isAllCheck) {
          this.$store.state.cartList.map(item => item.check = false)
        }else {
          this.$store.state.cartList.filter(item => !item.check).map(item => item.check = true)
        }


      }
    }
  }
</script>

<style scoped>
  .cart-botton{
    position: relative;
    display: flex;
    height: 35px;
    top: 0;
    border-top: 2px solid #eee;
    /*background-color: ;*/
  }

  .check-context{
    height: 100%;
    display: flex;
    align-items: center;

  }
  .check-click{
    margin: 0 5px 0px 8px;
    width: 20px;
    height: 20px;
    /*background-color: red;*/
  }
  .all{
    margin-left: 20px;
    line-height: 35px;
  }
  .cart-count{
    position: absolute;
    right: 0;
    width: 30%;
    background-color: red;
    line-height: 35px;
    text-align: center;
    color: white;
  }
</style>