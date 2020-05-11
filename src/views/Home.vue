<template>
  <div class="home">
    <div class="logo"><img src="../assets/logo.png" alt="wujunlong.icu"></div>
    <div class="input_box">
      <vue-typer
        :text="inputText"
        :repeat='0'
        :erase-delay="eraseTextTime"
        :pre-type-delay="enterTextTime"
        :type-delay="textTime"
        @typed='onTyped'
        @erased='onErased'
        @completed='onComplete'>
      </vue-typer>
    </div>
  </div>
</template>

<script>
  import { VueTyper } from 'vue-typer'

  export default {
    name: 'Home',
    components:{
      VueTyper
    },
    data(){
      return {
        inputText: [  // 输入文字内容
          '嗨...',
          '欢迎访问我的网站',
          '对，你没有看错，这是一个虚假的Google首页',
          '我叫吴军龙，如果你遇到一个ID叫Wish的也有可能是我',
          '我的职业是前端开发攻城狮',
          '...',
          '你还在看吗？',
          '现在你可以点击右上角的简历或菜单了解更多关于我的事情'
        ],
        eraseTextTime: 200, // 擦除文字时间
        enterTextTime: 1000, // 首字符输入延迟
        // eraseType: 'backspace', // 擦除文字状态
        textTime: 130, // 输入单个字符延迟
      }
    },
    methods:{
      onTyped(val){
        console.log(val);
      },
      onErased(val){
        // console.log(val);
      },
      onComplete(){
        console.log('text');
      },
    },
  }
</script>
<style scoped lang="less">
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 20vh;
    .logo{
      width: 18.75rem;
      object-fit: contain;
    }
    .input_box{
      min-height: 2.75rem;
      max-width: 36.375rem;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 1rem;
      margin-top: 0.625rem;
      border: 1px solid #dfe1e5;
      border-radius: 1.5rem;
      transition: all .3s;
      &:hover{
        box-shadow: 0 0.0625rem 0.375rem 0 rgba(32,33,36,0.28);
        border-color: rgba(223,225,229,0);
      }
      &::before{
        content: '';
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.25rem;
        width: 1.25rem;
        background: url("../assets/serach.svg") no-repeat;
        object-fit: contain;
        margin-right: 0.8125rem;
        flex-shrink: 0;
      }

    }
  }

</style>
