<template>
  <div class="home">
    <van-tabs v-model="active" sticky animated swipeable>
      <van-tab v-for="item in tabsList" :title="item.title" :key="item._id">
        
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
export default {
  name: 'home',
  data() {
    return {
      active: 2,
      tabsList: [],
    }
  },
  components: {

  },
  created() {
    this.getTabs()
  },
  methods: {
    getTabs() {
      this.$api.category().then(res => {
        this.tabsList = res.data
      })
    }
  }
}
</script>

<style lang="less">
.home{
  
}
</style>