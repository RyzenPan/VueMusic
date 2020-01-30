<template>
   <div class="slider">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in bannerDate" :key="index"><img :src="item.imageUrl" alt=""></van-swipe-item>
    </van-swipe>
   </div>
</template>

<script>
export default {
  props:{
    bannerDate:{
      type:Array,
      default:[]
    }
  }
}
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  img {
    width: 100%;
  }
}
.my-swipe {
  margin: 0 10px;
  margin-bottom: 10px;
}

</style>