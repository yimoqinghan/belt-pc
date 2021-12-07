<template>
  <div id="home">
      <img class="main-img" src="../static/img/banner.png" />
      <img class="img1" src="../static/img/home1.png" alt="">
      <img class="img2" src="../static/img/foot.png" alt="">
      <div class="content">
        <div class="content-top">
          <img class="img" src="" alt="">
          <div class="rt">
              <p style="margin-bottom:24px;">{{$t("Home.content1.p1")}}</p>
              <p>{{$t("Home.content2.p2")}}</p>
          </div>
        </div>
        <p class="tt">{{$t("Home.content3.p3")}}</p>
        <p class="tt ts">{{$t("Home.content4.p4")}}</p>
        <p class="tt">{{$t("Home.content5.p5")}}</p>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  },
  methods:{

  }
}
</script>
<style scoped>
  #home{
    padding-bottom:107px;
    box-sizing: border-box;
  }
  .main-img{
    width: 100%;
    height:1000px;
  }
  .img1{
    width: 678px;
    height:236px;
    margin: -54px auto 32px;
    /* position: absolute;
    top:946px;
    left:50%;
    transform: translateX(-50%);
    z-index:1; */
  }
  .img2{
    width: 100%;
    position:absolute;
    left:0;
    bottom: 0;
  }
  .content{
    width: 1200px;
    margin:0 auto;
  }
  .content-top{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom:24px;
  }
  .content-top img{
    width: 500px;
    height:393px;
  }
  .content-top .rt{
    width: 651px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
  }
  p{
    text-align: left;
  }
  .rt p{
    width: 100%;
    margin:0;
    font-size: 14px;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    font-weight: 400;
    color: #333333;
    line-height: 24px;
    text-align: left;
  }
  p.tt{
    font-size: 14px;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    font-weight: 400;
    color: #333333;
    line-height: 24px;
  }
  .ts{
    margin:12px 0;
  }
</style>