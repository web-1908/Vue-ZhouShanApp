<template>
  <div id="tuijian">
      <!-- 搜索框 -->
        <van-search class="search" placeholder="请输入搜索关键词" v-model="value" @focus="search" :class="{hidden:hid}"/>
        <!-- 轮播图 -->
        <div id="carousel">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(item, index) in images" :key="index">
                    <!-- 轮播图片 -->
                    <img v-lazy="item.src" />
                    <!-- 轮播图标题 -->
                    <div class="carouselTitle">
                        {{item.title}}
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
    <div class="main">
    <div id="quchu">
      <div id="path">
        <span>去处</span>
        <span>
          more
          <img src="http://localhost:4000/you.png" />
        </span>
      </div>
      <div class="quchu">
        <div class="quchu-item" v-for="(item,i) in gos" :key="i">
          <img :src="item.img" class="each-img" />
          <div id="biaoqian">
            <div class="wenzi">
              <span>{{item.titel}}</span>
              <div class="qname">{{item.dname}}</div>
              <div class="wz">
                <img src="http://localhost:4000/dingwei.png" />
                <span class="qwz">{{item.location}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="luxian">
      <div id="path2">
        <span>路线</span>
        <span>
          more
          <img src="http://localhost:4000/you.png" />
        </span>
      </div>
      <div class="luxian2">
        <div class="luxian-item" v-for="(item,i) in gos" :key="i">
          <img :src="item.img" class="each-img" />
          <div id="biaoqian2">
            <div class="title1">
              <span>{{item.titel}}</span>
              <div class="lname">{{item.dname}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="lxtu">
        <img src="http://localhost:4000/15.jpg" />
      </div>
    </div>
    <div id="chenshi">
      <div id="path">
        <span>城事</span>
        <span>
          more
          <img src="http://localhost:4000/you.png" />
        </span>
      </div>
     
      <div class="chengshi">
        <div class="chengshi-item" v-for="(item,i) in chengshi" :key="i">
          <img :src="item.img" class="each-img" />
          <div id="biaoqian3">
            <div class="wenzi2">
              <span>{{item.comment}}</span>
             
              <div id="wz2">
                <span>{{item.tiems}}</span>
                <span>{{item.diqu}}</span>
              </div>
            </div>
          
        </div>
      </div>
      </div>
    </div>
    <div id="path">
        <span>游客</span>
        <span>
          more
          <img src="http://localhost:4000/you.png" />
        </span>
    </div>
    <div id="youke">
      <div id="f1">
        <div class="dongtai" v-for="(item,i) in youke" :key="i">
          <img :src="item.imgurl" class="tp" />
          <span id="fabiao">{{item.comment}}</span>
          <div class="gr">
            <span class="touxiang">
              <img :src="item.img" />
              <span>{{item.uname}}</span>
            </span>
            <span>
              3
              <img src="http://localhost:4000/xin.png" />
            </span>
          </div>
        </div>
      </div>
    </div>
 <!--底部导航栏组件 可把里面的图片写成子组件实现切换功能-->
   
     <mt-tabbar fixed v-model="active">
            <mt-tab-item id="tab1" style="color:#148bb2">
                <img slot="icon" src="http://127.0.0.1:4000/推荐selected.png">
                推荐
            </mt-tab-item>
            <mt-tab-item id="tab2" style="color:gray" >
                <img slot="icon" src="http://127.0.0.1:4000/发现.png" @click="Find">
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
  </div>


  
   
        
</template>
<script>
export default {
  data() {
    return {
      images: [],
      items: [],
      gos: [],
      youke:[],
      active:"tab1",
      value:"",
      chengshi:[],
      hid:true,
    };
  },
  methods:{
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
     Find(){
      this.$router.push("/Find");
    },
     map(){
      this.$router.push("Map");
    },
     //搜索跳转
        search(){
            this.$router.push('ToSearch');
        }
  },
  created() {
    // 轮播图
    this.axios.get("/banImg").then(res => {
      this.images = res.data.data;
    });
    //去处
    this.axios.get("/go").then(res => {
      this.gos = res.data.data;
    });
    // 路线
    this.axios.get("/items").then(res => {
      this.items = res.data.data;
    });
    // 城事
    this.axios.get("/chengshi").then(res => {
      this.chengshi= res.data.data;
    });
    // 游客
    this.axios.get("/youke").then(res => {
      this.youke= res.data.data;
    });
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
};
</script>
<style  scoped>
#tuijian {
  margin-bottom: 65px;
  
}
.main{
  margin:0 10px;
}
 /* 搜索框绝对定位 布局*/
    .search{
        position:fixed;
        width:100%;
        z-index: 10;
        
    }
/*轮播图*/
#carousel img {
  width: 100%;
  height: 210px;
}
   /* 轮播图标题 */
    .carouselTitle {
        font-size: 23px;
        color:white;
        font-family: '楷体';
        position:absolute;
        left:20%;
        top:80%;
        z-index:20;
        border-radius: 4px;
    }
/* 去处 */
#quchu,#chenshi {
  margin: 30px 0px 30px 0px;
}
#path {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  /* margin-right: 15px; */
}
#path img {
  width: 10px;
  height: 10px;
}
.quchu {
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
}
.quchu-item:first-child {
  margin-left: 0px;
}
.quchu-item {
  display: flex;
  width: 160px;
  margin-left: 15px;
  box-shadow: 4px 4px 5px #999;
}
.each-img {
  width: 160px;
  height: 190px;
}
.quchu::-webkit-scrollbar {
  display: none;
}
/* 文字部分 */
#biaoqian {
  white-space: nowrap;
  position: relative;
  left: -160px;
  width: 160px;
  background-color: rgba(0, 0, 0, 0.2);
}
.wenzi {
  position: relative;
  bottom: -120px;
}
.wenzi > span {
  background-color: rgba(185, 183, 183, 0.5);
  margin-left: 5px;
  border-radius: 10%;
  font-size: 13px;
  margin-bottom: 5px;
}
.qname {
  color: #fff;
  margin-left: 5px;
  font-size: 15px;
}
.wz {
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 13px;
}
.wz > img {
  width: 20px;
}
.qwz {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/* 路线 */
#path2 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
#path2 img {
  width: 10px;
  height: 10px;
}
#luxian {
  margin: 30px 0px 30px 0px;
}
.luxian2 {
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
}
.luxian-item:first-child {
  margin-left: 0px;
}
.luxian-item {
  display: flex;
  width: 120px;
  margin-left: 10px;
  box-shadow: 4px 4px 5px #999;
}
.luxian-item > .each-img {
  width: 120px;
  height: 80px;
}
.luxian::-webkit-scrollbar {
  display: none;
}

