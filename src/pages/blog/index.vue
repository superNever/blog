/**
* Created by wanghongxiang on 2018/2/6.
 */
<template>
  <div>
    <snActive @go2detail="patchDetail"></snActive>
    <snActive @go2detail="patchDetail"></snActive>
    <snActive @go2detail="patchDetail"></snActive>
    <snActive @go2detail="patchDetail"></snActive>
    <snActive @go2detail="patchDetail"></snActive>
    <snActive @go2detail="patchDetail"></snActive>
    <snActive @go2detail="patchDetail"></snActive>
    <snActive @go2detail="patchDetail"></snActive>
    <snActive @go2detail="patchDetail"></snActive>
  </div>
</template>
<script>
  import snActive from './acticle/index.vue'
  export default {
    name: 'sn-acticle',
    components: {
      snActive
    },
    methods: {
      patchDetail (e) {
        console.log(e.data)
      }
    }
  }
</script>
