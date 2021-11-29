import Vue from 'vue'
import Router from 'vue-router'
import One from "./store/views/One.vue"
import map from "./components/program/src/Map"
import mapdet from "./components/program/src/Mapdet"
import mapmore from "./components/program/src/MapMore"
import search from "./components/program/src/Search"
import person from "./components/program/src/Person"
import collect from "./components/program/src/Collect"
import login from "./components/program/src/Login"
import reg from "./components/program/src/Reg"
import home from "./components/program/src/Home"
import ToSearch from "./components/program/src/ToSearch"
//顾
import Guide from "./components/program/src/Guide"
import Find from "./components/program/src/Find"
// 韩
import faBu from "./components/program/src/faBu"
import sheZhi from "./components/program/src/sheZhi"
import tuiJian from "./components/program/src/tuiJian"
import xiaoXi from "./components/program/src/xiaoXi"
import ziLiao from "./components/program/src/ziLiao"
// 明岳
import update from "./components/program/src/update"
import Lianxi from "./components/program/src/lianxi"


Vue.use(Router)
export default new Router({
  routes: [
    //组件访问路径    组件名
    {path:'/',component:tuiJian},
    {path:'/One',component:One},
    {path:'/Map',component:map},
    {path:'/Mapdet',component:mapdet},
    {path:'/carousel',component:mapdet},
    {path:'/MapMore',component:mapmore},
    {path:'/Search',component:search},
    {path:'/Person',component:person},
    {path:'/Collect',component:collect},
    {path:'/Login',component:login},
    {path:'/Reg',component:reg},
    {path:'/Home',component:home},
    {path:'/ToSearch',component:ToSearch},
    //顾
    {path:'/Guide',component:Guide},
    {path:'/Find',component:Find},
    //韩
    {path:'/faBu',component:faBu},
    {path:'/sheZhi',component:sheZhi},
    {path:'/tuiJian',component:tuiJian},
    {path:'/xiaoXi',component:xiaoXi},
    {path:'/ziLiao',component:ziLiao},
    //明岳
    {path:'/update',component:update},
    {path:'/Lianxi',component:Lianxi},
  ]
})
