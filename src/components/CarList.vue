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
      <pros v-bind:key="result.title" v-for="result in results" :price="result.abstract" :title="result.title" :img="result.img"></pros>
    </ul>
  <BottomNav></BottomNav>
  </div>
</template>

<script>
import BottomNav from '@/components/BottomNav'
import Pros from '@/components/props'

export default {
  components: {
    Pros,
    BottomNav
  },
  name: 'show-car',
  data () {
    return {
      input: '大众',
      results: [
        {title: '第一条内容', abstract: '12000', img: 'http://m.360buyimg.com/babel/s211x211_jfs/t3688/270/776223567/128582/fa074fb3/58170f6dN6b9a12bf.jpg!q50.jpg.webp'},
        {title: '接着是第二条', abstract: '2333', img: 'http://m.360buyimg.com/babel/s211x211_jfs/t613/100/1264998035/221234/1a29d51f/54c34525Nb4f6581c.jpg!q50.jpg.webp'},
        {title: '然后是第三条', abstract: '23', img: 'http://m.360buyimg.com/babel/s211x211_jfs/t1258/40/17387560/108696/aced445f/54e011deN3ae867ae.jpg!q50.jpg.webp'},
        {title: '我是最后一条了', abstract: '233', img: 'http://m.360buyimg.com/babel/s211x211_jfs/t2734/15/680373407/215934/3abaa748/572057daNc09b5da7.jpg!q50.jpg.webp'},
        {title: '然后是第5条', abstract: '233333', img: 'http://m.360buyimg.com/babel/s211x211_jfs/t2482/145/1424008556/91991/d62f5454/569f47a2N3f763060.jpg!q50.jpg.webp'},
        {title: '然后是第6条', abstract: '123'},
        {title: '然后是第7条', abstract: '300000'},
        {title: '然后是第8条', abstract: '1111'},
        {title: '然后是第9条', abstract: '13.14'},
        {title: '然后是第10条', abstract: 'wdk'},
        {title: '然后是第11条', abstract: 'qqqq'}
      ]
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
