<template>
  <div>
    <el-button type="primary" @click = 'getIndex'>主要按钮</el-button>
  </div>
</template>
<script>
import service from '@/utils/request.js'
export default {
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
  }
}
</script>
