<template>
  <div class="home">
    <Header />
    <van-tabs v-model="active">
      <van-tab title="推荐" name="1">
        <div>
          <div class="top">
            <Slider :bannerDate="bannerDate" />
          </div>
          <Main :personalized="personalized" :newsong="newsong" />
        </div>
      </van-tab>
      <van-tab title="排行" name="2">
        <Ranking :ranklist="ranklist" />
      </van-tab>
      <van-tab title="歌手" name="3">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Header from "@/components/HomeHeader";
import Tab from "@/components/HomeTab";
import Slider from "@/components/HomeSlider";
import Main from "@/components/HomeMain";
import Ranking from "@/components/Ranking";

import { getBanner, getNewsong, getPersonalized } from "@/api/HomeApi";
import { getRank } from "@/api/rank";
export default {
  name: "Home",
  components: {
    Header,
    Tab,
    Slider,
    Main,
    Ranking
  },
  data() {
    return {
      bannerDate: [],
      personalized: [],
      newsong: [],
      ranklist: [],
      active: "1"
    };
  },
  created() {},
  mounted() {
    this.getBannerData();
    this.getSongData();
    this.getRankList();
  },
  methods: {
    async getRankList() {
      const res = await getRank();
      // console.log(res.data.list);
      this.ranklist = res.data.list;
    },
    async getBannerData() {
      const res = await getBanner();
      this.bannerDate = res.data.banners;
      console.log(res.data.banners);
    },
    async getSongData() {
      const res = await getPersonalized();
      this.personalized = res.data.result;
      const res1 = await getNewsong();
      this.newsong = res1.data.result;
    }
  }
};
</script>

<style lang="less" scoped>
.home /deep/.van-tabs__nav--line {
  background: #d44439;
  color: #fff;
}
.home /deep/.van-tab {
  color: #fff;
}
.home /deep/.van-tab--active {
  color: #fff;
}
.home /deep/[class*="van-hairline"]::after {
  border: none;
}
.home /deep/.van-tabs__line {
  background-color: #fff;
  bottom: 20px;
  width: 37.5px !important;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe {
  overflow: hidden;
}
.top {
  height: 120px;
  background-color: #d44439;
}
</style>