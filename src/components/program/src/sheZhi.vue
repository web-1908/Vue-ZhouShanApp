<template>
  <div id="shezhi">
    <img src="http://localhost:4000/arrows.png" class="fanhui" @click="wo"/>
    <div id="title">设置</div>
    <div id="list">
      <ul>
        <li>
          <span>修改密码</span>
          <img src="http://localhost:4000/you.png" />
        </li>
        <li>
          <span>清除缓存</span>
        </li>
        <li>
          <span>关于YOU舟山</span>
          <img src="http://localhost:4000/you.png" />
        </li>
        <li>
          <span>意见反馈</span>
          <img src="http://localhost:4000/you.png" />
        </li>
        <li>
          <span>修改密码</span>
          <img src="http://localhost:4000/you.png" />
        </li>
        <li>
          <span>隐私政策</span>
          <img src="http://localhost:4000/you.png" />
        </li>
        <li>
          <span>联系客服</span>
          <img src="http://localhost:4000/you.png" />
        </li>
      </ul>
    </div>
    <div id="tui">退出登录</div>
  </div>
</template>
<script>
export default {
    methods:{
			wo(){
				//点击跳转对应的页面
				this.$router.push('Person');
				
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
  width: 10%;
  height: 40px;
  margin: 0 auto;
}
img {
  height: 15px;
  text-align: center;
}
ul {
  padding: 5px 10px;
}
#list > ul > li {
  display: flex;
  justify-content: space-between;
}
li {
  padding: 15px 5px;
  border-bottom: 1px solid gray;
}
#tui {
  position: absolute;
  bottom: 60px;
  width: 20%;
  margin: 0 40%;
}
</style>