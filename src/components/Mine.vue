<template>
  <div>
    <DetailHeader></DetailHeader>
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item title="我的记录" name="1">
        <div>{{carname}}</div>
        <div>{{carprice}}万</div>
        <el-button type="primary" @click="buy">购买</el-button>
      </el-collapse-item>
    </el-collapse>
    <el-button type="danger" @click="removeStore" style="width:100%">退出登陆</el-button>
    <BottomNav></BottomNav>
  </div>
</template>
<script>
import { ImagePreview } from 'vant'
import DetailHeader from '@/components/DetailHeader.vue'
import BottomNav from '@/components/BottomNav.vue'
import service from '@/utils/request.js'
export default {
  data () {
    return {
      activeNames: '1',
      carlist: [],
      carprice: '',
      carname: ''
    }
  },
  created () {
    service.post('api/getCar', {
      index: localStorage.getItem('carindex')
    }).then((response) => {
      console.log(response)
      this.carname = response.results.name
      this.carprice = response.results.price
    })
    service.get('api/hello')
      .then((response) => {
        console.log(response)
      })
  },
  methods: {
    getIndex () {
      service.get('/api/hello')
        .then((response) => {
          console.log(response)
        })
    },
    removeStore () {
      this.$store.commit('delToken')
      console.log(this.$store.getters)
      this.$router.push('/')
    },
    buy () {
      const instance = ImagePreview([
        'http://localhost/upload/pay.jpeg'
      ])

      setTimeout(() => {
        instance.close()
      }, 1000)
    }
  },
  components: {
    DetailHeader,
    BottomNav
  }
}
</script>

<style lang="less">
  .user {
    &-poster {
       width: 7.5rem;
       height: 4rem;
       display: block;
    }

    &-group {
       margin-bottom: .3rem;
     }

    &-links {
       padding:15px 0;
       font-size:12px;
       text-align: center;
       background-color: #fff;

      .van-icon {
       display: block;
        font-size: 24px
      }
    }
  }
</style>
