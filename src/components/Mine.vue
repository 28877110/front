<template>
  <div>
    <DetailHeader></DetailHeader>
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item title="我的记录" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
    </el-collapse>
    <BottomNav></BottomNav>
  </div>
</template>
<script>
import DetailHeader from '@/components/DetailHeader.vue'
import BottomNav from '@/components/BottomNav.vue'
import service from '@/utils/request.js'
export default {
  data () {
    return {
      activeNames: '1'
    }
  },
  created () {
    service.get('api/index')
      .then((response) => {
        console.log(response)
      })
  },
  methods: {
    getIndex () {
      service.get('/api/index')
        .then((response) => {
          console.log(response)
        })
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
