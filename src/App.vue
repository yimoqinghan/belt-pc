<template>
  <div id="app">
    <el-container>
      <el-header height="80px">
        <img class="logo" src="./static/img/logo.png" alt="">
        <el-menu :default-active="activeIndex" :router="true" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1" :route="{path:'/home'}" >{{$t('nav.home.HOME')}}</el-menu-item>
          <el-menu-item index="2" :route="{path:'/metting'}" >{{$t('nav.home.InternationalCongre')}}</el-menu-item>
          <el-menu-item index="3">{{$t('nav.home.newsEvents')}}</el-menu-item>
          <el-menu-item index="4">{{$t('nav.home.AboutBRIIUA')}}</el-menu-item>
          <el-menu-item index="5">{{$t('nav.home.CAST')}}</el-menu-item>
        </el-menu>
        <div class="language-box" @click="changeLanguage">
          <img class="language-icon" src="./static/img/language_ch.png" alt="">
          <span>{{$i18n.locale=='zh'?'English':'中文'}}</span>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      activeIndex: '1',
    }
  },
  created(){
    if(window.sessionStorage.getItem('activeNav')){
      this.activeIndex = window.sessionStorage.getItem('activeNav')
    }
  },
  methods:{
    changeLanguage(){
        /* this.$i18n.locale=='zh'?this.$i18n.locale='en':this.$i18n.locale='zh'   //设置中英文模式
        localStorage.setItem('languageSet',this.$i18n.locale)   //将用户设置存储到localStorage以便用户下次打开时使用此设置 */
    },
  }
}
</script>

<style lang="less" scoped>
html,body,#app{
  /* height:100%; */
  box-sizing: border-box;
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#app .el-container{
  height:100%;
}
#app .el-menu-item{
  font-size:18px;
  color:#565C66;
  padding:0 26px;
  height:80px;
  line-height: 74px;
  box-sizing: border-box;
  border-bottom:none;
}
#app .el-menu.el-menu--horizontal{
  border-bottom: none;
}
#app .el-menu--horizontal>.el-menu-item.is-active{
  border-bottom:6px solid #28428F;
}
#app .el-header{
  width: 100%;
  height:80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#app .el-main{
  width: 1920px;
  margin:0 auto;
  height:calc(100% - 80px);
  background: #fff;
  padding:0;
  box-sizing: border-box;
  position: relative;
}
.logo{
  width:52px;
  height:48.71px;
  margin-right:224px;
}
.language-box{
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:90px;
  cursor: pointer;
  padding-bottom:6px;
  box-sizing: border-box;
  span{
    font-size:16px;
    color:#333333;
  }
}
.language-icon{
  width: 12px;
  height:12px;
  margin-right:5px;
}
</style>
