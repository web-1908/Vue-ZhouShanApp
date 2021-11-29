<template>
  <div class="container">
    <!-- 搜索结果 -->
    <div class="back">
        <span @click="back"><img src="http://127.0.0.1:4000/箭头.png"></span>
        <span class="YOU">搜索结果</span>
    </div>
    <!-- 分割线 -->
    <div class="hrr"></div>
    <!-- 组件内容部分 -->
    <div class="tabs">
       <van-tabs v-model="activeName">
          <van-tab title="点位" name="a">
            <!-- 请求返回数据显示该内容 -->
            <div class="tabs-img" v-if="data.length>0?true:false" v-for="(item,i) of data" :key="i">
              <img class="ti" :src="item.img">
              <p class="tabs-pp">{{item.title}}</p>
            </div>
            <!-- 请求没有数据显示该内容 -->
            <div class="lwh" v-if="data.length>0?false:true">
              <img src="http://localhost:4000/panda.png">
              <p class="h">这里空空如也，没有草原和野马</p>
              <!--<img src="http://localhost:4000/3.jpg">  -->
            </div>
          </van-tab>

          <van-tab title="美文" name="b">
            <div class="lwh">
              <img src="http://localhost:4000/panda.png">
              <p class="h">这里空空如也，没有草原和野马</p>
              <!--<img src="http://localhost:4000/3.jpg">  -->
            </div>
          </van-tab>

          <van-tab title="路线" name="c">
            <div class="lwh">
              <img src="http://localhost:4000/panda.png">
              <p class="h">这里空空如也，没有草原和野马</p>
              <!--<img src="http://localhost:4000/3.jpg">  -->
            </div>
          </van-tab>
    </van-tabs>
    </div>
   
  </div>
</template>
<script>
export default {
  beforeCreate(){
         this.bus.$on("title",(title)=>{
           //根据兄弟组件ToSearch传来的title请求数据！
            this.axios.get("/search",{
              params:{
                title:title,
              }
            }).then(res=>{
              this.data=res.data.data;
              //判断是否接收到数据 改变显示隐藏状态！
            })

        });  
    },
  data(){
    return{
      activeName:'a',//组件默认显示页
      data:[],//请求数据
      hid:"",
    }
  },
   methods:{
      onSearch(){
        if(this.canSearch==true){
        //进来先把门关上，防止后边的人再进来
        this.canSearch=false;
        //先不急于搜索，先等待一段事件用户输入一些内容后，再发送请求，并重新打开开关，允许下次发请求。
        //今后框架中一律首先箭头函数，因为可以保持内外this一致！
        setTimeout(()=>{
          if(this.value.action!==""){
            this.$router.push("/Search")
             console.log(`搜索 ${this.value} 相关的信息...`)
          }
          this.canSearch=true
        },1000)
      }
      },
      onCancel(){
        if(this.value.action!==""){
          this.$router.go(-1);
        }
      },
      back(){
            this.$router.go(-1);
      },
  },
   wacth:{
    value(){
      this.onSearch();
      this.onCancel();
    }
  }
}
</script>
<style scoped>
    .back{
        margin-top:16px;
        margin-bottom:16px;
        position: relative;
    }
    .back span img{
      margin-left:20px;
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

  .hrr{
    width: 90%;
    border: 1px solid #e3e3e3;
    margin-left: 5%;
  }
  .tabs-img{
    margin-top: 10px;
    width: 100%;
    height: 200px;
    margin-left: 5%;
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
    font-size: 22px;
    color:gray;
    font-family: '宋体';
  }
  .lwh img{
    margin-top: 50px;
    margin-left: 40%;
    width: 48px;
    height: 48px;
  }
 
  .tabs .tabs-img{
    width: 90%;
    height: 190px;
    margin-left: 5%;
    border: 1px solid #aaa;
    /* border-radius: px; */
    box-shadow: 0px 0px 4px #aaa;
    margin-bottom: 20px;
  }
   .tabs-img .ti{
    width: 100%;
    height: 150px;
    margin-left: 0%;
    /* border-radius: 8px 8px 0px 0px; */
  }
  .tabs .tabs-img .tabs-pp{
    width: 90%;
    height: 30px;
    margin-left: 35%;
    margin-top: 2px;
  }
</style>
