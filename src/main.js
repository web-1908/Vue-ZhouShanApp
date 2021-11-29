import Vue from 'vue'
import App from './App.vue'
import router from './router'

//兄弟传参第三方中介 bus
import bus from './bus'
Vue.prototype.bus=bus;

import vant from 'vant'
import "vant/lib/index.css"
Vue.use(vant) 
//删除5~47 Vue 对象 strone
//功能:引入mint-ui组件库 32
//1:将mint-ui组件库中所有组件引入当前项目
import MintUI from "mint-ui"
//2:单独引入mint-ui样式文件
import "mint-ui/lib/style.css"
//3:注册
Vue.use(MintUI)
//4:!!出错
// import "./meishifont/iconfont.css"
//5:引入第三方ajax库axios
//6:引入axios
import axios from "axios"
//7:配置访问服务器基础地址
axios.defaults.baseURL="http://127.0.0.1:4000/"
//8:配置发送请求保存session信息
axios.defaults.withCredentials=true;
//9:将axios注册vue
Vue.prototype.axios = axios;


//main.js 脚手架
//10:添加第三方组件库vuex
//11:引入vuex
import Vuex from "vuex"
//12:注册vuex
Vue.use(Vuex);
// 创建存储对象
var store=new Vuex.Store({
    state:{//保存全局共享数据
      fa:12 //亮哥头发
    },
    mutations:{//修改全局数据函数
      subFa(state){
        state.fa--;
      }
    },
    getters:{//获取全局数据函数
      getFa(state){
        return state.fa;
      }
    }
})

new Vue({
  router,
  store,
  render: h => h(App),  //加载App.vue中的HTML片段内容
 
}).$mount('#app')//替换index.html中为id为app的元素