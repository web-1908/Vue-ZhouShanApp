<template>
    <div id="reg">
        <div class="fixed">
         <router-link :to="{path:'/login'}">
            <img class="fixed-pp" src="http://localhost:4000/arrows.png"></router-link>
            <p class="fixed-p">注册</p>
        </div>
        <div class="inputbox">
            <img src="http://localhost:4000/user.png">
            <input class="inputtext" type="text" placeholder="请输入用户名" v-model="uname">
        </div>
          <div class="inputbox">
            <img src="http://localhost:4000/pwd.png">
            <input class="inputtext" type="password" placeholder="请输入密码" v-model="upwd">
        </div>
        <div class="inputbox">
            <img src="http://localhost:4000/pwdd.png">
            <input type="password"  placeholder="请确认密码" v-model="upwdd">
        </div>
        <div class="inputbox">
        <img src="http://localhost:4000/phone.png">
         <input class="inputtext" type="text" placeholder="请输入您的手机号" v-model="phone">
        </div>
        <div class="checkd">
            <input class="check" type="checkbox" v-model="btt">我已阅读并同意《用户注册协议》<br>
            <button @click="blur()">注册</button>
        </div>
    </div>
</template>
 <script>
 export default {
    data(){
        return{
            uname:"",
            upwd:"",
            upwdd:"",
            phone:"",
            btt:true,
        }
    },
    methods:{
         blur(){
            var un=this.uname;
             if(!un){
                    this.$toast("用户名不能为空");
                    return;
             }else{
            var url="/ver";
            var obj={uname:un};
            this.axios.get(url,{params:obj})
            .then(res=>{
                console.log(res.data);
                if(res.data.code==1){
                    this.reg();
                }else{
                    this.$toast("用户名已存在");
                }
            })
            .catch(err=>{
                console.log(err);
            })
             }
        },
        reg(){
             var reg=/^([0-9a-z]){3,12}$/i;
             var em= /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
             var ph=/^1[3456789]\d{9}$/;
            var u=this.uname;
            var p=this.upwd;
            var p1=this.upwdd;
            var pho=this.phone;
            var b=this.btt;
             console.log(u,p,pho);
            if(!reg.test(u)){
              this.$toast("用户名格式为3-12为字符");
                return;
            }
            if(!reg.test(p)){
                this.$toast("密码格式为3-12为字符");
                return;
            }
            if(p1!=p){
                this.$toast("密码验证不一致");
                return;
            }
              if(!ph.test(pho)){
               this.$toast("手机号格式有误");
                return;
            } 
            if(b==false){
                this.$toast("同意服务条款才能进入");
                return;
            }
            
            var url="/reg";
            var obj={uname:u,upwd:p,phone:pho};
            console.log(obj);
            this.axios.get(url,{params:obj})
            .then(res=>{
                console.log(res)
                if(res.data.code==1){
                     // 功能:确认/取消 --->  ↓传confirm/cancel
                    this.$messagebox.confirm("注册成功")
                    .then(confirm=>{this.$router.push("Login")})//确认执行操作
                    .catch(cancel=>{this.$router.go(0)})// 取消
                    
                }else{
                    this.$toast("用户名或密码有误");
                }
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
 }
 </script>
<style scoped>
/* 注册文字 */
    .fixed .fixed-p{
    text-align: center;
    font-size: 20px;
    margin-top: -5px;
  }
  /* 返回箭头 */
   .fixed .fixed-pp{
    margin-bottom: -28px;
  }
  /* 包裹输入框的div */
  .inputbox{
      border-bottom: 1px solid #999;
      width: 90%;
      margin: auto;
      margin-bottom: 20px;
  }  
  /* 输入框里面的图片 */
  .inputbox img{
      margin-bottom:-10px;
  }
  /* input框 */
  input{
      border:none;
      padding: 15px;
      font-size: 18px;
  }
   /* input复选框 */
  .check{
    margin-left: 15px;
  }
button{
    padding: 8px 75px 8px 75px;
    background-color: #f3f3e3;
    margin-top: 20px;
    margin-left: 25%;
    border-radius: 10px;
    border: none;
}
</style>
