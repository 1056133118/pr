<template>
  <div id="Home">
    <el-container class="home-container">
      <!-- 头部 -->
      <el-header class="el-header">
        <div>
          <img src="../../assets/img/heima.png" alt="" />
          <span>后台管理系统</span>
        </div>
        <el-button type="info" @click="logout">退出</el-button></el-header
      >
      <!-- 页面主题 -->
      <el-container>
        <el-aside :width="collapse ? '64px' : '200px'" class="el-aside">
          <div class="toggle-button" @click="togglebutton">|||</div>
          <!-- 侧边栏菜单 -->
          <el-menu
            background-color="#333744"
            text-color="#fff"
            active-text-color="#409EFF"
            unique-opened
            :collapse="collapse"
            :collapse-transition="false"
            :router="true"
            :default-active="activePath"
          >
            <el-submenu
              :index="item.id + ''"
              v-for="item in menulist"
              :key="item.id"
            >
              <template slot="title">
                <i class="el-icon-location"></i>
                <!-- 一级菜单 -->
                <span>{{ item.authName }}</span>
              </template>
              <el-menu-item-group>
                <!-- 二级菜单 -->
                <el-menu-item
                  :index="'/' + citem.path"
                  v-for="citem in item.children"
                  :key="citem.id"
                  @click="saveNavState('/' + citem.path)"
                >
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <!-- 二级菜单 -->
                    <span>{{ citem.authName }}</span>
                  </template>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="el-main"> <router-view></router-view> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      mag: 'home',
      menulist: [],
      collapse: false,
      activePath: '',
    }
  },
  components: {},
  created() {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  mounted() {},
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    async getMenuList() {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
    },

    togglebutton() {
      this.collapse = !this.collapse
    },

    saveNavState(path) {
      window.sessionStorage.setItem('activePath', path)
    },
  },
}
</script>
<style lang="less" scoped>
#Home {
  height: 100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  background-color: #373d41;
  align-items: center;
  padding-left: 0;
  color: #fff;
  font-size: 20px;
  div {
    display: flex;
    align-items: center;
  }
}

.el-header div {
  display: flex;
  align-items: center;
}

.el-aside {
  background-color: #333744;
}

.el-menu {
  border-right: none;
}

.el-main {
  background-color: #eaedf1;
}

.home-container {
  height: 100%;
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
