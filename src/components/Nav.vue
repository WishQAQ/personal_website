<template>
  <!-- 导航栏 -->
  <div class="nav">
    <!-- 导航栏盒子 -->
    <div class="nav_right_box">
      <!-- 简历 -->
      <el-tooltip class="item" effect="dark" content="个人简历" placement="bottom">
        <div class="jump_button" @click="jumpNavUrl('/resume',urlType)">Resume</div>
      </el-tooltip>
      <!-- 菜单盒子 -->
      <el-popover
        popper-class="nav_menu_popper"
        placement="bottom"
        trigger="click">
          <div class="nav_menu_button" slot="reference"></div>
          <div class="nav_menu_list">
            <div :class="['nav_box',{'construction': item.status === 1}]"
                 v-for="(item, index) in urlList"
                 :key="index"
                 @click="jumpNavPage(item.url,item.status,item.type)">
              <img :src="item.icon" alt="">
              {{item.name}}
            </div>
          </div>
      </el-popover>
      <!-- 联系按钮 -->
      <el-tooltip class="item" effect="dark" content="联系我" placement="bottom">
        <div class="contact_button" @click="jumpNavUrl('/contact',urlType)">Contact</div>
      </el-tooltip>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Nav",
    data(){
      return {
        urlType: 1,  // 跳转链接状态
        urlList: [{  // 链接列表
          name: 'Blogger',  // 名称
          url: 'http://hellowish.wujunlong.icu/',  // 地址
          status: 0,  // 状态 0正常 1施工中
          type: 1,  // 0内链 1外链
          icon: require('../assets/blogger.png'),  // 图标
        },{
          name: 'Photos',
          url: '/photos',
          status: 1,
          type: 1,
          icon: require('../assets/photos.png'),
        },{  // 链接列表
          name: 'GitHub',
          url: 'https://github.com/WishQAQ',
          status: 0,
          type: 1,
          icon: require('../assets/github.png'),
        }]
      }
    },
    methods:{
      /**
       * @Description: 详情盒子页面跳转
       * @author Wish
       * @date 2020/3/9
      */
      jumpNavPage(val,status,type){
        if(status === 1){
          this.$message({
            message: '全力施工中，敬请期待',
            iconClass: 'el-icon-truck',
            duration: 1000
          })
        }else {
          if(type === 0){
            this.$router.push(val)
          }else {
            window.open(val)
          }
        }
      },

      /**
       * @Description: 导航栏链接跳转
       * @author Wish
       * @date 2020/4/29
      */
      jumpNavUrl(val,type){
        if(type === 1){
          this.$message({
            message: '全力施工中，敬请期待',
            iconClass: 'el-icon-truck',
            duration: 1000
          })
        }else {
          this.$router.push(val)
        }
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
      font-size: 0.8125rem;
      >*:not(:last-child){
        margin-right: 0.9375rem;
      }
      /*菜单按钮*/
      .nav_menu_button{
        background: url("../assets/menubutton.png") center center no-repeat;
        width: 1.375rem;
        height: 1.375rem;
        padding: 0.125rem;
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
        height: 1.875rem;
        padding: 0 0.8125rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 0.125rem;
      }
    }
  }
  /* 菜单盒子 */
  .nav_menu_popper{
    .nav_menu_list{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .nav_box{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 65px;
        height: 65px;
        font-size: 12px;
        text-align: center;
        cursor: pointer;
        transition: all .3s;
        &:hover{
          box-shadow: 0 0 5px 5px rgba(0,0,0,.08);
          position: relative;
          z-index: 1;
        }
        &.construction{
          position: relative;
          &::before{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: url("../assets/construction.png") no-repeat rgba(255,255,255,.8) 5px 5px;
            background-size: 30%;
            cursor: no-drop;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        >img{
          display: block;
          object-fit: contain;
          width: 30px;
          height: 30px;
          margin: 0 auto 5px;
        }
      }
    }
  }
</style>