#biaoqian2 {
  white-space: nowrap;
  position: relative;
  top:20px;
    left:-100px;
    color: #fff;
  /* background-color: rgba(0, 0, 0, 0.2); */
}
/* .titel{

} */
.title1>span{
    font-size: 16px;

}
.lname{
font-size: 13px;
}
.lxtu > img {
    margin-top: 20px;
  width:100%;
  height: 120px;
}

/* 城事 */
.chengshi{
display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
}
.chengshi-item{
   display: flex;
  width: 160px;
 height: 200px;
  margin-left: 15px;
  box-shadow: 4px 4px 5px #999; 
}
.chengshi-item:first-child {
  margin-left: 0px;
}
.chengshi-item>.each-img{
    width: 160px;
    height: 140px;
}
.chengshi::-webkit-scrollbar {
  display: none;
}
#biaoqian3{
    
  position: relative;
  left: -160px;
 top: 140px;
 padding: 5px;
 width: 100%;
}
.wenzi2>span{
     width: 150px;
overflow: hidden;
  text-overflow: ellipsis; /* 文本溢出时显示省略号来代表被修剪的文本 */
  display: -webkit-box; /* 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 */
  -webkit-box-orient: vertical; /* 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 */
  -webkit-line-clamp: 2; /* 文本需要显示多少行 */
font-size: 15px;
}
#wz2{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
}

/* 游客 */
#youke {
  display: flex;
  flex-direction: column;
  margin-bottom:60px;
}
#f1 {
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  margin: 5 10px;
  justify-content: space-between;
}
.dongtai {
  width: 48%;
  margin-top: 10px;
  box-shadow: 2px 3px 5px #999;
}
.tp {
  width: 100%;
}
#fabiao {
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis; /* 文本溢出时显示省略号来代表被修剪的文本 */
  display: -webkit-box; /* 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 */
  -webkit-box-orient: vertical; /* 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 */
  -webkit-line-clamp: 2; /* 文本需要显示多少行 */

  font-size: 13px;
}
.gr {
  margin-top: 10px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.touxiang > img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
}
.gr span {
  display: flex;
  font-size: 12px;
}
.gr img {
  width: 20px;
  height: 20px;
}
.hidden{
        display: none;
    }
</style>