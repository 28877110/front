<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="车辆名字"
      width="180">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格"
      width="180">
    </el-table-column>
    <el-table-column
      prop="surplus"
      label="剩余"
      width="180">
    </el-table-column>
    <el-table-column
      prop="describe"
      label="描述">
    </el-table-column>
  </el-table>
</template>

<script>
import service from '@/utils/request.js'
export default {
  created: function () {
    service.get('/api/cars')
      .then((response) => {
        console.log(response)
        this.tableData = response.results
      })
  },
  data () {
    return {
      tableData: []
    }
  }
}
</script>

<style scoped>

</style>
