<template>
    <div>
        <!--面板组件-->
        <mt-tab-container v-model="active" >
            <mt-tab-container-item id="tab1" class="container">
                <tuijian></tuijian>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2" class="container">
                <Find></Find>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab3" class="container">
                <Map></Map>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab4" class="container">
                <Login></Login>
            </mt-tab-container-item>
        </mt-tab-container>
        <!--底部导航栏组件 可把里面的图片写成子组件实现切换功能-->
        <mt-tabbar fixed v-model="active">
            <mt-tab-item id="tab1" :style="active=='tab1'?color:color2">
                <img slot="icon" :src="active=='tab1'?'http://127.0.0.1:4000/推荐selected.png':'http://127.0.0.1:4000/推荐.png'">
                推荐
            </mt-tab-item>
            <mt-tab-item id="tab2" :style="active=='tab2'?color:color2">
                 <img slot="icon" :src="active=='tab2'?'http://127.0.0.1:4000/发现selected.png':'http://127.0.0.1:4000/发现.png'">
                发现
            </mt-tab-item>
            <mt-tab-item id="tab3" :style="active=='tab3'?color:color2">
                 <img slot="icon" :src="active=='tab3'?'http://127.0.0.1:4000/地图selected.png':'http://127.0.0.1:4000/地图.png'">
                地图
            </mt-tab-item>
            <mt-tab-item id="tab4" :style="active=='tab4'?color:color2">
                 <img slot="icon" :src="active=='tab4'?'http://127.0.0.1:4000/我的selected.png':'http://127.0.0.1:4000/我的.png'">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
import tuijian from './tuiJian'
import Find from './Find'
import map from './Map'
import Login from './Login'
export default {
    data(){
        return{
            active:"tab1",
            color:{//保存底部导航栏选中字体颜色样式变量
                color:'#148bb2',
            },
            color2:{//保存底部导航栏未选中字体颜色样式变量
                color:'#000'
            },
        }
    },
    components:{ //注册子组件
        // "message-list":MessageList,
         "tuijian":tuijian,
         "Find":Find,
         "Map":map,
         "Login":Login,
        },  
    methods:{
        
    }
}
</script>
<style scoped>
 
</style>


