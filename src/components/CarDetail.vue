//商品详情页内容
<template>
  <div>
    <detail-header></detail-header>
      <el-carousel height="20rem">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <p class="site-title">汽车</p>
      <p class="site-cont">宝马车。{{token2}}</p>

  </div>
</template>

<script>
import DetailHeader from '@/components/DetailHeader.vue'

export default {
  data () {
    return {

    }
  },
  computed: {
    token2 () {
      return this.$store.state.token
    }
  },
  components: {
    DetailHeader
  }
}
</script>

<style lang="css">

  .el-carousel__item h3 {
    color: #475669;
    font-size: 0.9rem;
    opacity: 0.75;
    line-height: 1.5rem;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
