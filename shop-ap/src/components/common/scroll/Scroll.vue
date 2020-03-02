<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // this.scroll = new Bscroll(document.querySelector('.warpper'),{

    // })
    console.log(this.$refs.wrapper);

    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: 3,
      click:true,
      pullUpLoad: true
    })
    this.scroll.on('scroll',(position) => {
      console.log(position);
    })
    this.scroll.on('pullingUp',() => {
      console.log('上拉加载');

    })
    this.scroll.refresh();
  }
}
</script>

<style>

</style>
