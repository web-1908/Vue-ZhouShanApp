<template>
  <div id="shezhi">
    <img src="http://localhost:4000/arrows.png" class="fanhui" @click="wo"/>
    <div id="title">我的消息</div>
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
  display: flex;
  align-items: center;
}
.fanhui {
  float: left;
  width: 30px;
  height: 30px;
  margin-left: 10px;
}
#title {
  /* width: 20%;
  height: 40px; */
  margin: 0 auto;
  padding-right: 40px;
  font-size:20px;
}

</style>