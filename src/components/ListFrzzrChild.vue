<style scoped lang="scss">
    .listBox{
        position: absolute;
        top: 50px;
        bottom: 0;
        width: 100%;
        .loadListBox{
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            z-index: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .list{
            padding: 0 5px;
            li{
                overflow: auto;
                border-bottom: 1px solid #ccc;
                a{
                    display: block;
                    padding: 5px 0;
                    h5{
                        font-size: 16px;
                        b{
                            color: #42b983;
                        }
                    }
                }
            }
        }

    }
</style>

<template>

<div class="listBox">
    {{$route.params.type}}
</div>

</template>

<script>
import {
    Popup,Toast
}
from 'mint-ui'

import MyHeader from '../components/Header.vue'

export default {
    data() {
        return {
            allLoaded:false,
            loading:true,
        }
    },
    computed:{
        // currentListParams: function() {
        //     let obj = {}
        //     let arr=[{ 'id': '109',childType:'bdList' },{ 'id': '110',childType:'wdList' },{ 'id': '152',childType:'hnList' },{ 'id': '153',childType:'gjList' }]
        //     arr.forEach(function(value, index, array) {
        //         if(this.$route.params.id==value.id){
        //             obj = value
        //         }
        //     }.bind(this))
        //     return obj
        // },
        // storeAliasName: function(){
        //     return this.$store.state.fgzc
        // }
    },
    methods: {
        loadListTop:function(){
            setTimeout(function () {
                this.$store.dispatch('loadFgzcList',{
                    'params':{
                        'channelIds': this.currentListParams.id,
                        'childType': this.currentListParams.childType
                    },
                    'listType':'fgzc',
                }).then(() => {
                    this.loading=false
                    Toast({
                        message: '刷新成功',
                        position: 'top',
                        duration: 500
                    })
                    this.$refs.loadmore.onTopLoaded()
                }).catch(err => {
                    Toast({
                        message: '加载失败，手动刷新试试',
                        position: 'top',
                        duration: 500
                    })
                    this.$refs.loadmore.onTopLoaded()
                })
            }.bind(this), 500)
        },
        loadListBottom:function(){
            setTimeout(function () {
                this.$store.dispatch('loadFgzcList',{
                    'params':{
                        'channelIds': this.currentListParams.id,
                        'first':this.storeAliasName[this.currentListParams.childType].length,
                        'childType': this.currentListParams.childType
                    },
                    'listType':'fgzc',
                    'isLoadMore':true
                }).then(() => {
                    Toast({
                        message: '加载成功',
                        position: 'top',
                        duration: 500
                    })
                    this.$refs.loadmore.onBottomLoaded()
                }).catch(err => {
                    Toast({
                        message: '加载失败',
                        position: 'top',
                        duration: 500
                    })
                    this.$refs.loadmore.onBottomLoaded()
                })
            }.bind(this), 500)

        },
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route' (to, from) {
            // if(this.storeAliasName[this.currentListParams.childType].length==0){
            //     this.loading=true
            //     this.loadListTop()
            // }
        }
        // '$route':'loadListTop'
    },
    mounted:function () {
    },
    components:{
    }
}

</script>
