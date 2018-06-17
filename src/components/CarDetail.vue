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
    <van-goods-action>
      <van-goods-action-mini-btn icon="chat" text="客服" @click="onClickMiniBtn" />
      <van-goods-action-mini-btn icon="cart" text="购物车" @click="onClickMiniBtn" />
      <van-goods-action-big-btn text="立即购买" @click="onClickBigBtn" primary />
    </van-goods-action>
  </div>
</template>

<script>
import DetailHeader from '@/components/DetailHeader.vue'
import { ImagePreview } from 'vant'
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
  methods: {
    onClickMiniBtn () {
      console.log('onClickMiniBtn')
    },
    onClickBigBtn () {
      ImagePreview([
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ])
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
