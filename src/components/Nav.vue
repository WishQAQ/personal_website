<template>
  <!-- 导航栏 -->
  <div class="nav">
    <!-- 导航栏盒子 -->
    <div class="nav_right_box">
      <!-- 简历 -->
      <el-tooltip class="item" effect="dark" content="个人简历" placement="bottom">
        <div class="jump_button" @click="jumpResume()">Resume</div>
      </el-tooltip>
      <!-- 菜单盒子 -->
      <el-popover
        placement="bottom"
        trigger="click">
          <div class="nav_menu_button" slot="reference">
          </div>

      </el-popover>
      <!-- 联系按钮 -->
      <el-tooltip class="item" effect="dark" content="联系我" placement="bottom">
        <div class="contact_button" @click="jumpResume()">Contact</div>
      </el-tooltip>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Nav",
    methods:{
      jumpResume(){  // 跳转简历页面
        this.$message({
          message: '全力施工中，敬请期待',
          iconClass: 'el-icon-truck',
          duration: 1000
        })
      },
    }
  }
</script>

<style scoped lang="less">
  /*导航栏*/
  .nav{
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    /*导航栏盒子*/
    .nav_right_box{
      margin-left: auto;
      display: flex;
      align-items: center;
      font-size: 13px;
      >*:not(:last-child){
        margin-right: 15px;
      }
      /*菜单按钮*/
      .nav_menu_button{
        background: url("../assets/menubutton.png") center center no-repeat;
        width: 22px;
        height: 22px;
        padding: 2px;
        object-fit: contain;
        position: relative;
        cursor: pointer;
        &:hover{
          &::after{
            background: unset;
          }
        }
        &::after{
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background: rgba(255,255,255,.7);
          transition: all .3s;
        }
      }
      /*联系按钮*/
      .contact_button{
        background: #4285f4;
        color: #fff;
        height: 30px;
        padding: 0 13px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 2px;
      }
    }
  }
</style>