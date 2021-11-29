<template>
    <div>
        <h3>1.信息框</h3>
        <mt-button type="success" @click="T1">提示</mt-button>
        <mt-button type="default" @click="T">提示</mt-button>
        <mt-button type="primary" @click="Q">确认</mt-button>
        <mt-button type="danger" @click="S">输入</mt-button>
        <br>
        <br>
        <h3>2.switch</h3>
        <mt-switch v-model="val" @change="C">Switch</mt-switch>
        <h3>3.子组件</h3>
        <zzzzz :msg='msg'></zzzzz>
        <h3>4.Vuex</h3>
        <!-- 获取全局数据 -->
        <p>{{$store.getters.getFa}}</p>
        <!-- 修改全局数据 -->
        <mt-button type="default" @click="X">修改Vuex全局函数</mt-button>
    </div>
</template>
<script>
import zzzzz from './zzzzz.vue';//引入子组件
export default ({
    components:{zzzzz},//注册子组件
    data() {
        return{
            val:'',
            msg:'我是传给子组件信息'
        }
    },
    methods:{
         T1(){
            this.$messagebox('提示头','提示信息...');
        },
        T(){
            this.$messagebox.alert('提示信息','提示头').then(()=>{
                console.log('alert');
            });
        },
        Q(){
            this.$messagebox.confirm('确认框').then(res=>{
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
        },
        S(){
            this.$messagebox.prompt('确认框').then(value=>{
                console.log(value);
            }).catch(err=>{
                console.log(err);
            })
        },
        C(){
            console.log(this.val)
        },
        X(){
            this.$store.commit("subFa");
        }
    }

})
</script>
<style  scoped>

</style>
