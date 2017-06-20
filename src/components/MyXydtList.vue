<style scoped lang="scss">
    .listBox{
        position: absolute;
        top: 90px;
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
    <div class="loadListBox" v-if="loading">
        <mt-spinner type="fading-circle" color="#26a2ff"></mt-spinner>
    </div>

    <mt-loadmore :top-method="loadListTop" :bottom-method="loadListBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul class="list">
            <li v-for="item in storeAliasName[currentListParams.childType]">
                <router-link :to="{ 'name': 'Content', params: { id: item.id }}">
                    <h5><b>[{{item.channel}}]</b>{{item.title}}</h5>
                    <p class="date">{{item.releaseDate}}</p>
                </router-link>
            </li>
        </ul>
    </mt-loadmore>
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
        currentListParams: function() {
            let obj = {}
            let arr=[{ 'id': '107',childType:'bdList' },{ 'id': '108',childType:'wdList' },{ 'id': '150',childType:'hnList' },{ 'id': '151',childType:'gjList' }]
            arr.forEach(function(value, index, array) {
                if(this.$route.params.id==value.id){
                    obj = value
                }
            }.bind(this))
            return obj
        },
        storeAliasName: function(){
            return this.$store.state.xydt
        }
    },
    methods: {
        loadListTop:function(){
            setTimeout(function () {
                this.$store.dispatch('loadXydtList',{
                    'params':{
                        'channelIds': this.currentListParams.id,
                        'childType': this.currentListParams.childType
                    },
                    'listType':'xydt',
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
                this.$store.dispatch('loadXydtList',{
                    'params':{
                        'channelIds': this.currentListParams.id,
                        'first':this.storeAliasName[this.currentListParams.childType].length,
                        'childType': this.currentListParams.childType
                    },
                    'listType':'xydt',
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
            if(this.storeAliasName[this.currentListParams.childType].length==0){
                this.loading=true
                this.loadListTop()
            }
        }
        // '$route':'loadListTop'
    },
    mounted:function () {
        if(this.storeAliasName[this.currentListParams.childType].length==0){
            this.loadListTop()
        }else{
            this.loading=false
        }
    },
    components:{
    }
}

</script>
