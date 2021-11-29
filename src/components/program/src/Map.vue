<template>
    <div class="container">
        <!-- 搜索框 -->
        <van-search class="search" placeholder="请输入搜索关键词" v-model="value" @focus="search" :class="{hidden:hid}"/>
        <!-- 轮播图 -->
        <div id="carousel">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(item, index) in bans" :key="index">
                    <!-- 轮播图片 -->
                    <img v-lazy="item.src" />
                    <!-- 轮播图标题 -->
                    <div class="carouselTitle">
                        {{item.title}}
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="main">
            <!-- You地图 -->
            <div id="You_map">
                <span>YOU 地图</span>
                <router-link to="MapMore">
                    <span>MORE ></span>
                </router-link>
            </div>
            <!-- 图 div-->
            <div class="Map" v-for="(item,ind) of views" :key="'Map'+ind">
                <!-- 左大图 -->
                <div class="Map_left">
                        <img :src="item.img">
                        <!-- 左大图标题 -->
                        <div><img src="http://127.0.0.1:4000/黄地图.png">{{views[ind].title}}</div>
                </div>
                <!-- 右两图 -->
                <div class="Map_right"> 
                    <div @click="send(item.vid)">
                        <router-link to='Mapdet'>
                            <img :src="views[0].img">
                            <marquee behavior="" direction="left" scrollamount="3">{{views[ind].title}}</marquee>

                            <div>
                               <span>{{item.title}}</span> 
                              <span><img src="http://127.0.0.1:4000/定位.png">{{item.address}}</span>  
                            </div>

                        </router-link>
                    </div>
                    <div @click="send(item.vid)">
                        <router-link to='Mapdet'>
                            <img :src="views[1].img">
                            <marquee behavior="" direction="left" scrollamount="3">{{views[ind].title}}</marquee>
                            <div>
                               <span>{{item.title}}</span> 
                               <span>
                                   <img src="http://127.0.0.1:4000/定位.png"> {{item.address}}
                               </span>  
                            </div>
            
                        </router-link>
                    </div>
                     
                </div>
            </div>
            <!-- 路线 -->
            <div id="You_map">
                <span>路线</span>
                <router-link to="MapMore">
                    <span>MORE ></span>
                </router-link>
            </div>
            <!-- 地图 -->
            <div class="path" v-for="(img,i) of pathImgs" :key="'path'+i">
                <img :src="img.pic">
            </div>
            <!-- 底线 -->
            <div class="bottom">
                <span>- - - - - 我可是有底线的哦 - - - - -</span>
            </div>
        </div>
        <!--底部导航栏组件 可把里面的图片写成子组件实现切换功能-->
   
     <mt-tabbar fixed v-model="active" class="tabbar">
            <mt-tab-item id="tab1" style="color:gray" >
                <img slot="icon" src="http://127.0.0.1:4000/推荐.png" @click="tuiJian">
                推荐
            </mt-tab-item>
            <mt-tab-item id="tab2" style="color:gray" >
                <img slot="icon" src="http://127.0.0.1:4000/发现.png" @click="Find">
                发现
            </mt-tab-item>
            <mt-tab-item id="tab3" style="color:#148bb2">
                <img slot="icon" src="http://127.0.0.1:4000/地图selected.png">
                地图
            </mt-tab-item>
            <mt-tab-item id="tab4" style="color:gray" >
                <img slot="icon" src="http://127.0.0.1:4000/我的.png" @click="Login">
                我的
            </mt-tab-item>
            
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    beforeDestroy(){  
        this.bus.$emit("receive",this.vid)
    },
    created(){
        this.axios.get("/views").then(res=>{
            console.log(res.data.data);
            this.views=res.data.data;
        }),
         this.axios.get("/banImg").then(res=>{
            this.bans=res.data.data;
            
        }),
         this.axios.get("/pathImg").then(res=>{
            this.pathImgs=res.data.data;
            
        })
    },
    mounted(){
            // 监听窗口滚动过的距离
        window.onscroll=()=>{
            //为了保证兼容性，这里取两个值，哪个有值取哪一个
            //scrollTop就是触发滚轮事件时滚轮的高度
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(scrollTop);
            if(scrollTop<50){
                this.hid=true;
            }else{
                this.hid=false;
            }
        }
    },
    data(){
       return{
            active:"tab3",
            value:"",//搜索框值
            bans:[],//轮播图 数组,
            views:[],//YOU地图 数据数组
            pathImgs:[],//path 图片数组
            vid:0,
            hid:true,
        }
    },
    methods:{
        tuiJian(){
            this.$router.push("tuiJian");
        },
        Find(){
            this.$router.push("Find");
        },
        Login(){
        this.axios.get("/session")
        .then(res => {
            console.log(res.data.code);
        if(res.data.code==-1){
            this.$router.push("login");
        }else{
            this.$router.push("person");
        }
        });
        },
        //当点击图片div跳转时，触发的点击事件函数！向兄弟组件Mapdet.vue传递vid参数！
        send(vid){
            this.vid=vid;
        },
        //搜索跳转
        search(){
            this.$router.push('ToSearch');
        }
    },
}

