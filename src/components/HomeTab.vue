<template>
  <div class="tab">
      <div class="tabItem"><span class="active">推荐</span></div>
      <div class="tabItem"><span>排行</span></div>
      <div class="tabItem"><span>歌手</span></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.tab {
    display: flex;
    height: 44px;
    .tabItem {
        width: 33.333%;
        font-size: 14px;
        color: #f1f1f1;
        text-align: center;
        line-height: 44px;
    }
}

.active {
    border-bottom: 2px solid #f1f1f1;
    padding-bottom: 4px;
}
</style>