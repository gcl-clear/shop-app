<template>
  <div id="app">
    <MainTab></MainTab>
    <router-view/>
  </div>
</template>
<script>
import MainTab from './components/content/mainTab/MainTab'
export default {
  name: 'app',
  components: {
    MainTab
  }
}
</script>


<style>
  @import 'assets/css/base.css'
</style>
