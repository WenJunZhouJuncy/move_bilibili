<template>
 <div class="editInfo">
    <van-cell-group>
      <van-cell is-link title="头像" >
        <van-image
          round
          width="10vw"
          height="10vw"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </van-cell>
      <van-cell is-link title="单元格" value="内容" />
      <van-cell is-link title="UID" value="内容" />
      <van-cell is-link title="性别" value="内容" />
      <van-cell is-link title="出生日期" value="内容" />
      <van-cell is-link title="个性签名" value="内容" />
    </van-cell-group>
    <div class="btn_box">
      <van-button color="var(--themeColor)" block plain @click="handleExit">退出登录</van-button>
      <van-button color="var(--themeColor)" block plain @click="$router.go(-1)">返回空间</van-button>
    </div>
 </div>
</template>

<script>
import Vue from 'vue';
import $COOKIES from '@/assets/js/common/token.js'
import { Cell, CellGroup, Image as VanImage, Toast, Dialog } from 'vant';
Vue.use(Cell).use(CellGroup).use(VanImage).use(Toast);
export default {
  name: 'editInfo',
  data() {
    return {

    }
  },
  components: {
    CellGroup,Cell,VanImage
  },
  created() {

  },
  methods: {
    handleExit() {
      Dialog.alert({
        title: '退出登录',
        message: '您确定要退出登录吗？',
        showConfirmButton: true,
        showCancelButton: true,
      }).then(() => {
        Toast.success('已退出登录')
        $COOKIES.removeToken('admin')
        this.$router.push({path: '/loginRegister'})
      })
    }
  }
}
</script>
<style lang="less">
.editInfo{
  .van-cell-group{
    margin: 2.667vw 0;
    .van-cell{
      padding: 2.667vw 2.267vw;
      font-size: 3.733vw;
      display: flex;
      align-items: center;
      .van-cell__value{
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }
  .btn_box{
    margin: 4.667vw 0;
    .van-button{
      border: none;
      height: 11.733vw;
      font-size: 3.733vw;
    }
  }
}
</style>