<template>
  <div class="play">
    <header>
      <div class="iconfont icon-jiantouarrow483"></div>
      <div class="title">
        <h3>吻别</h3>
        <span>杨千嬅</span>
      </div>
      <div class="right"></div>
    </header>
    <div class="cover">
      <div class="cd-wrapper">
        <div class="cd">
          <img src="http://p1.music.126.net/iMVw_gXREpLPBDjnVM3q_w==/109951164546681358.jpg" alt />
        </div>
      </div>
    </div>
    <div class="status">
      <div class="time-l">0:50</div>
      <div class="progress-bar"></div>
      <div class="time-r">3:16</div>
    </div>
    <div class="control">
      <span class="iconfont icon-ListCycleliebiaoxunhuan"></span>
      <span class="iconfont icon-Lastshangyiqu"></span>
      <span class="iconfont icon-Playbofang playStatus"></span>
      <span class="iconfont icon-Nextxiayiqu"></span>
      <span class="iconfont icon-Likexihuan"></span>
    </div>
    <audio
      src="http://m10.music.126.net/20200130145705/9937f7f62e022145d235a73818dac280/ymusic/075a/0352/0e08/008fce394f48176e3a5d9b8fe0744398.mp3"
    ></audio>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.play {
  background: #000;
  opacity: 0.4;
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
    padding:34px 36px 0px;
    color: #fff;
    font-size: 12px;
    .progress-bar{
        height: 4px;
        width: 240px;
        background-color: #353535;
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
</style>