<template>
  <div class="user">
    <div class="bg_box"></div>
    <div class="content_box">
      <div class=content_inner_box>
        <van-image lazy-load fit="cover" round width="28.333vw" height="28.333vw" :src="userInfo.user_img ? userInfo.user_img : require('../../assets/img/userHeadImg.png')" />
        <div>
          <div>
            <div class="after_line">
              <span>0</span>
              <span>粉丝</span>
            </div>
            <div class="after_line">
              <span>0</span>
              <span>关注</span>
            </div>
            <div>
              <span>0</span>
              <span>获赞</span>
            </div>
          </div>
          <div>
            <van-button @click="$router.push({path: '/bilibili/editInfo'})">编辑资料</van-button>
          </div>
        </div>
      </div>

      <div class="datum_box">
        <div class="name_box">
          <span v-text="userInfo.name"></span>
          <span v-if="userInfo.gender" class="iconfont icon-boy"></span>
          <span v-else class="iconfont icon-gir"></span>
        </div>
      </div>

      <div class="tabs_box">
        <van-tabs v-model="tabActive">
          <van-tab title="动态" name="dynamic"></van-tab>
          <van-tab title="视频" name="video"></van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Search, Image as VanImage, Lazyload, Button, Tab, Tabs} from 'vant'
Vue.use(NavBar).use(Search).use(VanImage).use(Lazyload).use(Button).use(Tab).use(Tabs)
export default {
  name: 'user',
  components: {
    NavBar,Search,VanImage,Button,Tab,Tabs
  },
  data() {
    return {
      searchVal: '',
      tabActive: 'dynamic',
      userInfo: {
        user_img: '',
        user_desc: '',
        gender: '',
        name: ''
      },
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    onClickRight() {

    },
    getUserInfo() {
      this.$api.user().then(res => {
        let userData = res.data[0]
        this.userInfo = {
          user_img: userData.user_img,
          user_desc: userData.user_desc,
          gender: userData.gender,
          name: userData.name,
        }
      })
    }
  }
}
</script>

<style lang="less">
.user{
  .bg_box{
    width: 100%;
    height: 33.333vw;
    background-image: url(../../assets/img/userbg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .content_box{
    background: #fff;
    width: 100%;
    height: 29.333vw;
    .content_inner_box{
      padding: 0 3.733vw;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      position: relative;
      top: -2.667vw;
      & div:last-child{
        display: flex;
        flex-direction: column;
        & > div{
          display: flex;
          & > div{
            padding: 1.333vw 5.56vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 4.133vw;
            span:first-child{
              font-size: 4.833vw;
              color: #333;
              margin-bottom: 0.533vw;
              position: relative;
            }
            span:last-child{
              color: #999;
            }
          }
          .after_line{
            span:first-child::after{
              content: ' ';
              position: absolute;
              top: 2.133vw;
              right: -6.933vw;
              width: 0.267vw;
              height: 4.8vw;
              background: #ddd;
            }
          }
        }
      }
      .van-button{
        font-size: 4.267vw;
        height: 8.9vw;
        color: var(--themeColor);
        border: 1px solid var(--themeColor)
      }
    }
    .datum_box{
      background: #fff;
      padding: 5.667vw 3.733vw 3.667vw;
      border-bottom: 0.267vw solid #ddd;
      .icon-boy{
        color: #5aa7f9;
      }
      .icon-gir{
        color: #ff9dc6;
      }
    }

    .tabs_box{
      background: #fff;
      padding-right: 70%;
    }
  }
}
</style>