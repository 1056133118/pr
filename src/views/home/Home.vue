<template>
  <div id="Home">
    <el-button type="info" @click="logout">退出,hahah</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      mag: 'home',
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
  },
}
</script>
<style lang="scss" scoped></style>
