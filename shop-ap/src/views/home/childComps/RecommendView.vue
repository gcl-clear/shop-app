<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.recommend {
  display: flex;
  border-bottom: solid 8px #cccccc;
  padding-bottom: 8px;
}
.recommend-item {
  text-align: center;
  width: 25%;
}
.recommend-item img {
  width: 80%;
  display: block;
  margin: 10px auto;
}
</style>
