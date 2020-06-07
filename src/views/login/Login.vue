<template>
  <div id="login" class="login_container">
    <div class="login_container_two">
      <!-- 头像区 -->
      <div class="loginItem">
        <img src="../../assets/img/logo.png" alt="" />
      </div>
      <!-- 表单区 -->
      <div>
        <el-form
          ref="loginEromRef"
          :model="loginFrom"
          label-width="0px"
          class="login_from"
          :rules="rules"
        >
          <!-- 用户名 -->
          <el-form-item prop="username">
            <el-input
              prefix-icon="el-icon-user"
              v-model="loginFrom.username"
            ></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input
              prefix-icon="el-icon-lock"
              v-model="loginFrom.password"
              type="password"
            ></el-input>
          </el-form-item>
          <!-- 按钮 -->
          <el-form-item class="btns">
            <el-button type="primary" @click="refLogin" round>登陆</el-button>
            <el-button type="primary" @click="refClick" round>重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginFrom: {
        username: 'admin',
        password: '123456',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    //点击重置按钮
    refClick() {
      this.$refs.loginEromRef.resetFields()
    },
    refLogin() {
      this.$refs.loginEromRef.validate(async (valid) => {
        if (!valid) {
          return
        }
        const { data: res } = await this.$http.post('login', this.loginFrom)
        console.log(res)
        //判断状态
        if (res.meta.status != 200) {
          return this.$message.error(res.meta.msg)
        }
        this.$message.success(res.meta.msg)
        // 保存token 到浏览器
        window.sessionStorage.setItem('token', res.data.token)
        this.$router.push('/home')
      })
    },
  },
}
</script>
<style scoped>
.login_container {
  background-color: #5c8cbd;
  height: 100%;
}
.login_container_two {
  position: absolute;
  width: 500px;
  height: 350px;
  background-color: #fff;
  left: 50%;
  top: 50%;
  box-shadow: 0 0 10px #ddd;
  border-radius: 2.5%;
  transform: translate(-50%, -50%);
}
.loginItem {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 125px;
  height: 125px;
  box-shadow: 0 0 10px #ddd;
  border-radius: 50%;
  padding: 10px;
  transform: translate(-50%, -165%);
  background-color: #fff;
}
.loginItem img {
  width: 125px;
  height: 125px;
  border-radius: 50%;
  box-shadow: 0 0 10px #ddd;
}

.btns {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_from {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
