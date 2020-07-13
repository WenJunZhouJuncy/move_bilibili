<template>
  <div>
    <van-nav-bar
      title="登录"
      right-text="注册账号"
      fixed
      placeholder
      @click-right="onClickRight"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar, Form, Field,Button } from 'vant';
Vue.use(NavBar).use(Form).use(Field).use(Button)
export default {
  name: "index",
  components: {
    NavBar, Form, Field, Button
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onClickRight() {

    },
    onSubmit() {

    }
  }
}
</script>

<style lang="less">

</style>