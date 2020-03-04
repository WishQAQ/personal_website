<template>
  <div id="app">
    <el-container>
      <el-header>
        <TopNav />
      </el-header>

      <el-main>
        <router-view/>
      </el-main>

      <el-footer>
        <BottomFooter />
      </el-footer>

    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
      'TopNav': () => import('@/components/Nav'), // 导航栏
      'BottomFooter': () => import('@/components/Footer'),  // 页脚
    },
  }
</script>

<style scoped lang="less">

</style>
