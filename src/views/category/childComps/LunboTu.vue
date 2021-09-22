<template>
  <div id="div">
    <div id="lunbo-tu">
      <div id="img-show">
        <div class="img-item" v-for="(item, index) in banners" :key="item.index">
          <a href="#"><img :src="item" alt="" ref="img"></a>
        </div>
      </div>
      <div id="indicator">
        <div :class="{active: currentIndex === index}" v-for="index in banners.length" class="indicator-item" :key="index"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LunboTu",
    components: {},
    data() {
      return {
        lunbotuWidth: 0,
        imgCount: 0,
        currentIndex: 1,
        imgshowStyle:{},
        imgshowEl:null,
        styleIndex:0
      }
    },
    props:{
      banners:{
        type:Array,
        default () {
          return [
            require('../../../assets/img/test/a.jpg'),
            require('../../../assets/img/test/b.jpg'),
            require('../../../assets/img/test/c.jpg'),
            require('../../../assets/img/test/d.jpg'),
            require('../../../assets/img/test/e.jpg'),
          ]
        }
      },
    },
    mounted() {
        this.dom()
        this.uuu()
    },
    computed: {
      // imgshowWidth () {
      //   return {width: this.lunbotuWidth * this.imgCount + 'px'}
      // },
      // imgWidth () {
      //   return {width: this.lunbotuWidth + 'px'}
      // }
    },
    methods: {
      dom () {
        this.imgshowEl = document.getElementById('img-show')
        let imgitemEls = document.getElementsByClassName('img-item')

        this.lunbotuWidth = document.getElementById('lunbo-tu').offsetWidth
        this.imgshowStyle = this.imgshowEl.style
        this.imgshowStyle.width = this.lunbotuWidth + 'px'

        if(this.banners.length > 1){
          let cloneFirst = imgitemEls[0].cloneNode(true)
          let cloneLast = imgitemEls[this.banners.length-1].cloneNode(true)
          this.imgshowEl.insertBefore(cloneLast,imgitemEls[0])
          this.imgshowEl.appendChild(cloneFirst)
          this.imgCount = imgitemEls.length
          this.imgshowStyle.width = this.lunbotuWidth * this.imgCount + 'px'
          this.imgshowStyle.transform='translate('+(-this.lunbotuWidth)+'px)'
        }
      },
      fun () {
        console.log('qqq')
        if (this.currentIndex >= this.banners+1){
          console.log('ss');
          this.currentIndex = 1
          this.imgshowStyle.transition=''
          this.imgshowStyle.transform='translate('+this.lunbotuWidth * -this.currentIndex+'px)'
        }else if(this.currentIndex <= 0){
          console.log('ww');
          this.currentIndex = this.imgCount-2
          this.imgshowStyle.transition=''
          this.imgshowStyle.transform='translate('+position+'px)'
        }
      },
      uuu () {
        setInterval(() => {
          this.currentIndex++

          let position = this.lunbotuWidth * -this.currentIndex
          this.imgshowStyle.transition='0.5s'
          this.imgshowStyle.transform='translate('+position+'px)'
          this.imgshowEl.addEventListener('transitionend', this.fun)
        },2000)
      }
    }
  }
</script>

<style scoped>
    #div{
      width: 100vw;
      height: 34vh;

    }
    #lunbo-tu{
      position: relative;
      width: 100%;
      height: 100%;
      /*overflow: hidden;*/
    }
    #img-show{
      height: 100%;
      display: flex;
      background-color: red;
    }
   .img-item a img{
      height: 100%;
      width: 100%;
   }
    #indicator{
      display: flex;
      justify-content: center;
      position: absolute;
      bottom: 2%;
      width: 100%;
      height: 3%;
    }
  .indicator-item{
    width: 8%;
    background-color: white;
    margin: 0 2%;
  }
  .active{
    background-color: #ff8198;
  }
</style>