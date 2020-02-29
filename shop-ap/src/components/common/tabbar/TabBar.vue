<template>
  <div id="tab-bar">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
#tab-bar{
  display: flex;
  justify-content: space-around;
  background-color: #cccccc;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.3)
}
</style>
