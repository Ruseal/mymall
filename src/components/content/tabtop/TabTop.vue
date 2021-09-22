<template>
  <div id="tab-top">
    <slot name="item-left"></slot>
    <slot name="item-center"></slot>
    <slot name="item-rigth"></slot>
  </div>
</template>

<script>
  export default {
    name: "TabTop",
    components: {}
  }
</script>

<style scoped>

</style>
