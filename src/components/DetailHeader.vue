//商品详情页头
<template>
  <div class="detailHeader">
    <mt-header title="详情">
      <router-link to="/carlist" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    goBack () {
      window.history.back()
    },
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>

</style>
