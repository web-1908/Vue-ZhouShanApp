<template>
    <div class="container">
        <div class="back">
            <router-link to="Map">
                <span><img src="http://127.0.0.1:4000/箭头.png"></span>
            </router-link>
            <span class="YOU">YOU 地图</span>
        </div>
         <!-- 搜索框 -->
        <van-search placeholder="请输入搜索关键词" v-model="value" />
        <!-- 内容部分 -->
        <div class="tabs">
       <van-tabs v-model="activeName">
          <van-tab title="风景特色" name="a">
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/6.jpg">
            <p class="tabs-pp">舟山.无敌长桥</p>
          </div>
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/9.jpg">
            <p class="tabs-pp">舟山.深林奇妙屋</p>
          </div>
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/3.jpg">
            <p class="tabs-pp">舟山.阳光向日葵</p>
          </div>
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/8.jpg">
            <p class="tabs-pp">小龙坎火锅·春熙店</p>
          </div>
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/5.jpg">
            <p class="tabs-pp">园里火锅·天府三街店</p>
             <button>查看更多</button>
          </div>
          </van-tab>
          <van-tab title="活动" name="b">
            <p class="h">亲 -.- 活动还未开启呦</p>
          </van-tab>
           <van-tab title="图文" name="c">
             <img src="http://localhost:4000/10.jpg">
            <div class="tabs-p">
              <p>成都茂业JW独独万豪酒店喜获第十六届 【金枕头奖】"2019年度中国最受欢迎商务酒店"</p>
              <img class="icon-img" src="http://localhost:4000/eye.png"><p class="icon-img-p">10</p>
            </div>
            <img src="http://localhost:4000/11.jpg">
            <div class="tabs-p">
              <p>因为好奇，我走进了这家有画廊和理发厅的酒店</p>
              <img class="icon-img" src="http://localhost:4000/eye.png"><p class="icon-img-p">0</p>
            </div>
            <img src="http://localhost:4000/12.jpg">
            <div class="tabs-p">
              <p>一张成都最佳疗愈温泉酒店List</p>
              <img class="icon-img" src="http://localhost:4000/eye.png"><p class="icon-img-p">0</p>
            </div>
             <img src="http://localhost:4000/13.jpg">
            <div class="tabs-p">
              <p>雪山、冰川、日照金山、最原始的温泉酒店</p>
              <img class="icon-img" src="http://localhost:4000/eye.png"><p class="icon-img-p">0</p>
            </div>
             <img src="http://localhost:4000/8.jpg">
            <div class="tabs-p">
              <p>融于万亩森林公园的私藏温泉酒店</p>
              <img class="icon-img" src="http://localhost:4000/eye.png"><p class="icon-img-p">0</p>
            </div>
            <button>查看更多</button>
            
          </van-tab>
          <van-tab title="地图" name="d">
            <div class="lwh">
              <img src="http://localhost:4000/parent.png">
              <p class="h">这里空空如也，没有草原和野马</p>
            </div>
          </van-tab>
    </van-tabs>
    </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            value:"",
            activeName:"a",
        }
    },
}
</script>
<style scoped>
    .container{
        margin:0 10px;
    }
    /* 顶部返回 */
    .back{
        margin-top:10px;
        margin-bottom:0px;
        position: relative;
    }
    /* 顶部YOU字体 */
    .YOU{
        position: absolute;
        font-size: 18px;
        font-weight: bold;
        font-family: '宋体';
        left:50%;
        margin-left:-37px;
    }
    /*图片*/
    .tabs img{
        height:200px;
        width:100%;
    }

    .tabs img{
    width: 90%;
    height: 200px;
    margin-left: 5%;
    border-radius: 8px
  }
  .tabs .icon-img{
    width: 16px;
    height: 16px;
    margin-left: 85%;
    margin-top: 3px;
  }
   .tabs .icon-img-p{
   color: #999;
   font-size: 12px;
   margin-left: 90%;
   margin-top: -20px;
   margin-bottom: 5px;
  }
  .tabs-p p{
     width: 90%;
     margin-left: 5%;
     margin-top: 3px;
  }
  button{
    margin-left: 40%;
  }
  .h{
    text-align: center;
    font-size: 24px;
    color:plum;
    font-family: 仿宋;
  }
  .lwh img{
    margin-top: 50px;
    margin-left: 45%;
    width: 48px;
    height: 48px;
  }
 
  .tabs .tabs-img{
    width: 90%;
    height: 190px;
    margin-left: 5%;
    border: 1px solid #aaa;
    border-radius: 8px;
    box-shadow: 0px 0px 4px #aaa;
    margin-bottom: 20px;
  }
   .tabs-img .ti{
    width: 100%;
    height: 150px;
    margin-left: 0%;
    border-radius: 8px 8px 0px 0px;
  }
  .tabs .tabs-img .tabs-pp{
    width: 90%;
    height: 30px;
    margin-left: 35%;
    margin-top: 2px;
  }
</style>


