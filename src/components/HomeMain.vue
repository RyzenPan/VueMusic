<template>
  <div class="main">
    <h3 class="title">推荐歌单</h3>
    <div class="list">
      <div
        class="listItem"
        v-for="(item,index) in personalized"
        :key="index"
        @click="$router.push({path:'/songList',query:{id:item.id}})"
      >
        <div class="pic">
          <img :src="item.picUrl" alt />
          <span class="iconfont icon-Headphoneerji">{{Math.floor(item.playCount/10000)}}万</span>
        </div>
        <span class="content">{{item.name}}</span>
      </div>
    </div>
    <h3 class="title">推荐歌曲</h3>
    <div class="list">
      <div class="listItem" v-for="(item,index) in newsong" :key="index">
        <div class="pic">
          <img :src="item.picUrl" alt />
          <span class="iconfont icon-Headphoneerji">{{Math.floor(item.playCount/10000)}}万</span>
        </div>
        <span class="content">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newsong: {
      type: Array,
      default: []
    },
    personalized: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  .title {
    line-height: 66px;
    padding: 0 5px;
    font-size: 14px;
    font-weight: bold;
  }
  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 5px;
    .listItem {
      margin-bottom: 10px;
      .pic {
        position: relative;
        img {
          width: 116 * 100vw / 375;
          height: 116 * 100vw / 375;
        }
      }
      .content {
        font-size: 11 * 100vw / 375;
        max-width: 116 * 100vw / 375;
        line-height: 16 * 100vw / 375;
        display: block;
        word-break: break-all;
      }
    }
  }
}
.iconfont {
  font-size: 10 * 100vw / 375;
  color: #fff;
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>