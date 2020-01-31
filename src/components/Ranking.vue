<template>
  <div class="Ranking">
    <div class="Ranking_item row" v-for="(item, index) in ranklist" :key="index" v-if="index<4">
      <div class="left">
        <img :src="item.coverImgUrl" style="width:100px;height:100px" alt />
      </div>
      <div class="right">
        <div class="sone_list" v-for="(item1, index) in item.tracks" :key="index">{{index+1}}.{{item1.first}}-{{item1.second}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ranklist: {
      type: Array,
      default: []
    }
  },
  mounted() {
    console.log(this.ranklist);
  }
};
</script>

<style lang="less" scoped>
.row {
  display: flex;
  justify-content: space-between;
}
.Ranking {
  .Ranking_item {
    width: 96%;
    margin-left: 2%;
    margin-top: 5px;
    border-bottom: 1px solid #eee;
    height: 105px;
    .right {
      width: 65%;
      .sone_list {
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>