<template>
  <div class="content">
    <el-form :inline="true"  class="demo-form-inline">
      <el-form-item>
        <el-input v-model="input" placeholder="搜索" @keyup.enter.native="research"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="research">查询</el-button>
      </el-form-item>
    </el-form>
    <ul class="cont-ul">
      <!-- list组件展示区，并用v-for来将数据遍历，:xx="xxx" 是用来给子组件传递数据的 -->
      <pros v-bind:key="result.name" v-for="(result,index) in results" :price="result.price" :title="result.name" :index="index" :img="result.photo[0]"></pros>
    </ul>
  <BottomNav></BottomNav>
  </div>
</template>

<script>
import BottomNav from '@/components/BottomNav'
import Pros from '@/components/props'
import service from '@/utils/request.js'
export default {
  created () {
    service.get('api/cars')
      .then((response) => {
        console.log(response.results)
        this.results = response.results
      })
  },
  components: {
    Pros,
    BottomNav
  },
  name: 'show-car',
  data () {
    return {
      input: '大众',
      results: ''
    }
  },
  methods: {
    research () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .content {
    margin-bottom: 1rem;
  }
  .cont-ul {
    padding: 0;
    padding-top: 0.5rem;
    background-color: #ccc;
  }
  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
