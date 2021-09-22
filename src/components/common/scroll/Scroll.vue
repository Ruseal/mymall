<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    components: {},
    props: {
      probeType: {
        type:Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return{
        text : 123466,
        scroll: null,
        positionY: 0,
        // positionY: 0
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      if (this.probeType ===2 || this.probeType ===3){
        this.scroll.on('scroll', (position) => {
          this.positionY = position.y
          this.$emit('scroll',position)
        })
      }
      if (this.pullUpLoad){
        this.scroll.on('pullingUp', () => {
          this.$emit('up')
          // console.log(this.scroll);
        })
      }


    },
    methods: {
      scrollTo (x,y,time) {
        this.scroll.scrollTo(x,y,time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh () {
        console.log('aaa');
        this.scroll.refresh()
      },
    }
  }
</script>

<style scoped>

</style>