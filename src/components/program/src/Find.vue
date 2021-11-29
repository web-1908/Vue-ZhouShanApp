<template>
<div id="container">
  <!-- 搜索框 -->
  <van-search class="search" placeholder="请输入搜索关键词" v-model="value" @focus="search" :class="{hidden:hid}"/>
  <!-- 轮播图 -->
 <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img :src="index" class="limg" v-lazy="image" />
  </van-swipe-item>
</van-swipe>
<p class="p-font">指南</p>

  <div class="i-con">
    <ul>
      <li>
        <router-link :to="{path:'/Guide'}">
          <img src="http://localhost:4000/博物馆1.png" alt="">
        </router-link>
        <span>博物馆
        </span>
      </li>
      <li>
        <router-link :to="{path:'/Guide'}">
          <img src="http://localhost:4000/公园1.png" alt="">
        </router-link>
        <span>公园</span>
      </li> 
      <li>
        <router-link :to="{path:'/Guide'}">
          <img src="http://localhost:4000/古镇民俗1.png" alt=""></router-link><span>古镇民俗</span></li>
      <li>
        <router-link :to="{path:'/Guide'}">
          <img src="http://localhost:4000/文化街区1.png" alt=""></router-link><span>文化街区</span></li>
      <li>
        <router-link :to="{path:'/Guide'}">
          <img src="http://localhost:4000/咖啡1.png" alt=""></router-link><span>咖啡</span></li>
    </ul>
    <ul>
      <li>
        <router-link :to="{path:'/Guide'}">
          <img src="http://localhost:4000/景点景区1.png" alt=""></router-link><span>景点景区</span></li>
      <li>
        <router-link :to="{path:'/Guide'}">
          <img src="http://localhost:4000/酒店民宿1.png" alt=""></router-link><span>酒店民宿</span></li>
      <li>
        <router-link :to="{path:'/Guide'}">
          <img src="http://localhost:4000/餐饮1.png" alt=""></router-link><span>餐厅</span></li>
      <li>
        <router-link :to="{path:'/Guide'}">
          <img src="http://localhost:4000/茶饮1.png" alt=""></router-link><span>茶饮</span></li>
      <li>
        <!-- <router-link to=/Guide> -->
          <img src="http://localhost:4000/阅读空间1.png" alt="" @click='t'>
        <!-- </router-link> -->
        <span>阅读空间</span>
      </li>
    </ul>
  </div>

  <div class="tabs">
    <van-tabs>
      <van-tab v-for="(item,i) of ti" :title="item.title" :key="i">
           <img :src="item.simg">
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
      <p class="footer-nh-ch-p0">距离你 5344米</p>
      <img src="http://localhost:4000/3.jpg">
      <p class="footer-nh-ch-p">沙河绿道东郊记忆节点</p>
    </div>
    <div class="footer-nh-ch1">
      <div class="footer-nh-ch1-img1">
        <p class="footer-nh-ch1-p0">这里很美 你来么</p>
        <img src="http://localhost:4000/11.jpg"></div>
      <div class="footer-nh-ch1-img2">
        <p class="footer-nh-ch1-p0">有所期待 便好</p>
        <img src="http://localhost:4000/2.jpg"></div>
    </div>  
  </div>

 </div>
 <!--底部导航栏组件 可把里面的图片写成子组件实现切换功能-->
   
     <mt-tabbar fixed v-model="active">
            <mt-tab-item id="tab1" style="color:gray" >
                <img slot="icon" src="http://127.0.0.1:4000/推荐.png" @click="tuiJian">
                推荐
            </mt-tab-item>
            <mt-tab-item id="tab2" style="color:#148bb2">
                <img slot="icon" src="http://127.0.0.1:4000/发现selected.png">
                发现
            </mt-tab-item>
            <mt-tab-item id="tab3" style="color:gray" >
                <img slot="icon" src="http://127.0.0.1:4000/地图.png" @click="map">
                地图
            </mt-tab-item>
            <mt-tab-item id="tab4" style="color:gray" >
                <img slot="icon" src="http://127.0.0.1:4000/我的.png" @click="Login">
                我的
            </mt-tab-item>
            
        </mt-tabbar>
</div>
</template>
<script>
export default {
  data(){
    return{
      active:"tab2",
      ti:[],
      value:"",
      images: [
        'http://localhost:4000/4.jpg',
        'http://localhost:4000/5.jpg',
        'http://localhost:4000/12.jpg',
        'http://localhost:4000/13.jpg'
      ],
      hid:true,
    }
  },
  methods:{
    t(){
      this.$toast("还没写 哈哈");

    },
    tuiJian(){
      this.$router.push("tuiJian");
    },
     Login(){
      this.axios.get("/session")
      .then(res => {
      if(res.data.code==-1){
        this.$router.push("login");
      }else{
        this.$router.push("person");
      }
    });
    },
     map(){
      this.$router.push("map");
    },
    //搜索跳转
    search(){
        this.$router.push('ToSearch');
    }
  },
 created(){
        this.axios.get("/serv").then(res=>{
        // console.log(res.data);
        this.ti=res.data;
         console.log(this.ti);
        })
  },
  mounted(){
            // 监听窗口滚动过的距离
        window.onscroll=()=>{
            //为了保证兼容性，这里取两个值，哪个有值取哪一个
            //scrollTop就是触发滚轮事件时滚轮的高度
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(scrollTop);
            if(scrollTop<50){
                this.hid=true;
            }else{
                this.hid=false;
            }
        }
    },
}
</script>
<style scoped>
#container{
  margin-bottom:60px;
}
#body{
  position: relative;
}
/* 搜索框绝对定位 布局*/
    .search{
        position:fixed;
        width:100%;
        z-index: 10;
    }
  #container .limg{
    width:100%;
    /* height: 100%; */
    height: 200px;
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
    width: 95%;
    margin-left:2%;
    height: 200px;
    box-shadow: 4px 4px 4px #666;
    border-radius: 15px;
  }
.footer{
  display:flex;
  justify-content:space-between;
  width:100%;
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
.footer p:first-child{
    font-size: 22px;
    font-family:'楷体';
    margin-left:8px;
}
.footer p:last-child{
   font-size: 18px;
    font-family:'楷体';
    margin-right: 8px;
}
.footer-nh-ch{
  position: relative;
}
.footer-nh-ch-p{
  position: absolute;
  left: 15px;
  bottom: 5px;
  color: #fff;
  font-size: 18px;
}
.footer-nh-ch-p0{
  position: absolute;
  right: 0px;
  top:-2px;
  /* border: 1px solid #aaa; */
  background-color:rgba(255,255,255,0.3);
  border-radius: 20px 0px 0px 20px;
  font-size: 13px;
  padding: 5px;
  color:#666;
}
.footer-nh-ch1{
  position: relative;
}
.footer-nh-ch1-p0{
  position: absolute;
  right: 0px;
  top:-2px;
  background-color:rgba(255,255,255,0.3);
  border-radius: 20px 0px 0px 20px;
  font-size: 13px;
  padding: 5px;
  color:#666;
}
.footer-nh-ch1-img2 .footer-nh-ch1-p0{
  position: absolute;
  right: 0;
  top:85px;
}
.hidden{
        display: none;
    }
</style>

