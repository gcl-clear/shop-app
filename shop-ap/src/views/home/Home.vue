<template>
  <div id="home">
      <NavBar class="home-nav">
        <div slot="center">天狗购物</div>
      </NavBar>
      <!-- //轮播 -->
      <Scroll class="cont">
        <van-swipe class="banner" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in banners" :key="index">
          <img v-lazy="image.image" />
        </van-swipe-item>
        </van-swipe>

        <RecommendView :recommend="recommend"></RecommendView>
        <FeatureView></FeatureView>
        <TabControl class="tab-control" :titles="['留行','新款','精选']" @tabClick="tabClick"></TabControl>
        <GoodList :goods="showGoods"></GoodList>
      </Scroll>


  </div>
</template>

<script scoped>
import NavBar from '../../components/common/navbar/NavBar'
import TabControl from '../../components/content/tabControl/TabControl'
import GoodList from '../../components/content/goods/GoodList'

import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import Scroll from '../../components/common/scroll/Scroll'

import {getHomedata, getHomeGoods} from "../../api/home.js"

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    RecommendView,
    FeatureView,
    GoodList,
    Scroll

  },
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        'pop': {page: 0,list: []},
        'new': {page: 0,list: []},
        'sell': {page: 0,list: []}
      },
      currentType: 'pop'
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomedata(),

    this.getHomeGoods('pop'),
    this.getHomeGoods('new'),
    this.getHomeGoods('sell')
  },
  methods: {
    // 点击事件
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
    },

    // 网络请求
    getHomedata() {
      getHomedata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1
      })
    }

  }
}
</script>

<style>
.home-nav {
  background-color: darkturquoise;
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
}
.banner img{
  height: 100%;
  height: 200px;
  margin-top: 44px;
}
.tab-control {
  position: sticky;
  top: 44px;
  background: #cccccc;
}
.cont{
  height: 400px;
  /* overflow: hidden; */
}
</style>
