<template>
    <div class="container">
        <div class="back">
            <router-link to="Map">
                <span>
                    <img src="http://127.0.0.1:4000/箭头.png">
                </span>
            </router-link>
            <span class="star">
                <img :src="selected?urlselect:url" @click="change">
                <img src="http://127.0.0.1:4000/更多.png">
            </span>
        </div>
        <div id="carousel">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="main">
            <div class="desc">
                <h3>{{views[0].title}}</h3>
                <p>
                   {{views[0].details}}
                </p>
                <img :src="views[0].img">
                <p>
                     走进坐忘的人，大抵都是，从繁忙或工作中暂时抽离出来，体验一番隐居的。
                </p>
                <img src="http://localhost:4000/3.jpg">
                 <p>
                    走进坐忘的人，大抵都是，从繁忙或工作中暂时抽离出来，体验一番隐居的。
                </p>
                <p>
                    走进坐忘的人，大抵都是，从繁忙或工作中暂时抽离出来，体验一番隐居的。走进坐忘的人，大抵都是，从繁忙或工作中暂时抽离出来，体验一番隐居的。
                </p>
                <img src="http://localhost:4000/8.jpg">
                <p>
                    走进坐忘的人，大抵都是，从繁忙或工作中暂时抽离出来，体验一番隐居的。走进坐忘的人，大抵都是，从繁忙或工作中暂时抽离出来，体验一番隐居的。
                </p>
                <img src="http://localhost:4000/5.jpg">
                 <p>
                    走进坐忘的人，大抵都是，从繁忙或工作中暂时抽离出来，体验一番隐居的。走进坐忘的人，大抵都是，从繁忙或工作中暂时抽离出来，体验一番隐居的。
                </p>
            </div>
            <div class="det">
                <p class="address">
                    <span>
                        <img src="http://localhost:4000/address.png">地址：{{views[0].address}}
                    </span>
                    <span>
                        <button>
                            <img class="daohang" src="http://localhost:4000/导航.png">导航
                        </button>
                    </span>
                </p>
                 <p class="openTime">
                    
                    <span>
                        <img src="http://localhost:4000/open.png">
                        开放时间：00:00-24:00
                    </span>
                </p>
                <p class="price">
                    <span>
                        <img src="http://localhost:4000/price.png">
                        价格：¥{{views[0].price}}+
                    </span>
                    <span>
                        <button>购买</button>
                    </span>
                </p>
                <p class="tel">
                    <span> 
                        <img src="http://localhost:4000/tel.png">联系方式：{{views[0].phone}}
                    </span>
                </p>
            </div>
            <h5>相关信息</h5>
            <div class="aboutmsg">
                <div class="inabout" v-for="(item,i) of 2" :key="i">
                    <img src="http://127.0.0.1:4000/3.jpg">
                    <span>走进坐忘深林,走进隐士之所</span>
                </div>
            </div>
            <h5>相关活动</h5>
            <div class="aboutact">暂无</div>
            <h5>玩家</h5>
            <div class="aboutplayer">暂无</div>
            <!-- 发布分享-->
            <div class="bottom">
                    <span> <img src="http://localhost:4000/发布.png">发布</span>
                   
                    <span> <img src="http://localhost:4000/分享.png">分享</span>
            </div>
            <!-- 回到顶部的小圆圆 -->
            <div class="top" :class="{hidden:hid}">
                <a href="#carousel">
                    <img src="http://localhost:4000/向上.png">
                </a>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    beforeDestroy(){  
        this.$router.go(0);
    },
    beforeCreate(){
         this.bus.$on("receive",(vid)=>{
             this.vid=vid;
           //根据兄弟组件Map传来的vid请求数据！
            this.axios.get('/view',{
                params:{vid:this.vid}
            })
            .then(res=>{
                console.log(res.data.data);
                this.views=res.data.data;
                console.log(this.views[0].title);
            });
        });  
    },
    mounted(){
            // 监听窗口滚动过的距离
        window.onscroll=()=>{
            //为了保证兼容性，这里取两个值，哪个有值取哪一个
            //scrollTop就是触发滚轮事件时滚轮的高度
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(scrollTop);
            if(scrollTop<500){
                this.hid=true;
            }else{
                this.hid=false;
            }
        }
    },
    created(){
        // 获取收藏图标选中状态
        //  this.axios.get('/getSelected',{
        //                 params:{
        //                     vid:this.vid,
        //                 }
        //             })
        //             .then(res=>{
        //                 console.log(res.data.data);
        //             });
    }, 

    data(){
        return{
            images:[
                'http://localhost:4000/8.jpg',
                'http://localhost:4000/3.jpg',
                'http://localhost:4000/4.jpg',
                'http://localhost:4000/5.jpg',
                'http://localhost:4000/6.jpg',
            ],
            views:[
                {
                    title:"舟山风景区",img:"http://localhost:4000/8.jpg",address:"浙江舟山市",details:"闲情雅致,休闲娱乐,放下工作的疲惫,放松身心,走进生活、走向自然！",price:"650",phone:"0213-88888888"}
                ],//保存views默认数据 
            vid:0,
            hid:true,//控制回到顶部原点的显示隐藏
            selected:false,//收藏图片是否选中
            url:"http://127.0.0.1:4000/收藏.png",
            urlselect:"http://127.0.0.1:4000/收藏select.png",
            // vid:"",
        }
    },
    methods:{
        change(){
            this.bus.$emit("collect",this.vid);//接兄弟组件传参
                
            if(this.selected==false){//判断收藏，取消。
                this.selected=true;
                this.$messagebox("亲提示","收藏成功");
                //收藏成功后,收藏表中更新数据
                this.axios.get('/addCollect',{
                    params:{
                        vid:this.vid,
                        count:1,
                        selected:true,
                    }
                })
                .then(res=>{
                    console.log(res.data);
                });
            }else{
                 this.selected=false;
                 this.$messagebox("亲提示","取消成功");
                //取消收藏后,收藏表根据vid删除该数据
                this.axios.get('/delCollect',{
                    params:{
                        vid:this.vid,
                    }
                })
                .then(res=>{
                    console.log(res.data.data);
                });
            }

            this.axios.get('/view',{
                params:{vid:this.vid}
            })
            .then(res=>{
                console.log(res.data.data);
                this.views=res.data.data;
                console.log(this.views[0].title);
            });

        },//change  end
    }, 
}
    
