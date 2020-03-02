<template>
  <div class="tabcontrol">
    <div  class="tab-com-item"
          v-for="(item, index) in titles"
          :key="index"
          :class="{active: index === currentIndex}"
          @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style>
.tabcontrol {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 15px;
  z-index: 9;
}
.tab-com-item{
  height: 40px;
  line-height: 40px;
}
.active {
  color: deeppink;
  border-bottom: solid 2px deeppink;
}
</style>
