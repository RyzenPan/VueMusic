<template>
  <div class="songList">
    <div class="header" :style="`background-color: rgba(212, 68, 57, ${titleTran});`">
      <van-icon name="arrow-left" class="backIcon" @click="$router.go(-1)" />
      <span class="title">{{scrollTop > 200 ? songListData.name : '歌单'}}</span>
    </div>
    <div class="cover">
      <div
        class="pic"
        :style="`background: url('${songListData.coverImgUrl}') no-repeat;background-size: cover;`"
      >
        <div class="filter"></div>
      </div>
      <div class="songTitle">
        <span class="songTitle_title">{{songListData.name}}</span>
        <div class="songTitle_playNum">
          <van-icon name="audio" />
          <span style="margin-left:3px;">{{Math.floor(songListData.playCount/10000)}}万</span>
        </div>
      </div>
    </div>
    <div class="songMain">
      <div class="sequence-play">
        <van-icon name="play" class="playIcon" />
        <div class="playAll">播放全部</div>
        <span>(共135首)</span>
      </div>
      <div class="songList-item" v-for="(item,index) in songListData.tracks" :key="item.id" @click="goPlaying(item.id)">
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
import { getSongList } from '../api/song'
export default {
  data() {
    return {
      songListData: {},
      titleTran: 0,
      scrollTop:0
    }
  },
  watch: {
    'document.documentElement.scrollTop'() {
      console.log(document.documentElement.scrollTop)
    }
  },
  mounted() {
    this.getSongListData()
    window.addEventListener('scroll', this.showIcon)
  },
  methods: {
    async getSongListData() {
      const res = await getSongList(this.$route.query.id)
      console.log(res)
      this.songListData = res.data.playlist
    },
    showIcon() {
      this.scrollTop = document.documentElement.scrollTop
      this.titleTran = this.scrollTop / 350
    },
    goPlaying(id){
      this.$router.push({path:"/play",query:{id}})
    }
  }
}
</script>

<style lang="less" scoped>
.songList {
  .header {
    position: fixed;
    height: 44 * 100vw/375;
    width: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 10 * 100vw/375;
    z-index: 9999999;
    .title {
      font-size: 16 * 100vw/375;
    }
    .backIcon {
      font-size: 22 * 100vw/375;
      margin-right: 10 * 100vw/375;
    }
  }
  .cover {
    position: relative;
    .pic {
      background-size: cover !important;
      height: 280 * 100vw/375;
      .filter {
        height: 280 * 100vw/375;
        background: #000;
        opacity: 0.2;
      }
    }
    .songTitle {
      position: absolute;
      left: 10 * 100vw/375;
      bottom: 18 * 100vw/375;
      color: #fff;
      .songTitle_title {
        font-weight: bold;
        font-size: 16 * 100vw/375;
      }
      .songTitle_playNum {
        font-size: 12 * 100vw/375;
        margin-top: 5 * 100vw/375;
        display: flex;
        align-items: center;
      }
    }
  }
  .songMain {
    margin-top: -10 * 100vw/375;
    position: absolute;
    width: 100%;
    .sequence-play {
      height: 41 * 100vw/375;
      background-color: #f2f3f4;
      display: flex;
      align-items: center;
      padding: 0 10 * 100vw/375;
      border-radius: 10px 10px 0 0;
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
      height: 60px;
      background-color: #f2f3f4;
      display: flex;
      align-items: center;
      color: #757575;
      border-bottom: 1px solid #e4e4e4;
      .count {
        width: 50px;
        text-align: center;
      }
      .content {
        .name {
          color: #2e3030;
        }
        .desc {
          font-size: 12px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>