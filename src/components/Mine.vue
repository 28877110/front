<template>
  <div>mine page</div>
</template>
<script>
import Qs from 'axios'
export default {
  created () {
    Qs.get('/api/api/index')
      .then((response) => {
        console.log(response)
      })
    // this.$api.get('/api/index', null, r => {
    //   console.log(r)
    // })
  }
}
</script>
