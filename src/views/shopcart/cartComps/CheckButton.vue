<template>
    <div class="icon-selector" :class="{selectoractive : isCheck}">
      <img src="~assets/img/shopcart/tick.svg" alt="">
    </div>

</template>

<script>
  export default {
    name: "CheckButton",
    components: {},
    props: {
      isCheck: {
        type: Boolean,
        default () {
          return false
        }
      }
    }
  }
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }

  .selectoractive {
    background-color: red;
    border-color: red;
  }
</style>