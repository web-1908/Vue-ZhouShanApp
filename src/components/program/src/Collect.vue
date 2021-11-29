<template>
    <div class="container">
        <div class="back">
            
            <span @click="back"><img src="http://127.0.0.1:4000/箭头.png"></span>
            <span class="YOU">我的收藏</span>
        </div>

        <!-- 内容部分 -->
        <div class="tabs">
        <van-tabs v-model="activeName">
            <van-tab title="目的地" name="a">
                <!-- 收藏中有数据显示加载数据内容 -->
                <router-link to="Mapdet">
                    <div class="tabs-img" v-if="hid" v-for="(item,i) of views" :key="i" @click="send(item[0].vid)">
                        <img class="ti" :src="item[0].img">
                        <p class="tabs-pp">
                            {{item[0].title}}
                        </p>
                    </div>
                </router-link>
                <!-- 收藏中无数据删除内容元素，显示该元素 -->
                <div class="lwh" v-if="hid?false:true">
                    <img src="http://localhost:4000/parent.png">
                    <p class="h">您还未收藏,去收藏试试</p>
                </div>
            </van-tab>
            <van-tab title="美文" name="b">
                <div class="lwh">
                    <img src="http://localhost:4000/parent.png">
                    <p class="h">这里空空如也，没有草原和野马</p>
                </div>
            </van-tab>
            <van-tab title="路线" name="c">
                <div class="lwh">
                    <img src="http://localhost:4000/parent.png">
                    <p class="h">这里空空如也，没有草原和野马</p>
                </div>
          </van-tab>
    </van-tabs>
    </div>

    </div>
</template>
<script>
export default {
    beforeDestroy(){  
        this.bus.$emit("receive",this.vid)
    },
    created(){
        //请求收藏表中的数据vid
        this.axios("/getCollect")
        .then(res=>{
            //判断收藏表数据为空则隐藏内容元素赋值hid为false
            if(res.data.data.length==0){
                this.hid=false;
            }else{//根据收到的收藏表数据数组循环
                for(var i=0;i<res.data.data.length;i++){
                    //根据收藏表数据数组中vid查询views中的数据以便以页面加载数据
                    this.axios("/getViews",{params:{
                        vid:res.data.data[i].vid
                    }}).then(res=>{
                        console.log(res.data.data)
                        this.views.push(res.data.data);
                    })
                }//循环end
                console.log(this.views);
            }
        })

       
    },
    data(){
        return{
            value:"",//搜索框绑定值
            activeName:"a",//选项卡默认名
            views:[],//保存获取的收藏数据
            hid:true,
            vid:0
        }
    },
    methods:{
        //当点击图片div跳转时，触发的点击事件函数！向兄弟组件Mapdet.vue传递vid参数！
        send(vid){
            this.vid=vid;
        },
        back(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
    .container{
        margin:0 10px;
    }
    /* 顶部返回 */
    .back{
        margin-top:10px;
        margin-bottom:16px;
        position: relative;
    }
    /* 顶部YOU字体 */
    .YOU{
        position: absolute;
        font-size: 18px;
        font-weight: bold;
        font-family: '宋体';
        left:50%;
        margin-left:-37px;
    }
    /*图片*/
    .tabs img{
        height:200px;
        width:100%;
    }

    .tabs img{
    width: 90%;
    height: 200px;
    margin-left: 5%;
  }
  .tabs .icon-img{
    width: 16px;
    height: 16px;
    margin-left: 85%;
    margin-top: 3px;
  }
   .tabs .icon-img-p{
   color: #999;
   font-size: 12px;
   margin-left: 90%;
   margin-top: -20px;
   margin-bottom: 5px;
  }
  .tabs-p p{
     width: 90%;
     margin-left: 5%;
     margin-top: 3px;
  }
  button{
    margin-left: 40%;
  }
  .h{
    text-align: center;
    font-size: 24px;
    color:gray;
    font-family: 仿宋;
  }
  .lwh img{
    margin-top: 50px;
    margin-left: 45%;
    width: 48px;
    height: 48px;
  }
 
  .tabs .tabs-img{
    width: 90%;
    height: 190px;
    margin-left: 5%;
    border: 1px solid #aaa;
    border-radius: 4px;
    box-shadow: 0px 0px 4px #aaa;
    margin-bottom: 20px;
    display:flex;
    flex-direction: column;
    align-items: center;
  }
   .tabs-img .ti{
    width: 100%;
    height: 150px;
    margin-left: 0%;
    border-radius: 4px 4px 0px 0px;
  }
  .tabs .tabs-img .tabs-pp{
    height: 30px;
    margin-top: 10px;
    color:black;
  }
</style>


