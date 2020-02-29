<template>
<div id="maintab">


  <TabBar>
      <TabBarItem path='/home'>
        <img slot="item-icon" src="~/assets/img/tabbar/home1.svg" alt="">
        <img slot="item-icon-active" src="~/assets/img/tabbar/home.svg" alt="">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path='/fenlei'>
        <img slot="item-icon" src="~/assets/img/tabbar/fen1.svg" alt="">
        <img slot="item-icon-active" src="~/assets/img/tabbar/fen.svg" alt="">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path='/cart'>
        <img slot="item-icon" src="~/assets/img/tabbar/cart1.svg" alt="">
        <img slot="item-icon-active" src="~/assets/img/tabbar/cart.svg" alt="">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path='/user'>
        <img slot="item-icon" src="~/assets/img/tabbar/user1.svg" alt="">
        <img slot="item-icon-active" src="~/assets/img/tabbar/user.svg" alt="">
        <div slot="item-text">用户</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'

export default {
  name: "MainTab",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
