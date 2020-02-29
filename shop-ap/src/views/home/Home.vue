<template>
  <div id="home">
      <NavBar class="home-nav">
        <div slot="center">天狗购物</div>
      </NavBar>
      <!-- //轮播 -->
      <van-swipe class="banner" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in banners" :key="index">
          <img v-lazy="image.image" />
        </van-swipe-item>
      </van-swipe>

      <RecommendView :recommend="recommend"></RecommendView>

  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import RecommendView from './childComps/RecommendView'

import {getHomedata} from "../../api/home.js"

export default {
  name: "Home",
  components: {
    NavBar,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommend: []
    }
  },
  created() {
    getHomedata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    })
  }
}
</script>

<style>
.home-nav {
  background-color: darkturquoise;
  color: white;
}
.banner img{
  height: 100%;
  height: 200px;
}

</style>
