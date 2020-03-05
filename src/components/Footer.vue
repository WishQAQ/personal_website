<template>
  <div class="footer">
    <div class="footer_left">
      <div @click="jumpResume()" class="jump_button footer_contact">Contact</div>
      <a class="footer_record_number" href="http://www.beian.miit.gov.cn/" target="_blank">
        ICP备案号
      </a>
    </div>
    <div class="footer_right">
      <div class="footer_address">Chongqing, China</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    methods:{
      jumpResume(){
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
  .footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    color: #5f6368;
    font-size: 0.8125rem;
    .footer_left{
      display: flex;
      align-items: center;
      >*:not(:last-child){
        margin-right: 0.9375rem;
      }
      .footer_contact{
        color: unset;
        &:hover{
          opacity: unset;
        }
      }
      .footer_record_number{
        color: #5f6368;
      }
      .footer_record_number{

      }
    }
  }
</style>