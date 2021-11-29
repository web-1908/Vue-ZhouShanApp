<template>
  <div id="wo">
    <div id="head">
      <div @click="message">
        <img src="http://localhost:4000/xinxi.png" />
      </div>
      <div @click="set">
        <img src="http://localhost:4000/shezhi.png" />
      </div>
    </div>
    <div id="xinxi">
      <div id="xixin">
        <img :src="img" @click="ziliao"/>
        <h3>{{uname}} 你好,欢迎登录舟山网</h3>
      </div>
      <div class="gz">
            <ul>
                <li>0</li>
                <li>0</li>
                <li @click="collect">{{collectCount}}</li>
            </ul>
            <ul>
                <li>粉丝</li>
                <li>关注</li>
                <li @click="collect">收藏</li>
            </ul>
      </div>
    </div>
   <van-tabs v-model="activeName">
      <van-tab title="图文" name="a">
        <div class="lwh">
          <img src="http://localhost:4000/panda.png">
          <p class="h">这里空空如也，没有草原和野马</p >
        </div>
      </van-tab>
      <van-tab title="动态" name="b">
        <div class="lwh">
          <img src="http://localhost:4000/panda.png">
          <p class="h">想看我动态,门儿都没有</p >
        </div>
      </van-tab>
      <van-tab title="目的地" name="c">
        <div class="lwh">
          <img src="http://localhost:4000/panda.png">
          <p class="h">做个宅男,目的地家里</p >
        </div>
      </van-tab>
      <van-tab title="路线" name="d">
        <div class="lwh">
          <img src="http://localhost:4000/panda.png">
          <p class="h">路痴的世界你不懂...</p >
        </div>
      </van-tab>
  </van-tabs>

  <!--底部导航栏组件 可把里面的图片写成子组件实现切换功能-->
   
     <mt-tabbar fixed v-model="active">
            <mt-tab-item id="tab1" style="color:gray" >
                <img slot="icon" src="http://127.0.0.1:4000/推荐.png" @click="tuiJian">
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
            <mt-tab-item id="tab4" style="color:#148bb2">
                <img slot="icon" src="http://127.0.0.1:4000/我的selected.png">
                我的
            </mt-tab-item>
            
        </mt-tabbar>
  </div>
</template>
<script>
export default {
  created(){ 
    //根据兄弟组件Map传来的vid请求数据！
    this.axios.get("/getperson")
      .then(res=>{
        console.log(res.data);
        this.uname=res.data.data[0].uname;
        this.img=res.data.data[0].img;
      })

    this.axios("/getCollect")
    .then(res=>{
      if(res.data.data.length==0){
        this.collectCount=0;
      }else{
        for(var i=0;i<res.data.data.length;i++){
          this.collectCount=this.collectCount+res.data.data[i].count;
        }
      }
    })
  },

  data() {
    return {
      activeName:'a',
      collectCount:0,//收藏数
      uname:"",//用户名
      img:"",
      active:"tab4",
    };
  },
  methods:{
    //收藏
    collect(){
      this.$router.push("Collect")
    },
    //消息
    message(){
      this.$router.push("xiaoXi");
    },
    //设置
    set(){
      this.$router.push("sheZhi")
    },
    //跳转资料
    ziliao(){
      this.$router.push("ziliao")
    },
    tuiJian(){
      this.$router.push("tuiJian");
    },
     Find(){
      this.$router.push("Find");
    },
     map(){
      this.$router.push("map");
    },
  },
}
</script>
<style  scoped>
#head {
  height: 100px;
  padding: 10px 15px 0 15px;
  display: flex;
  justify-content: space-between;
  background: #eeeded;
}
#head > div > img {
  height: 25px;
  width: 25px;
}
#head div:last-child img{
  margin-right: 8px;
}
#xinxi {
  margin: -65px 18px 0 10px;
  background: #fff;
  padding: 20px;
}
#xixin {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#xixin > img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
#xixin > h3 {
  width: 220px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.gz{
    margin-top: 20px;
   margin-left: 20px;
}
ul {
    display: block;
    overflow: hidden;
    white-space:nowrap;

}
li{
    text-align: center;
    list-style: none;
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    width: 80px;
}
/* 图文，动态，目的地等文字 */
.h{
text-align: center;
font-size: 22px;
color:rgb(80, 77, 74);
font-family: 仿宋;
}
/* 图文，动态，目的地等图片 */
.lwh img{
margin-top: 100px;
margin-left: 40%;
}
</style>