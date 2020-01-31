<template>
  <div class="search">
    <div class="header">
      <van-icon name="arrow-left" class="backIcon" @click="$router.go(-1)" />
      <input type="text" placeholder="搜索歌曲、歌手" v-model="inputKeyword" @click="inputKeyword = ''" />
      <van-icon name="cross" v-if="inputKeyword !== ''"/>
    </div>
    <div class="hotSearch" v-if="inputKeyword === ''">
      <h3>热门搜索</h3>
      <div class="hotSearch_main">
        <span class="hotSearch_item" v-for="(item,index) in keyword" :key="index" @click="hotSearch(item.first)">{{item.first}}</span>
      </div>
    </div>
    <div class="searchList" v-if="inputKeyword !== ''">
      <div class="sequence-play">
        <van-icon name="play" class="playIcon" />
        <div class="playAll">播放全部</div>
        <span>(共{{songListData.length}}首)</span>
      </div>
      <div
        class="songList-item"
        v-for="(item,index) in songListData"
        :key="item.id"
        @click="goPlaying(item.id)"
      >
        <div class="count">{{index+1}}</div>
        <div class="content">
          <h2 class="name">{{item.name}}</h2>
          <p class="desc">{{item.artists[0].name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearchHot, getSearchResult } from '../api/search'
export default {
  data() {
    return {
      keyword: [],
      songListData: [],
      inputKeyword: ''
    }
  },
  mounted() {
    this.getSearchHotKeyword()
  },
  watch: {
    inputKeyword() {
      console.log(this.inputKeyword)
      this.getSearchKeywordResult(this.inputKeyword)
    }
  },
  methods: {
    async getSearchHotKeyword() {
      const res = await getSearchHot()
      console.log(res)
      this.keyword = res.data.result.hots
    },
    async getSearchKeywordResult(keyword) {
        const res = await getSearchResult(keyword)
        console.log(res);
        this.songListData = res.data.result.songs
    },
    goPlaying(id) {
      this.$router.push({ path: '/play', query: { id } })
    },
    hotSearch(keyword){
        this.inputKeyword = keyword
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  background-color: #f2f3f4;
  height: 100%;
}
.header {
  background-color: #d44439;
  height: 44 * 100vw/375;
  display: flex;
  align-items: center;
  padding: 0 10 * 100vw/375;
  color: #fff;
  .backIcon {
    font-size: 20 * 100vw/375;
    margin-right: 10 * 100vw/375;
  }
  input {
    border: none;
    background-color: #d44439;
    font-size: 14 * 100vw/375;
    color: #fff;
    width: 300 * 100vw/375;
    margin-bottom: 2 * 100vw/375;
  }
  input::-webkit-input-placeholder {
    /* WebKit browsers */
    color: rgba(255, 255, 255, 0.6);
    font-size: 14 * 100vw/375;
  }
}
.hotSearch {
  padding: 20* 100vw/375;
  h3 {
    font-size: 12* 100vw/375;
    color: #757575;
    margin: 0* 100vw/375 0* 100vw/375 15* 100vw/375 4* 100vw/375;
  }
  .hotSearch_main {
    display: flex;
    flex-wrap: wrap;
    .hotSearch_item {
      font-size: 14* 100vw/375;
      color: #2e3030;
      margin: 4* 100vw/375;
      padding: 3* 100vw/375 5* 100vw/375;
      border: 1px solid #ccc;
      border-radius: 4* 100vw/375;
    }
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
    height: 60* 100vw/375;
    background-color: #f2f3f4;
    display: flex;
    align-items: center;
    color: #757575;
    border-bottom: 1px solid #e4e4e4;
    .count {
      width: 50* 100vw/375;
      text-align: center;
    }
    .content {
      .name {
        color: #2e3030;
      }
      .desc {
        font-size: 12* 100vw/375;
        margin-top: 5* 100vw/375;
      }
    }
  }
}
</style>