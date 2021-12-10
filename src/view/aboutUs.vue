<template>
  <div id="aboutUs">
    <img class="bana" src="../static/img/about_banner.png" alt="">
    <div class="content">
      <img class="tb-img" src="../static/img/tb.png" alt="">
      <p class="ct">{{$t('Us.P1.p1')}}</p>
      <p class="ct">{{$t('Us.P2.p2')}}</p>
      <p class="ct">{{$t('Us.P3.p3')}}</p>
      <p class="ct">{{$t('Us.P4.p4')}}</p>
      <p class="ct">{{$t('Us.P5.p5')}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  created(){
    window.sessionStorage.setItem('activeNav',4)
  },
}
</script>
<style lang="less" scoped>
  #aboutUs{
    padding-bottom:167px;
    box-sizing: border-box;
  }
  .bana{
    width: 100%;
  }
  .content{
    width:1200px;
    margin:32px auto 0;
    .tb-img{
      width: 678px;
      height:236px;
      margin:0 auto 16px;
    }
    .ct{
      margin:0 0 12px;
      width: 100%;
      text-align: left;
      font-size: 14px;
      font-family: SourceHanSansCN-Normal, SourceHanSansCN;
      font-weight: 400;
      color: #333333;
      line-height: 24px;
    }
  }
</style>