//商品详情页内容
<template>
  <div>
    <detail-header></detail-header>
      <el-carousel height="20rem">
        <el-carousel-item v-for="item in photo" :key="item" >
          <div class="goods-list-pic">
            <img :src="item" alt="" >
          </div>
        </el-carousel-item>
      </el-carousel>
      <p class="site-title">车名：{{name}}</p>
      <p class="site-title">价格：{{price}}万</p>
      <p class="site-cont">描述：{{desc}}</p>
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
import service from '@/utils/request.js'
export default {
  created: function () {
    var index = this.$route.query.index
    index = Number(index) + 15
    this.index = index
    service.post('/api/getCar', {
      'index': index
    })
      .then((response) => {
        this.name = response.results.name
        this.desc = response.results.describe
        this.photo = response.results.photo
        this.price = response.results.price
        console.log(response.results)
      })
  },
  data () {
    return {
      name: '',
      photo: '',
      desc: '',
      price: '',
      index: ''
    }
  },
  methods: {
    onClickMiniBtn () {
      console.log('加入购物车成功' + this.index)
      localStorage.setItem('carindex', this.index)
      this.$message({
        message: '加入购物车成功'
      })
    },
    onClickBigBtn () {
      service.post('/api/usertocar', {
        index: this.$route.query.index
      })
        .then((response) => {
          this.$message({
            message: response.reason
          })
        })
      ImagePreview([
        'http://localhost/upload/pay.jpeg'
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
  .goods-list-pic {
    padding: 0.5rem;
  }
  .goods-list-pic > img {
    width: auto;
    height: 20rem;
  }
</style>
