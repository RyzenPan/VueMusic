<template>
  <div>
    <div class="top">
      <Header />
      <Tab />
      <Slider :bannerDate="bannerDate" />
    </div>
    <Main :personalized="personalized" :newsong="newsong"/>
  </div>
</template>

<script>
import Header from '@/components/HomeHeader'
import Tab from '@/components/HomeTab'
import Slider from '@/components/HomeSlider'
import Main from '@/components/HomeMain'

import {getBanner,getNewsong,getPersonalized} from "@/api/HomeApi"
export default {
  components: {
    Header,
    Tab,
    Slider,
    Main
  },
  data () {
    return {
      bannerDate:[],
      personalized:[],
      newsong:[]
    }
  },
  mounted(){
    this.getBannerData()
    this.getSongData()
  },
  methods:{
    async getBannerData(){
      const res = await getBanner()
      this.bannerDate = res.data.banners
      console.log(res.data.banners);
    },
    async getSongData() {
      const res = await getPersonalized()
      this.personalized = res.data.result
      const res1 = await getNewsong()
      this.newsong = res1.data.result
    }
  }
}
</script>

<style lang="less" scoped>
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
  height: 210px;
  background-color: #d44439;
}
</style>