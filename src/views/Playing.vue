<template>
<div>
  <div class="play" v-show="hiddenPlay">
    <header>
      <div class="iconfont icon-jiantouarrow483" @click="hidden"></div>
      <div class="title">
        <h3>{{songData.name}}</h3>
        <span>{{artist}}</span>
      </div>
      <div class="right"></div>
    </header>
    <div class="cover">
      <div class="cd-wrapper">
        <div class="cd" :class="{'playing':isPaused,'':!isPaused}">
          <img :src="songData.al.picUrl" alt />
        </div>
      </div>
    </div>
    <div class="status">
      <div class="time-l">{{currentTime}}</div>
      <div class="progress-bar">
        <div class="progress-bar-status" :style="{'width': `${process}%`}"></div>
      </div>
      <div class="time-r">{{totalTime}}</div>
    </div>
    <div class="control">
      <span class="iconfont icon-ListCycleliebiaoxunhuan"></span>
      <span class="iconfont icon-Lastshangyiqu"></span>
      <span
        :class="['iconfont','playStatus',{'icon-Playbofang':isPaused,'icon-Pausezanting':!isPaused}]"
        @click="togglePlay"
      ></span>
      <span class="iconfont icon-Nextxiayiqu" @click="nextSong"></span>
      <span class="iconfont icon-Likexihuan" :class="{'likeActive':likeActive}" @click="likeMusic"></span>
    </div>
    <audio
      :src="songLink"
      ref="audioPlay"
      autoplay="autoplay"
      @canplay="getTotal"
      @timeupdate="timeUpdate"
    ></audio>
  </div>
  <van-icon name="music" class="switchIcon" @click="showPlay" v-show="ListShow"/>
  </div>
</template>

<script>
import { getSongInfo, getSongUrl } from '../api/song'
export default {
  props:{
    songInfo:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      audioPlay: null,
      isPaused: true,
      totalTime: '00:00',
      currentTime: '00:00',
      totalTimeSecond: 0,
      process: 0,
      artist: '',
      songData: {
        al: {},
        name
      },
      songLink: '',
      likeActive: false,
      Likelist: [],
      playlist:[],
      hiddenPlay:false,
      ListShow:false
    }
  },
  watch:{
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log(to.query.id);
          this.getSongData(to.query.id)
    this.getSongLink(to.query.id)
    this.hiddenPlay = true
    }
  },
  mounted() {
    this.audioPlay = this.$refs.audioPlay
    this.getSongData(this.$store.state.nowPlay)
    this.getSongLink(this.$store.state.nowPlay)
    this.getTotal()
    this.checkLike()
      console.log(this.songInfo);
  },
  methods: {
    showPlay(){
      this.hiddenPlay = true
      this.ListShow = false
      this.$emit('showList',this.ListShow)
    },
    hidden(){
      this.hiddenPlay = false
      this.ListShow = true
      this.$emit('showList',this.ListShow)
    },
    async getSongData(id) {
      const res = await getSongInfo(id)
      if (res.data.songs.length === 0) return this.$toast('加载失败...')
      this.songData = res.data.songs[0]
      this.artist = res.data.songs[0].ar[0].name
      this.$store.commit('saveList', this.songData)
    },
    async getSongLink(id) {
      const res = await getSongUrl(id)
      if (res.data.data[0].url === null) return
      this.songLink = res.data.data[0].url
    },
    togglePlay() {
      this.isPaused = !this.isPaused
      if (this.isPaused) {
        this.audioPlay.play()
      } else {
        this.audioPlay.pause()
      }
    },
    timeFormat(times) {
      let minute = Math.floor((times % 3600) / 60)
      let second = Math.floor(times % 60)
      minute = minute < 10 ? '0' + minute : minute
      second = second < 10 ? '0' + second : second
      return `${minute}:${second}`
    },
    getTotal() {
      if (isNaN(this.audioPlay.duration)) return
      this.totalTime = this.timeFormat(this.audioPlay.duration)
      this.totalTimeSecond = this.audioPlay.duration
    },
    timeUpdate() {
      this.currentTime = this.timeFormat(this.audioPlay.currentTime)
      this.process = (this.audioPlay.currentTime / this.totalTimeSecond) * 100
    },
    nextSong() {
      // this.playlist = this.$store.state.playList
      // console.log(this.playlist[1].id);
      // this.$router.push({ path: '/play', query: { id:this.playlist[1].id } })
    },
    likeMusic() {
      if (this.Likelist.length === 0) {
        this.$store.commit('saveLikeList', this.songData)
      } else {
        for (let i = 0; i <= this.Likelist.length; i++) {
          if (this.Likelist[i].id === +this.$route.query.id) {
            this.$store.commit('delLikeList', this.songData)
            this.likeActive = !this.likeActive
            return
          } else {
            this.$store.commit('saveLikeList', this.songData)            
            this.likeActive = !this.likeActive
            return
          }
        }
      }
      this.likeActive = !this.likeActive
    },
    checkLike() {
      this.Likelist = this.$store.state.likeList
      for (let i = 0; i <= this.Likelist.length; i++) {
        if (this.Likelist[i].id === +this.$route.query.id) {
          return (this.likeActive = true)
        } else {
          return
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.play {
  background: #666869;
  height: 100vh;
  header {
    padding: 0 15px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        font-size: 18px;
        font-weight: bold;
      }
      span {
        font-size: 12px;
        margin-top: 6px;
      }
    }
    .iconfont {
      font-size: 24px;
    }
    .right {
      width: 24px;
    }
  }
  .cover {
    height: 440px;
    display: flex;
    justify-content: center;
    align-items: center;
    .cd-wrapper {
      width: 300px;
      height: 300px;
      border-radius: 170px;
      background-color: #8b8f93;
      display: flex;
      justify-content: center;
      align-items: center;
      .cd {
        width: 280px;
        height: 280px;
        border-radius: 150px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
  }
}

.playing {
  animation: rot 10s infinite linear;
}

@keyframes rot {
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
}

.status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 34px 36px 5px;
  color: #fff;
  font-size: 12px;
  .progress-bar {
    height: 4px;
    width: 240px;
    background-color: #353535;
    margin: 0 10px;
    .progress-bar-status {
      background-color: #d44439;
      height: 100%;
    }
  }
}

.control {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .iconfont {
    font-size: 45px;
    margin: 10px 8px;
  }
  .playStatus {
    font-size: 55px;
  }
}

.likeActive {
  color: #d44439;
}
.switchIcon {
  font-size: 50px;
  color: #d44439;
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>