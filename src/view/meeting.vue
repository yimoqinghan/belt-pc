<template>
  <div id="metting">
    <img class="main-img" :src="$i18n.locale=='zh'?mainImg1:mainImg2" alt="">
    <ul class="list">
      <li class="met" :class="activeMetting == 1?'active':''" @click="changeMet(1)"><span>{{$t("Meet.BV1.v1")}}</span></li>
      <li class="met" :class="activeMetting == 2?'active':''" @click="changeMet(2)"><span>{{$t("Meet.BV2.v2")}}</span></li>
      <li class="met" :class="activeMetting == 3?'active':''" @click="changeMet(3)"><span>{{$t("Meet.BV3.v3")}}</span></li>
      <li class="met" :class="activeMetting == 4?'active':''" @click="changeMet(4)"><span>{{$t("Meet.BV4.v4")}}</span></li>
      <li class="met" :class="activeMetting == 5?'active':''" @click="changeMet(5)"><span>{{$t("Meet.BV5.v5")}}</span></li>
      <li class="met" :class="activeMetting == 6?'active':''" @click="changeMet(6)"><span>{{$t("Meet.BV6.v6")}}</span></li>
      <li class="met" :class="activeMetting == 7?'active':''" @click="changeMet(7)"><span>{{$t("Meet.BV7.v7")}}</span></li>
    </ul>
    <img :class="$i18n.locale=='zh'?'img-zh':'img-en'" :src="$i18n.locale=='zh'?Img1:Img2" alt="">
    <!-- 主会议 -->
    <div class="met-box" v-show="activeMetting == 1">
      <div class="line">{{$t("Meet.M1.m1")}}</div>
      <div class="time">
        <ul class="time-list">
          <li>
            <span class="time-string">08:30-08:35</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet.p1.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet.p1.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">08:35-08:45</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet.p2.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet.p2.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">08:45-08:50</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet.p4.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet.p4.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">08:50-09:00</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet.p5.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet.p5.ct")}}</p>
            </div>
          </li>
        </ul>
        <div class="person">
          <p>Chair：</p>
          <p>Chang-Man ZHOU</p>
        </div>
      </div>
      <div class="line">{{$t("Meet.M11.m11")}}</div>
      <div class="time">
        <ul class="time-list">
          <li>
            <span class="time-string">09:15-09:45</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet.p6.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet.p6.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet.p6.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">09:45-10:15</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet.p7.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet.p7.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet.p7.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">10:15-10:45</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet.p8.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet.p8.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet.p8.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">10:45-11:15</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet.p9.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet.p9.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet.p9.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">11:15-11:45</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet.p10.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet.p10.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet.p10.ct")}}</p>
            </div>
          </li>
        </ul>
        <div class="person">
          <p>Chair：</p>
          <p>Yun-Qing LI</p>
          <p>Chang-Man ZHOU</p>
        </div>
      </div>
      <div class="time">
        <ul class="time-list">
          <li>
            <span class="time-string">12:00-13:30</span>
            <div class="ct">
              <p class="ft rt">Lunch Break</p>
            </div>
          </li>
          <li>
            <span class="time-string">17:45-18:00</span>
            <div class="ct">
              <p class="ft rt">{{$t("Meet.MO2.mo2")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">18:00-20:00</span>
            <div class="ct">
              <p class="ft rt">{{$t("Meet.MO1.mo1")}}</p>
            </div>
          </li>
        </ul>
      </div>
      <img class="meet_bt" src="../static/img/meet_bt.png" alt="">
      <ul class="ps-list">
          <li v-for="item in 10" :key="item">
            <img :src="repFn('meet',item)" alt="">
            <p class="name">{{repNameTxt('meet',item)}}</p>
            <p class="ctt">{{repCTxt('meet',item)}}</p>
          </li>
      </ul>
    </div>
    <!-- 分会场1 -->
    <div class="met-box" v-show="activeMetting == 2">
      <div class="line">{{$t("Meet.M2.m2")}}</div>
      <div class="time">
        <ul class="time-list">
          <li>
            <span class="time-string">13:30-14:00</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet1.p1.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet1.p1.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet1.p1.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">14:00-14:30</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet1.p2.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet1.p2.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet1.p2.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">14:30-15:00</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet1.p3.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet1.p3.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet1.p3.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">15:00-15:30</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet1.p4.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet1.p4.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet1.p4.ct")}}</p>
            </div>
          </li>
        </ul>
        <div class="person">
          <p>Chair：</p>
          <p>Bing-Yin SU</p>
          <p>Shao-Ming Huang</p>
        </div>
      </div>
      <img class="meet_bt" src="../static/img/meet_bt.png" alt="">
      <ul class="ps-list">
          <li v-for="item in 6" :key="item">
            <img :src="repFn('meet1',item)" alt="">
            <p class="name">{{repNameTxt('meet1',item)}}</p>
            <p class="ctt">{{repCTxt('meet1',item)}}</p>
          </li>
      </ul>
    </div>
    <!-- 分会场2 -->
    <div class="met-box" v-show="activeMetting == 3">
      <div class="line">{{$t("Meet.M3.m3")}}</div>
      <div class="time">
        <ul class="time-list">
          <li>
            <span class="time-string">13:30-14:00</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet2.p1.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet2.p1.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet2.p1.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">14:00-14:30</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet2.p2.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet2.p2.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet2.p2.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">14:30-15:00</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet2.p3.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet2.p3.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet2.p3.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">15:00-15:30</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet2.p4.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet2.p4.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet2.p4.ct")}}</p>
            </div>
          </li>
        </ul>
        <div class="person">
          <p>Chair：</p>
          <p>Hong-Quan ZHANG</p>
          <p>Qing-Mei Zhang</p>
        </div>
      </div>
      <img class="meet_bt" src="../static/img/meet_bt.png" alt="">
      <ul class="ps-list">
          <li v-for="item in 5" :key="item">
            <img :src="repFn('meet2',item)" alt="">
            <p class="name">{{repNameTxt('meet2',item)}}</p>
            <p class="ctt">{{repCTxt('meet2',item)}}</p>
          </li>
      </ul>
    </div>
    <!-- 分会场3 -->
    <div class="met-box" v-show="activeMetting == 4">
      <div class="line">{{$t("Meet.M4.m4")}}</div>
      <div class="time">
        <ul class="time-list">
          <li>
            <span class="time-string">13:30-14:00</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet3.p1.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet3.p1.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet3.p1.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">14:00-14:30</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet3.p2.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet3.p2.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet3.p2.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">14:30-15:00</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet3.p3.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet3.p3.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet3.p3.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">15:00-15:30</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet3.p4.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet3.p4.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet3.p4.ct")}}</p>
            </div>
          </li>
        </ul>
        <div class="person">
          <p>Chair：</p>
          <p>Hong-Jin SUI</p>
          <p>Guo-He Tan</p>
        </div>
      </div>
      <img class="meet_bt" src="../static/img/meet_bt.png" alt="">
      <ul class="ps-list">
          <li v-for="item in 6" :key="item">
            <img :src="repFn('meet3',item)" alt="">
            <p class="name">{{repNameTxt('meet3',item)}}</p>
            <p class="ctt">{{repCTxt('meet3',item)}}</p>
          </li>
      </ul>
    </div>
    <!-- 分会场4 -->
    <div class="met-box" v-show="activeMetting == 5">
      <div class="line">{{$t("Meet.M5.m5")}}</div>
      <div class="time">
        <ul class="time-list">
          <li>
            <span class="time-string">15:45-16:15</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet4.p1.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet4.p1.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet4.p1.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">16:15-16:45</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet4.p2.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet4.p2.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet4.p2.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">16:45-17:15</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet4.p3.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet4.p3.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet4.p3.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">17:15-17:45</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet4.p4.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet4.p4.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet4.p4.ct")}}</p>
            </div>
          </li>
        </ul>
        <div class="person">
          <p>Chair：</p>
          <p>Yue WANG</p>
          <p>Qiong-Ying Deng</p>
        </div>
      </div>
      <img class="meet_bt" src="../static/img/meet_bt.png" alt="">
      <ul class="ps-list">
          <li v-for="item in 6" :key="item">
            <img :src="repFn('meet4',item)" alt="">
            <p class="name">{{repNameTxt('meet4',item)}}</p>
            <p class="ctt">{{repCTxt('meet4',item)}}</p>
          </li>
      </ul>
    </div>
    <!-- 分会场5 -->
    <div class="met-box" v-show="activeMetting == 6">
      <div class="line">{{$t("Meet.M6.m6")}}</div>
      <div class="time">
        <ul class="time-list">
          <li>
            <span class="time-string">15:45-16:15</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet5.p1.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet5.p1.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet5.p1.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">16:15-16:45</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet5.p2.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet5.p2.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet5.p2.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">16:45-17:15</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet5.p3.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet5.p3.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet5.p3.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">17:15-17:45</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet5.p4.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet5.p4.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet5.p4.ct")}}</p>
            </div>
          </li>
        </ul>
        <div class="person">
          <p>Chair：</p>
          <p>Jun-Ou YANG</p>
          <p>Xi-Nan Yi</p>
        </div>
      </div>
      <img class="meet_bt" src="../static/img/meet_bt.png" alt="">
      <ul class="ps-list">
          <li v-for="item in 6" :key="item">
            <img :src="repFn('meet5',item)" alt="">
            <p class="name">{{repNameTxt('meet5',item)}}</p>
            <p class="ctt">{{repCTxt('meet5',item)}}</p>
          </li>
      </ul>
    </div>
    <!-- 分会场6 -->
    <div class="met-box" v-show="activeMetting == 7">
      <div class="line">{{$t("Meet.M7.m7")}}</div>
      <div class="time">
        <ul class="time-list">
          <li>
            <span class="time-string">15:45-16:15</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet6.p1.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet6.p1.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet6.p1.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">16:15-16:45</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet6.p2.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet6.p2.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet6.p2.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">16:45-17:15</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet6.p3.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet6.p3.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet6.p3.ct")}}</p>
            </div>
          </li>
          <li>
            <span class="time-string">17:15-17:45</span>
            <div class="ct">
              <p class="ft">{{$t("Meet.personC.pserson.meet6.p4.title")}}</p>
              <p class="pt">{{$t("Meet.personC.pserson.meet6.p4.name")}}</p>
              <p>{{$t("Meet.personC.pserson.meet6.p4.ct")}}</p>
            </div>
          </li>
        </ul>
        <div class="person">
          <p>Chair：</p>
          <p>Wen ZENG</p>
          <p>Chun-Lin Zou</p>
        </div>
      </div>
      <img class="meet_bt" src="../static/img/meet_bt.png" alt="">
      <ul class="ps-list">
          <li v-for="item in 6" :key="item">
            <img :src="repFn('meet6',item)" alt="">
            <p class="name">{{repNameTxt('meet6',item)}}</p>
            <p class="ctt">{{repCTxt('meet6',item)}}</p>
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      mainImg1:require('../static/img/main_metting_zh.png'),
      mainImg2:require('../static/img/main_metting_en.png'),
      Img1:require('../static/img/metting_zh.png'),
      Img2:require('../static/img/meeting_en.png'),
      activeMetting:1,
    }
  },
  created(){
    window.sessionStorage.setItem('activeNav',2)
  },
  methods:{
    changeMet(value){
      this.activeMetting = value
    },
    repFn(file,index){
      console.log(`../static/img/person/${file}/${index}.png`)
      return require(`../static/img/person/${file}/${index}.png`)
    },
    repNameTxt(obj,index){
      return this.$t(`Meet.personC.pserson.${obj}.p${index}.name`)
    },
    repCTxt(obj,index){
      return this.$t(`Meet.personC.pserson.${obj}.p${index}.ct`)
    }
  }
}
</script>
<style lang="less" scoped>
#metting{
  background-color:#fff;
  padding-bottom:150px;
  box-sizing: border-box;
  .main-img{
    width: 100%;
    margin-bottom:13px;
  }
  .img-zh{
    width: 220px;
    height:180px;
  }
  .img-en{
    width:212px;
    height:180px;
  }
  .list{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    box-sizing: border-box;
    margin:43px 0 28px;
    padding:0;
    li{
      width:92px;
      height:92px;
      background: url("../static/img/bm.png") no-repeat center top;
      background-size: 94% 100%;
      font-size: 12px;
      font-family: SourceHanSansCN-Medium, SourceHanSansCN;
      font-weight: 500;
      color:#28428F;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right:42px;
      cursor: pointer;
      
      span{
        line-height: 14px;
        display: inline-block;
        width:62px;
        text-align: center;
      }
    }
    li.active{
      background: url("../static/img/bt.png") no-repeat;
      background-size: 100% 100%;
      color: #FFFFFF;
    }
  }
  .met-box{
    width: 1200px;
    margin:40px auto 0;
    .time{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .person{
        margin-right:52px;
        font-size: 20px;
        font-family: SourceHanSansCN-Normal, SourceHanSansCN;
        font-weight: 400;
        color: #333333;
        p{
         margin-bottom:15px;
         text-align: left;
        }
      }
    }
    .time-list{
      list-style-type: none;
      width: 930px;
      padding:0;
      margin:0;
      box-sizing: border-box;
      li{
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin-bottom:40px;
        .time-string{
          font-size: 28px;
          font-family: SourceHanSansCN-Medium, SourceHanSansCN;
          font-weight: 500;
          color: #333333;
        }
        .ct{
          max-width: 714px;
          word-wrap: break-word;
          font-family: SourceHanSansCN-Medium, SourceHanSansCN;
          font-weight: 500;
          margin-left:59px;
          p{
            font-size: 12px;
            color:#999999;
            text-align: left;
            margin:0;
            margin-bottom:5px;
          }
          p.ft{
            font-size: 24px;
            color: #333333;
            margin-bottom:10px;
            line-height: 32px;
          }
          p.pt{
            font-size: 16px;
            font-weight: 400;
            color: #999999;
          }
          p.rt{
            font-size: 24px;
            font-family: SourceHanSansCN-Medium, SourceHanSansCN;
            font-weight: 500;
            color: #BF3824;
            line-height: 36px;
          }
        }
      }
    }
    .meet_bt{
      width: 243px;
      height:180px;
      margin:22px auto 40px;
    }
  }
  .line{
    height: 34px;
    background-color: rgba(40, 66, 143, 0.3);
    margin-bottom:40px;
    font-size: 16px;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    font-weight: 500;
    color: #28428F;
    line-height: 34px;
  }
  .ps-list{
      list-style-type: none;
      display: flex;
      // justify-content: space-between;
      justify-content: flex-start;
      flex-wrap: wrap;
      width: 1200px;
      margin:0 auto;
      padding:0;
      overflow:hidden;
      li{
        width:285px;
        margin-bottom:40px;
        margin-right:20px;
        img{
          width: 100%;
          height:340px;
          margin-bottom:20px;
        }
        p{
          width: 100%;
          margin:0;
          word-wrap:break-all;
          text-align: left;
        }
        p.name{
          font-size: 16px;
          font-family: SourceHanSansCN-Medium, SourceHanSansCN;
          font-weight: 500;
          color: #28428F;
          line-height: 24px;
          text-align: left;
          margin-bottom:5px;
        }
        p.ctt{
          font-size: 12px;
          font-family: SourceHanSansCN-Regular, SourceHanSansCN;
          font-weight: 400;
          color: #999999;
          line-height: 20px;
        }
      }
      li:nth-child(4n){
        margin-right:0;
      }
    }
  
}
  
</style>