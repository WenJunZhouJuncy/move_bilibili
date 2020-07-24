<template>
 <div class="editInfo">
    <van-cell-group>
      <div class="headerImgCell">
        <van-uploader :after-read="afterRead" preview-size="100vw" class="uploaderImg" />
        <van-cell is-link title="头像">
          <img
            v-if="userInfo.user_img"
            @click.stop="ImgPreview"
            style=" border-radius: 50%; width: 10vw; height: 10vw"
            :src="userInfo.user_img"
             class="headerImg"
          />
          <img
            v-else
            @click.stop="ImgPreview"
            style=" border-radius: 50%; width: 10vw; height: 10vw"
            :src="require('@/assets/img/defheader.png')"
             class="headerImg"
          />
        </van-cell>
      </div>
      <van-cell is-link title="昵称" :value="userInfo.name" @click="handleCell('昵称')" />
      <van-cell is-link title="账号" :value="userInfo.username" @click="handleCell('账号')" />
      <van-cell is-link title="性别" :value="userInfo.gender" @click=" showSheet = true " />
      <van-cell is-link title="个性签名" :value="userInfo.user_desc" @click="handleCell('个性签名')" />
    </van-cell-group>
    <div class="btn_box">
      <van-button color="var(--themeColor)" block plain @click="handleExit">退出登录</van-button>
      <van-button color="var(--themeColor)" block plain @click="$router.go(-1)">返回空间</van-button>
    </div>

    <van-dialog v-model="showDialog" :title="dialogTitle" show-cancel-button @confirm="dialogConfirm">
      <van-field autofocus :type="dialogTitle === '修改个性签名' ? 'textarea' : 'text'" v-model="text" />
    </van-dialog>
    <van-action-sheet
      v-model="showSheet"
      :actions="genderList"
      cancel-text="取消"
      close-on-click-action
      @cancel=" showSheet = false "
      @select="handleGender"
    />
 </div>
</template>

<script>
import Vue from 'vue';
import $COOKIES from '@/assets/js/common/token.js'
import { 
  Cell, 
  CellGroup, 
  field, 
  Image as VanImage, 
  Toast, 
  Dialog, 
  ImagePreview, 
  Uploader, 
  ActionSheet } from 'vant';
Vue.use(Cell)
.use(CellGroup)
.use(field)
.use(VanImage)
.use(Toast)
.use(Dialog)
.use(ImagePreview)
.use(Uploader)
.use(ActionSheet);
export default {
  name: 'editInfo',
  data() {
    return {
      userInfo: {

      },
      showDialog: false,
      dialogTitle: '',
      text: '',

      showSheet: false,
      genderList: [{ name: '男', val: 1}, { name: '女', val: 0}],
    }
  },
  components: {
    
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    handleCell(title) {
      this.dialogTitle = '修改' + title
      switch(title) {
        case '账号':
          Toast.fail('账号不能修改')
          break;
        case '昵称':
          this.text = this.userInfo.name
          this.showDialog = true
          break;
        case '个性签名':
          this.text = this.userInfo.user_desc
          this.showDialog = true
          break;
        default : break;
      }
    },
    dialogConfirm() {
      if (this.dialogTitle === '修改个性签名') {
        this.userInfo.user_desc = this.text
      } else {
        this.userInfo.name = this.text
      }
      this.editUserInfo()
    },
    handleGender(genderItem) {
      this.userInfo.gender = genderItem.name
      this.editUserInfo()
    },
    getUserInfo() {
      this.$api.user().then(res => {
        this.userInfo = res.data[0]
      })
    },
    ImgPreview() {
      if (!this.userInfo.user_img) {
        return
      }
      ImagePreview({
        images: [this.userInfo.user_img],
        showIndex: false,
        loop: false
      });
    },
    editUserInfo() {
      this.$api.editUserInfo(this.userInfo).then(res => {
        if (res.data.code === 200) {
          Toast.success('修改成功')
        }
      })
    },
    afterRead(File) {
      const toast1 = Toast({
        type: 'loading',
        message: '上传中...',
        duration: 0,
        forbidClick: true
      })
      let file = new FormData()
      file.append('file',File.file)
      this.$api.uploaderHeaderImg(file).then(res => {
        this.userInfo.user_img = res.data.url
        this.editUserInfo()
        toast1.clear()
      })
    },

    handleExit() {
      Dialog.alert({
        title: '退出登录',
        message: '您确定要退出登录吗？',
        showConfirmButton: true,
        showCancelButton: true,
      }).then(() => {
        Toast.success('已退出登录')
        $COOKIES.removeToken('admin')
        $COOKIES.removeToken('id')
        $COOKIES.removeToken('headerImg')
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
    .headerImgCell{
      position: relative;
      overflow: hidden;
      .uploaderImg{
        position: absolute;
        opacity: 0;
        z-index: 99;
      }
      .headerImg{
        position: relative;
        z-index: 100;
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