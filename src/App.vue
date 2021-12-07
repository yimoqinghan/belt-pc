<template>
  <div id="app">
    <el-container>
      <el-header height="80px">
        <el-menu :default-active="activeIndex" :router="true" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1" :route="{path:'/home'}" >{{$t('nav.home.HOME')}}</el-menu-item>
          <el-menu-item index="2" >{{$t('nav.home.InternationalCongre')}}</el-menu-item>
          <el-menu-item index="3">{{$t('nav.home.newsEvents')}}</el-menu-item>
          <el-menu-item index="4">{{$t('nav.home.AboutBRIIUA')}}</el-menu-item>
          <el-menu-item index="5">{{$t('nav.home.CAST')}}</el-menu-item>
        </el-menu>
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
  }
}
</script>

<style>
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
</style>
