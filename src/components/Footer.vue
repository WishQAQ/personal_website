<template>
  <div class="footer">
    <div class="footer_left">
      <div @click="jumpResume()" class="jump_button footer_contact">Contact</div>
      <div class="footer_record_number"></div>
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
    font-size: 13px;
    .footer_left{
      >*:not(:last-child){
        margin-right: 15px;
      }
      .footer_contact{
        color: unset;
        &:hover{
          opacity: unset;
        }
      }
      .footer_record_number{

      }
    }
  }
</style>