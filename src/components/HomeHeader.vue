<template>
  <div>
    <div class="header">
      <span class="iconfont icon-SongListgedan" @click="$router.push({path:'/user'})"></span>
      <div class="logo">Music</div>
      <span class="iconfont icon-Musicyinle" @click="$router.push({path:'/search'})"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  height: 44px;
  display: flex;
  background-color: #d44439;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  .iconfont {
    color: #fff;
    font-size: 23px;
  }
  .logo {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
}
</style>