<template>
    <div class="container">
        <!-- 搜索框 -->
        <van-search id="i"
            v-model="value"
            placeholder="请输入搜索关键词"
            show-action
            @search="onSearch"
            @cancel="onCancel"
        />
        <!-- 热门搜索 -->
        <div class="hostTit">
            <img src="http://127.0.0.1:4000/竖杠1.png">
            <span>热门搜索</span>
        </div>
        <div class="host">
            <div @click="search('火锅')">
                    <span>火锅</span>
            </div>
            <div @click="search('公园')">
                <span>公园</span>
            </div>
            <div @click="search('美食')">
                    <span>美食</span>
            </div>
            <div @click="search('咖啡')">
                    <span>咖啡</span>
            </div>
            <div @click="search()">
                    <span>博物馆</span>
            </div>
            <div @click="search()">
                    <span>商业街</span>
            </div>
           
            
        </div>
        <!-- 搜索历史 -->
        <div class="history">
            <span>
                <img src="http://127.0.0.1:4000/竖杠1.png">搜索历史
            </span>
            <span>
                <img src="http://127.0.0.1:4000/删除.png">
            </span>
        </div>
        <!-- 搜索历史内容 -->
        <div class="historyCon">
            <div class="Con">您还没有搜索</div>
        </div>
    </div>    
</template>
<script>
export default {
     beforeDestroy(){  
        this.bus.$emit("title",this.value)
    },
    mounted(){
        document.getElementById("i").focus()
    },
    data(){
        return{
            value:"",//搜索框默认值
        }
    },
    methods:{
        onSearch(){//去除字符串开头结尾空格
            if(this.value.trim()==""){
                this.$messagebox.confirm("请输入搜索内容")
                .then(res=>{})
                .catch(err=>{})
            }else{
                this.$router.push('Search');
                console.log(this.value)
            }
            
        },
        onCancel(){
            this.$router.go(-1);
        },
        search(value){
            this.value=value;
            this.$router.push('Search');
        }
    },
}
</script>
<style scoped>
    /* 热门搜索 */
    .hostTit{
        padding-top:20px;
        border-top:1px solid gray;
        font-size:20px;
    }
     .hostTit img,.history span:first-child img{
         width:35px;
         height:20px;
         margin-bottom:-3px;
     }
     .history span:last-child img{
         width:26px;
         height:26px;
     }
    /* 热门搜索推荐内容 */
    .host{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom:25px;
        
    }
    .host div{
        margin-top:15px;
        width:25%;
        height:30px;
        
        text-align: center;
        border:1px solid #539C6E;
        border-radius:5px;
        
        
    }
    .host div span{
         color:#539C6E;
         font-size:14px;
         line-height: 30px;
    }
    /* 搜索历史 */
    .history{
        display:flex;
        justify-content: space-between;
        font-size:20px;
        margin:0 10px 0 0;
    }
    .historyCon{
        margin-top:10px;
        font-size: 14px;
        color:gray;
    }
    .historyCon .Con{
        width: 100%;
        display:flex;
        justify-content: center;
    }
</style>