</script>
<style scoped>
    /* 最外层父元素div相对定位 */
    .container{
        position: relative;
        margin-bottom:60px;
    }
    /* 搜索框绝对定位 布局*/
    .search{
        position:fixed;
        width:100%;
        z-index: 10;
    }
    /*轮播图*/
   #carousel img{
       width:100%;
       height: 210px;
   }
   /* 轮播图标题 */
    .carouselTitle {
        font-size: 23px;
        color:white;
        font-family: '楷体';
        position:absolute;
        left:20%;
        top:80%;
        z-index:20;
        border-radius: 4px;
    }
   /*You地图标题样式*/
   #You_map{
       display:flex;
       justify-content:space-between;
       align-items: center; 
       margin-top: 30px;
   }
   /*YOU地图字体样式*/
   #You_map span:first-child,#You_map span:last-child{
       font-family: '楷体';
       font-size: 22px;
       color:black;
   }
   /*MORE字体样式*/
   #You_map span:last-child{
       font-size: 16px;
   }
   /*轮播图以下总父元素样式*/
   .main{
       margin:0 15px;
   }
   /*地图 Map父元素*/
   .Map{
       margin-top:12px;
       margin-bottom:25px;
       display:flex;
       justify-content:space-between;
   }
   /*You地图 左侧div宽高设置*/
   .Map .Map_left{
       width:55%;
       height: 180px;
       position: relative;
   }  
   /* YOU地图 左侧图片标题 */
   .Map .Map_left div{
       position: absolute;
       color:white;
       left:8%;
       top:75%;
       font-family: '楷体';
   }
   /* YOU地图 左侧标题小图标 */
   .Map .Map_left div img{
       width:20px;
       height:20px;
       margin-bottom: -3px;
   }
   /*You地图 左侧图片宽高设置*/
    .Map .Map_left img{
        width:100%;
        height:100%;
    }
    /*You地图 右侧div宽高设置*/
    .Map .Map_right{
        width:42%;
        height:180px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    /* You地图 右侧图片div */
    .Map .Map_right div{
        position: relative;
        height:48%;
    }
    /* 滚动字幕 */
    marquee{
        width:20%;
        height:25px;
        line-height: 25px;
        border-top-left-radius:1em;
        border-bottom-left-radius:1em;
        background-color:rgba(255,255,255,0.6);
        color:black;
        font-size:12px;
        position: absolute;
        right:0px;
        top:6px;
    }
     /*You地图 右侧图片宽高*/
    .Map .Map_right div>img{
        width:100%;
        height:100%;
    }

    /*You地图 右侧图片宽高*/
    .Map .Map_right div img{
        width:100%;
        height:85px;
    }
    /*You地图 右侧定位小图宽高*/
    .Map .Map_right div div img{
         width:15px;
        height:15px;
        margin-bottom:-1px;
        margin-right:3px;
    }
    /* YOU地图 右侧标题和定位 */
    .Map .Map_right div div{
        position: absolute;
        left:1%;
        top:50%;
        z-index:1;
        display:flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .Map .Map_right div div span{
        flex-wrap: nowrap;
        color:rgb(245, 243, 238);
        font-size:13px;
        width:90%;
        max-width: 100px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    /*路线父层div*/
    .path{
        width:100%;
        margin-top:12px;
        margin-bottom:30px; 
    }
    /* 路线图片 */
    .path img{
        width:100%;
        height:150px;
    }
    /*我也是有底线的*/
    .bottom{
        display: flex;
        justify-content:center;
        color:gray;
        font-size: 14px;
        font-family: '楷体';
    }
    .tabbar{
        z-index: 50;
    }
    .hidden{
        display: none;
    }
</style>


