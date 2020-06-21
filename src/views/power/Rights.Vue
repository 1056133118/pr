<template>
  <div id="Rights">
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Rights',
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss" scoped></style>
