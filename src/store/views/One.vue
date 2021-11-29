<template>
<div id="container">
  <van-search placeholder="请输入搜索关键词" v-model="value" />
 <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img class="limg" v-lazy="image" />
  </van-swipe-item>
</van-swipe>
<p class="p-font">指南</p>

  <div class="i-con">
    <ul>
      <li><router-link :to="{path:'/guide'}"><img src="http://localhost:4000/icon/公园.png" alt=""></router-link><span><router-link :to="{path:'/guide'}">博物馆</router-link></span></li>
      <li><img src="http://localhost:4000/icon/公园.png" alt=""><span>公园</span></li>
      <li><img src="http://localhost:4000/icon/古镇民俗.png" alt=""><span>古镇民俗</span></li>
      <li><img src="http://localhost:4000/icon/公园.png" alt=""><span>文化街区</span></li>
      <li><img src="http://localhost:4000/icon/公园.png" alt=""><span>咖啡</span></li>
    </ul>
    <ul>
      <li><img src="http://localhost:4000/icon/景点景区.png" alt=""><span>景点景区</span></li>
      <li><img src="http://localhost:4000/icon/酒店民宿.png" alt=""><span>酒店民宿</span></li>
      <li><img src="http://localhost:4000/icon/餐厅.png" alt=""><span>餐厅</span></li>
      <li><img src="http://localhost:4000/icon/公园.png" alt=""><span>博物馆</span></li>
      <li><img src="http://localhost:4000/icon/公园.png" alt=""><span>博物馆</span></li>
    </ul>
  </div>
  <div class="tabs">
    <van-tabs>
      <van-tab v-for="index in ti" :title="index.title" :key="index.title">
          <img :src="index.index">
      </van-tab>
  </van-tabs>
 </div>
 <div class="footer-fh">
  <div class="footer">
    <p>附近</p>
    <p>more ></p>
  </div>
  <div class="footer-nh">
    <div class="footer-nh-ch">
      <img src="http://localhost:4000/6.jpg">
    </div>
    <div class="footer-nh-ch1">
      <div><img src="http://localhost:4000/7.jpg"></div>
      <div><img src="http://localhost:4000/8.jpg"></div>
    </div>  
  </div>
 </div>
</div>
</template>
<script>
export default {
  data(){
    return{
             ti:[ {
          title:"睡在峨眉",
          index: 'http://localhost:4000/5.jpg',
        },
        {
          title:"咖啡美酒",
          index: 'http://localhost:4000/12.jpg',
        },
        {
          title:"天冷涮火锅",
          index: 'http://localhost:4000/13.jpg',
        },
        {
          title:"新晋书店",
          index: 'http://localhost:4000/5.jpg',
        },
        {
          title:"艺术空间",
          index: 'http://localhost:4000/5.jpg',
        },
        {
          title:"宝藏街巷",
          index: 'http://localhost:4000/5.jpg',
        },
        {
          title:"一人好去处",
          index: 'http://localhost:4000/5.jpg',
        },

      ],
      
      value:"",
      images: [
        'http://localhost:4000/4.jpg',
        'http://localhost:4000/5.jpg',
        'http://localhost:4000/12.jpg',
        'http://localhost:4000/13.jpg'
      ]
    }
  },
}
</script>
<style scoped>
#body{
  position: relative;
}
  #container .limg{
    width: 375px;
    /* height: 100%; */
    height: 200px;
  }
  #container .van-search{
    position: absolute;
    top:5px;
    left: 5%;
  }
  #container .van-cell.van-cell--borderless.van-field{
    width: 300px;
    height: 30px; 
    padding-left: 15px;
    background-color: #fff; 
    z-index: 1;
    border-radius: 25px;
  }
  .p-font{
    font-size: 22px;
    font-family:'楷体';
    margin-left:8px;
  }
  .i-con{
    margin-bottom: 20px;
  }
  .i-con ul{
     display: flex;
     justify-content:space-between;
     width: 100%;
  }
  .i-con ul li{
    display: flex;
    flex-direction: column;
     margin: 5px 10px;

  }
  .i-con img{
    height: 32px;
    padding: 10px;
  }
  .i-con span{
    font-size: 14px;
    text-align: center;
    color: #666;
  }
  .tabs img{
    width:375px;
    height:200px;
  }
.footer{
  display:flex;
  justify-content:space-between;
  width:375px;
}
.footer-nh{
  display:flex;
  justify-content:space-between;
}
.footer-nh .footer-nh-ch img{
  width:222px;
  height:184px;
  border-radius:30% 0px 0px 0px;
  /*box-shadow:2px 2px 2px yellow;*/
}
.footer-nh .footer-nh-ch1 img{
  width:150px;
  height:90px;
}
</style>

