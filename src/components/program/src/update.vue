<template>
    <div id="reg">
        <video src="../../../assets/login.mp4" height="667" muted autoplay loop ></video>
        <div class="area">
           <div class="title">
                <div class="back iconfont icon54" @click="back(3)"></div>
                <p>修改密码</p>
            </div>
            <input type="text" id="uname" placeholder="请输入用户名" v-model="uname" autofocus>
            <input type="text" id="phone" placeholder="请输入手机号" v-model="phone">
            <input type="password" id="upwd" placeholder="请输入新密码" v-model="upwd">
            <input type="password" id="cpwd" placeholder="请确认密码" v-model="cpwd">
            <button @click="update">确认修改</button>
        </div>
    </div>
</template>
 <script>
 export default {
    data(){
        return{
            uname:"",
            phone:"",
            upwd:"",
            cpwd:"",
        }
    },
    methods:{
         update(){
            var u=this.uname
            var p=this.phone
            var pass=this.upwd
            var c=this.cpwd
            var reg=/^[a-zA-Z0-9]{6,16}$/
            var reg1=/^1[3-9][0-9]{9}$/
            var reg2=/^[a-zA-Z0-9]{3,16}$/
            if(!reg2.test(u)){
                this.$messagebox("信息","用户名格式不正确")
                return;
            }
             if(!reg1.test(p)){
                this.$messagebox("信息","手机格式不正确")
                return;
            }
            if(!reg.test(pass)){
                this.$messagebox("信息","密码格式不正确")
                return;
            }
            if(!reg.test(c)){
                this.$messagebox("信息","密码格式正确")
                return;
            }
            if(c!=pass){
                this.$messagebox("信息","两次输入密码不一致")
                return;
            }
            this.axios.get("update",{params:{uname:u,phone:p,upwd:pass}}).then(res=>{
                console.log(1)
                if(res.data.code==-1){
                    this.$messagebox(
                        "消息","用户名或手机有误")
                }else{
                    this.$messagebox.confirm("修改密码成功")
                    .then(confirm=>{this.$router.push("login")})
                    .catch(cancel=>{})
                }
            })
        },
        back(id){
              this.$router.push({
                path:'/login',
                name:'login',
                params:{
                id : id
                }
            })
        }
    } 
 }
 </script>
<style scoped>
    #reg{
        height:667px;
        position: relative;
    }
    video{
        position: absolute;
        top: 0;
        right:0
    }
    .area{
        width:80%;
        height:80%;
        position: absolute;
        top:0;
        left:50%; 
        margin-left:-150px;
    }
    input{
        width:100%;
        background: transparent;
        border-width:0;
        border-bottom:1px solid #666;
        text-indent: 20px;
        height:50px;
        margin:20px 0;
    }
    button{
        width:100%;
        height:60px;
        margin:60px 0;
        border-radius:20px;
        border-width:0;
        background: #575da9;
        color:#fff;
        font-size:25px;
        outline: none;
    }
    input::placeholder{
        color:#554840;
        font-size:15px;
        
    }
    .title{
        width:100%;
        height:50px;
        display:flex;
        justify-content:center;
        margin-top:40px;
        color:#E5BB81
    }
    p{
        margin: 0;
        font-size:24px;
        margin-left: -80px;
    }
    .back{
        width:50px;
        height:50px;
        font-size:30px;
    }
</style>
