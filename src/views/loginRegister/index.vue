<template>
  <div class="loginRegister">
    <van-nav-bar
      :title="access ? '登录bilibili':'注册bilibili'"
      :right-text="access ? '点击注册':'点击登录'"
      fixed
      placeholder
      @click-right="onClickRight"
    />
    <van-form @submit="onSubmit" @failed="onFailed">
      <van-field
        style="margin-top: 2.6vw"
        v-if="!access"
        v-model="from.name"
        name="name"
        label="姓名"
        placeholder="姓名"
        :rules="[
          { required: true, message: '请输入姓名' },
        ]"
      />
      <van-field
        :key="key"
        style="margin-top: 2.6vw"
        v-model="from.username"
        name="username"
        label="账号"
        placeholder="账号"
        :rules="[
          { required: true, message: '请填写账号' },
          { required: true, pattern: /^[a-zA-Z0-9]{6,12}$/,  message: '请输入6-12位的字母或数字' }
        ]"
      />
      <van-field
        :key="key + 1"
        v-model="from.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^[a-zA-Z0-9]{6,12}$/, message: '请输入6-12位的字母或数字'}
        ]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          {{access ? '登录' : '注册'}}
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from 'vue';
import $COOKIES from "@/assets/js/common/token";
import { NavBar, Form, Field, Button, Toast } from 'vant';
Vue.use(NavBar).use(Form).use(Field).use(Button).use(Toast)
export default {
  name: "index",
  components: {
    NavBar, Form, Field, Button
  },
  data() {
    return {
      key: new Date().getTime(),
      access: true,
      from: {
        name: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onClickRight() {
      this.access = !this.access
      this.key = new Date().getTime()
      this.from = {
        name: '',
        username: '',
        password: ''
      }
    },
    // 验证不通过
    onFailed() {
      Toast.fail('请填写完整信息!');
    },
    // 验证通过
    onSubmit(values) {
      this.access ? this.login(values) : this.register(values)
    },
    // 注册
    register(data) {
      const toastLoading = Toast.loading({
        message: '正在注册',
        forbidClick: true,
        duration: 0,
        loadingType: 'spinner',
      });
      this.$api.register(data).then(res => {
        toastLoading.clear()
        if(res.data.code === 200) {
          this.access = !this.access
          this.from = {
            name: '',
            username: '',
            password: ''
          }
          Toast.success({
            message: '注册成功!请登录',
            forbidClick: true,
          })
        }else {
          Toast.fail(res.data.msg);
        }
      })
    },
    // 登录
    login(data) {
      const toastLoading2 = Toast.loading({
        message: '正在登录',
        forbidClick: true,
        duration: 0,
        loadingType: 'spinner',
      });
      this.$api.login(data).then(res => {
        toastLoading2.clear()
        if(res.data.code === 200){
          $COOKIES.setToken('admin',res.data.token)
          $COOKIES.setUserId('id',res.data.id)
          this.$router.push({path: '/bilibili/user'})
          Toast.success(res.data.msg)
        }else{
          Toast.fail(res.data.msg);
        }
      })
    }
  }
}
</script>

<style lang="less">
.loginRegister{
  .van-button{
    height: 9.733vw;
    background: var(--themeColor);
    border: none;
  }
  .van-nav-bar__title{
    font-weight: 600;
    color: var(--themeColor);
    font-size: 4.3vw;
  }
}
</style>