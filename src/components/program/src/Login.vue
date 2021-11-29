<template>
  <div id="container">
    <img src="http://localhost:4000/login2.png" alt class="logo" />

    <p class="title">有一种生活美学,叫舟山</p>
    <button class="loginBtn" @click="login()">登录</button>

    <div id="hide" :class="[stye]" >
      <div class="login">
        <p class="loginTitle">
          <span>登录舟山旅游网</span>
          <img src="http://localhost:4000/chahao.png" @click="guanbi"/>
        </p>
        <input type="text" placeholder="请输入用户名" id="uname" />
        <input type="password" placeholder="请输入密码" id="upwd" />
        <div class="choose">
          <router-link :to="{path:'/reg'}"><a href class="reg">立即注册</a>
          </router-link>
          <router-link :to="{path:'/update'}"><a href class="update">忘记密码</a>
          </router-link>
        </div>
        <button class="l" @click="login1()">登录</button>
        <div class="methods">
          <p class="intro">选择以下方式登录</p>
          <div>
            <img src="http://localhost:4000/weixin.png" alt />
            <img src="http://localhost:4000/QQ.png" alt />
            <img src="http://localhost:4000/weibo.png" alt />
          </div>
        </div>
      </div>
    </div>
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

  data() {
    return {
      stye:'hides1',
      active:"tab4",
    };
  },
  methods: {
    tuiJian(){
      this.$router.push("tuiJian");
    },
     Find(){
      this.$router.push("Find");
    },
     map(){
      this.$router.push("map");
    },
    login(){
        this.stye= "hides2";
    },
    guanbi(){
        this.stye= "hides1";
    },
    login1(){//登录事件

       console.log(1);
         //获取用户名和密码
         var u=uname.value;
         var p=upwd.value;
         console.log(2);
         console.log(u+":"+p)
          // 创建正则
         var nm=/^[0-9a-zA-Z]{3,12}$/;
         //5.验证用户名不正确显示出错信息
         //6.出错就返回
         
         if(!nm.test(u)){//if(!nm.test(this.uname))
         this.$messagebox("用户名","用户名格式不正确");
           return;
         }
         if(!nm.test(p)){
           this.$messagebox("密码","密码格式不正确")
           return;
         }
         console.log(3);
         console.log(u+":"+p);

        // this.$messagebox("登录","登陆成功")
        //7.发送ajax请求
        //var url="login";
        //var obj={uname:u,upwd:p};
        console.log(4);
        this.axios.get("login",{
        params:{
            uname:u,
            upwd:p
           }
        }).then(res=>{   //成功的回调函数
        console.log(res);
         //8.获取服务器返回结果
         if(res.data.code==-1){
         //9.出错显示出错信息
         this.$messagebox("消息","用户名或密码有误!");
         }else{
           console.log(7);
           //10.跳转/Product
           //先确认在决定跳不跳转
          /* this.$messagebox.confirm("登陆成功，是否确认跳转?").then(res=> this.$router.push("/Product"))
           .catch(reg=>this.$router.push("/Login"))*/
           this.$router.push("/Person");//直接跳转
         }
     })
   }
  }
}
</script>

<style scoped>
#container {
  position: relative;
  margin-bottom:60px;
}
.logo {
  width: 100%;
}

.title {
  margin-left: 135px;
  color: #ee5e7b;
  font-family: sans-serif;
}
.loginBtn {
  margin-left: 170px;
  width: 80px;
  height: 80px;
  border-width: 0px;
  border-radius: 50%;
  background: #575da9;
  outline: none;
  color: #eee;
  margin-top: 50px;
}
#hide {
  position: absolute;
  top: 0;
  left: 0;
  width: 375px;
  height: 667px;
  background: rgba(0, 0, 0, 0.65);
  
}
.hides1{
  display: none;
}
.hides2{
  display: block;
}
.login {
  width: 70%;
  height: 80%;
  background: #fff;
  margin: auto;
  margin-top: 50px;
  border-radius: 20px;
  padding: 20px;
}
.loginTitle {
  height: 48px;
  color: #ee5e7b;
  font-size: 25px;
  font-weight: bold;
  /*margin-left:-100px;*/
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
}
.loginTitle img {
  width: 32px;
  height: 32px;
}
#uname,
#upwd {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  outline: none;
  border: 0 solid transparent;
  border-bottom: 1px solid #575da9;
}
#upwd {
  margin-top: 30px;
}
.reg,
.update {
  text-decoration: none;
  color: #0aa1ed;
  /* margin-top: 10px; */
  margin-right: 2px;
}
.choose {
  display: flex;
  justify-content: space-between;
}
.l {
  width: 100%;
  height: 50px;
  margin-top: 30px;
  border-radius: 15px;
  border-width: 0px;
  background: #546e7a;
  color: #fff;
  font-size: 20px;
}
.methods {
  margin-top: 50px;
}
.methods > div {
  display: flex;
  justify-content: space-around;
}
</style>