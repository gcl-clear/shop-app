<template>
  <div class="goods-list">
    <good-list-item class="item" v-for="(item,index) in goods" :key="index" :goodsItem="item">
    </good-list-item>
  </div>
</template>
<script>
import GoodListItem from './GoodListItem'
export default {
  name: "GoodList",
  components: {
    GoodListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-around;
  }

  .goods-list .item {
    width: 48%;
  }
</style>
