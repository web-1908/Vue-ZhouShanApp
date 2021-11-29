<template>
  <div id="shezhi">
    <img src="http://localhost:4000/arrows.png" class="fanhui" @click="wo"/>
    <div id="title">个人资料</div>
    <div class="kong"></div>
    <div id="list">  
        <span class="xiu">修改头像</span> 
       <span> <span  class="touxiang"><img src="http://localhost:4000/1.jpg"></span>
       <img class="you" src="http://localhost:4000/you.png" ></span>
    </div>
    <div id="list2">  
        <span>修改昵称</span> 
        <span>
        <span class="ming">你好的，欢迎来到121655666666</span></span>
            <img src="http://localhost:4000/you.png" >
       
    </div>
    <div id="list3">  
        <span>修改昵称</span> 
        <img src="http://localhost:4000/you.png" >
    </div>
 
  </div>
</template>
<script>
export default {
    methods:{
			wo(){
				//点击跳转对应的页面
				this.$router.push('person');
			}
		}
}
</script>
<style  scoped>
#shezhi {
  margin-top: 15px;
}
.fanhui {
  float: left;
  width: 20px;
  height: 20px;
  margin-left: 10px;
}
#title {
  width: 20%;
  height: 40px;
  margin: 0 auto;
}
.kong{
    height: 10px;width: 100%;
    background: #ebe9e9;
}
#list2,#list3{
    padding: 15px ;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
  align-items: center;
}
#list{
    padding:5px 15px;
    display: flex;
    justify-content: space-between;
  align-items: center;
}
.you{
 margin-bottom: 8px;
}

img {
  height: 15px;
}
.ming{
    float:right;
    font-size: 15px;
    color: gray;
}
.touxiang>img{
    height: 35px;
    width: 35px;
    border-radius: 50%;
    margin-right: 15px;
}

</style>