<template>
  <div class="myHeader">
    <van-nav-bar fixed placeholder>
      <template #left>
        <span class="iconfont icon-bilibili" @click="$route.path === '/bilibili/home' ? '' : $router.push({path: '/bilibili/home'})"></span>
      </template>
      <template #title>
        <van-search v-model="searchVal" class="search" shape="round" placeholder="请输入搜索关键词" />
      </template>
      <template #right>
        <van-image
          lazy-load
          fit="cover"
          round
          width="7.9vw"
          height="7.9vw"
          :src="user_img ? user_img : require('../assets/img/userHeadImg.png')"
          @click="$route.path === '/bilibili/user' ? '' : $router.push({path: '/bilibili/user'})"
        />
        <van-button size="mini">下载App</van-button>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Search, Image as VanImage, Lazyload, Button} from 'vant'
Vue.use(NavBar).use(Search).use(VanImage).use(Lazyload).use(Button)
export default {
  name: 'myHeader',
  data() {
    return {
      searchVal: '',
      user_img: ''
    }
  },
  components: {
    NavBar, Search, VanImage, Lazyload, Button
  },
  methods: {

  }
}
</script>

<style lang="less">
.myHeader{
  .icon-bilibili{
    font-size: 7.433vw;
    color: var(--themeColor);
  }
  .search{
    width: 80%;
    padding: 0;
  }
  .van-nav-bar__right{
    .van-button{
      padding: 0 2.667vw;
      margin: 0 -2vw 0 1vw;
      height: 6.4vw;
      background-color: var(--themeColor);
        color: #fff
    }
  }
}
</style>