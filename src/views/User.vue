<template>
  <div class="user">
    <div class="header">
      <van-icon name="arrow-left" class="backIcon" @click="$router.go(-1)" />
      <div class="switches">
        <div class="switch-item" @click="switchLike">
          <span :class="{'active':active === 0}">我的收藏</span>
        </div>
        <div class="switch-item" @click="switchHistory">
          <span :class="{'active':active === 1}">最近播放</span>
        </div>
      </div>
      <div class="right"></div>
    </div>
    <div class="noSongTips" v-if="List.length === 0">
      <van-icon name="music-o" class="musicIcon" />
      <span>去寻找你最热爱的音乐吧</span>
    </div>
    <div class="searchList" v-if="List.length !== 0">
      <div class="sequence-play">
        <van-icon name="play" class="playIcon" />
        <div class="playAll">播放全部</div>
        <span>(共{{List.length}}首)</span>
      </div>
      <div
        class="songList-item"
        v-for="(item,index) in List"
        :key="item.id"
        @click="goPlaying(item.id)"
      >
        <div class="count">{{index+1}}</div>
        <div class="content">
          <h2 class="name">{{item.name}}</h2>
          <p class="desc">{{item.ar[0].name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      List:[],
      active:0
    }
  },
  mounted () {
    this.getLikeList()
  },
  methods:{
    getHistoryList(){
      this.List = this.$store.state.playList
    },
    getLikeList(){
      this.List = this.$store.state.likeList
    },
    switchHistory(){
      this.List = []
      this.getHistoryList()
      this.active = 1
    },
    switchLike(){
      this.List = []
      this.getLikeList()
      this.active = 0
    },
    goPlaying(id) {
      this.$router.push({ path: '/play', query: { id } })
    }
  }
}
</script>

<style lang="less" scoped>
.user {
  background-color: #f2f3f4;
  height: 100%;
  .header {
    height: 44px;
    background-color: #d44439;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .backIcon {
      font-size: 20px;
      margin-left: 10px;
    }
    .switches {
      width: 240px;
      display: flex;
      .switch-item {
        width: 120px;
        text-align: center;
        font-size: 12px;
      }
    }
    .right {
      width: 30px;
    }
  }
}

.active {
  border-bottom: 2px solid #fff;
  padding: 0 5px 5px;
}

.noSongTips {
  height: 580px;
  background-color: #f2f3f4;
  text-align: center;
  color: #999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  .musicIcon {
    font-size: 50px;
    margin-bottom: 20px;
  }
}

.searchList {
  position: absolute;
  width: 100%;
  .sequence-play {
    height: 41 * 100vw/375;
    background-color: #f2f3f4;
    display: flex;
    align-items: center;
    padding: 0 10 * 100vw/375;
    color: #2e3030;
    border-bottom: 1px solid #e4e4e4;
    .playAll {
      margin-left: 5 * 100vw/375;
      font-size: 14 * 100vw/375;
    }
    .playIcon {
      font-size: 16 * 100vw/375;
    }
    span {
      font-size: 12 * 100vw/375;
      color: #666;
      margin-left: 3 * 100vw/375;
    }
  }
  .songList-item {
    height: 60 * 100vw/375;
    background-color: #f2f3f4;
    display: flex;
    align-items: center;
    color: #757575;
    border-bottom: 1px solid #e4e4e4;
    .count {
      width: 50 * 100vw/375;
      text-align: center;
    }
    .content {
      .name {
        color: #2e3030;
      }
      .desc {
        font-size: 12 * 100vw/375;
        margin-top: 5 * 100vw/375;
      }
    }
  }
}
</style>