<template>
  <div id="container">
    <div class="fixed">
      <router-link :to="{path:'/Find'}">
      <img class="fixed-pp" src="http://localhost:4000/arrows.png"></router-link>
      <p class="fixed-p">博物馆</p>
      <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
      <div class="tabs">
        <van-tabs v-model="activeName">
        <van-tab title="最新" name="a">
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/1.jpg">
            <p class="tabs-p">舟山草堂博物馆</p>
          </div>
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/2.jpg">
            <p class="tabs-p">成都金沙遗址博物馆</p>
          </div>
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/3.jpg">
            <p class="tabs-p">永陵博物馆</p>
          </div>
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/4.jpg">
            <p class="tabs-p">成都武侯祠</p>
          </div>
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/5.jpg">
            <p class="tabs-p">园里火锅·天府三街店</p>

          </div>
            </van-tab>
           <van-tab title="最近" name="b">
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/6.jpg">
            <p class="tabs-p">大龙燚火锅·春熙店</p>
          </div>
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/7.jpg">
            <p class="tabs-p">谭鸭血老火锅·春熙店</p>
          </div>
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/8.jpg">
            <p class="tabs-p">电台巷火锅·科华北路店</p>
          </div>
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/9.jpg">
            <p class="tabs-p">小龙坎火锅·春熙店</p>
          </div>
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/10.jpg">
            <p class="tabs-p">园里火锅·天府三街店</p>
            
             
          </div>
          </van-tab>
           <van-tab title="最热" name="c">
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/11.jpg">
            <p class="tabs-p">大龙燚火锅·春熙店</p>
          </div>
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/12.jpg">
            <p class="tabs-p">谭鸭血老火锅·春熙店</p>
          </div>
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/13.jpg">
            <p class="tabs-p">电台巷火锅·科华北路店</p>
          </div>
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/13.jpg">
            <p class="tabs-p">小龙坎火锅·春熙店</p>
          </div>
          <div class="tabs-img">
            <img class="ti" src="http://localhost:4000/11.jpg">
            <p class="tabs-p">园里火锅·天府三街店</p>
             
          </div>
          </van-tab> 
        </van-tabs>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value:"",
      activeName:'a',
      canSearch:true,
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
          this.value="";
        }
      }
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
  .fixed .fixed-p{
    text-align: center;
    font-size: 18px;
    margin-top: -5px;
  }
   .fixed .fixed-pp{
    margin-left: 5px;
    margin-bottom: -28px;
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
  .tabs img{
    width: 100%;
    height: 150px;
    border-radius: 8px 8px 0px 0px;
  }
  .tabs .tabs-img .tabs-p{
    width: 90%;
    height: 30px;
    margin-left: 35%;
    margin-top: 2px;
  }
</style>
