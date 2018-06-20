<template>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="username"
        label="用户"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mail"
        label="邮箱"
        width="180">
      </el-table-column>
      <el-table-column
        prop="permission"
        label="权限">
      </el-table-column>
    </el-table>
</template>

<script>
import service from '@/utils/request.js'
export default {
  created: function () {
    service.get('/api/users')
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