//  var hid = true;
//     // 监听窗口滚动过的距离
//     window.onscroll=()=>{
//         //为了保证兼容性，这里取两个值，哪个有值取哪一个
//         //scrollTop就是触发滚轮事件时滚轮的高度
//         var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        
//         if(scrollTop<500){
//             hid=true;
//         }else{
//             hid=false;
//         }
//     }
</script>
<style scoped>
    .container{
        position:relative;
    }
    /* 顶部返回栏 */
    .back{
        position: fixed;
        top:0;
        width:95%;
        z-index: 20;
        padding:12px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
    }
    .star img:first-child{
        margin-right: 25px;
        width:32px;
        height:32px;
    }
    .star img:last-child{
        margin-right: 10px;
          width:24px;
        height:24px;
    }
    #carousel{
        margin-top:62px;
    }
    /*轮播图*/
   #carousel img{
       width:100%;
       height: 210px;
   }
   /* 轮播图下的父元素div */
   .main{
       margin:0 15px;
   }
   /* desc描述中所有的图片样式大小 */
   .main .desc img{
       width:100%;
       height:200px;
   }
   /* 设置标题样式 */
   .main .desc h3{
       font-family:'楷体';
   }
   /* 设置描述字体 */
   .main .desc p{
       text-indent: 2rem;
       font-size:15px;
   }
   /* 调整详情与上下的间距 */
   .det{
       margin: 35px 0;
   }
   /* 设置地址和价格弹性布局 让按钮和左边分开布局*/
   .det .address,.price{
       display: flex;
       justify-content: space-between;
       align-content: center;
   }
    /* 设置详情字体样式 */
    .main .det p span{
       font-size:12px;
       font-weight:bold;
       align-items: center;
       display: flex;
    }
    /* 调整图标与字体间距 */
    .main .det p span img{
        margin-right: 10px;
    }
    /* 设置按钮样式 */
    .det .address button,.det .price button{
        border-radius:10px;
        background-color:rgba(14, 75, 48, 0.722);
        color:white;
        padding:2px 8px;
    }
    .det .price button{
        padding:2px 13px;
    }
    /* 设置导航按钮样式 */
    .main .det p span .daohang{
        height: 11px;
        margin-right:0px;
    }
    /* 设置相关信息div */
    .inabout{
       position: relative; 
       margin-bottom:10px;
    }
    /* 设置相关信息图片样式 */
    .aboutmsg .inabout img{
        width:100px;
        height:80px;
    }
    /* 设置相关信息字体样式 */
    .aboutmsg .inabout span{
        position: absolute;
        left:120px;
        top:5px;
        font-size: 14px;
    }
    /* 设置相关活动和玩家字体样式 */
    .aboutact,.aboutplayer{
        font-size:14px;
        color:gray;
    }
    /* 发布分享样式 */
    .bottom{
        margin-top:20px;
        padding:15px 0px;
        border-top:1px solid gray;
        display: flex;
        justify-content: flex-end;
    }
    /* 把发布和分享分开 */
    .bottom span:last-child{
        margin-left: 60px;
    }
    /* 回到顶部样式 */
    .top{
        width:35px;
        height: 35px;
        border-radius: 50%;
        background-color:#add3bba2;
        position:fixed;
        right:20px;
        bottom:120px;
    }
    /* 回到顶部的图片样式 */
    .top img{
        width:70%;
        height:70%;
        margin-left:5px;
        margin-top:7px;
    }
    /* 控制回到顶部默认隐藏 */
    .hidden{
        display:none;
    }
</style>


