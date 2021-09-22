<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    components: {},
    data() {
      return {
        isShow: false,
        message: ''
      }
    },
    methods: {
      show (message,dealy=2000) {
        this.isShow = true
        this.message = message
        setTimeout(() => {
          this.isShow = false
          this.message = ''
        },dealy)
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    background-color: #333333;
    color: white;
    /*width: 100%;*/
    opacity: 0.8;
    white-space: nowrap;
    top: 50%;
    left: 50%;
    padding: 10px 15px;
    border-radius: 10px;
    transform: translate(-50%,-50%);
    z-index: 9999;
  }
</style>