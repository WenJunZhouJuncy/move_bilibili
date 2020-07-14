<template>
  <div>
    <myHeader></myHeader>
    <router-view />
  </div>
</template>

<script>
import myHeader from '@/components/myHeader'
export default {
  components: {
    myHeader
  }
}
</script>