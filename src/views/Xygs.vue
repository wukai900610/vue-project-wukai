<style scoped lang="scss">
    .xygsPage{
        .sgsNav{
            display: block;
            overflow: auto;
            margin-bottom: 5px;
            padding: 5px;
            border-bottom: 5px solid #f1f1f1;
            a{
                float: left;
                padding: 5px 0;
                box-sizing: border-box;
                margin-right: 5px;
                width: 87px;
                line-height: 1.2;
                background-color: #f1f1f1;
                text-align: center;
                font-size: 14px;
                &.active{
                    background-color: #ec6941;
                    color: #fff;
                }
                &:last-child{
                    margin-right: 0;
                }
            }
        }
        .sgsSearch{
            padding: 0 5px;
            display: flex;
            input{
                flex:1;
                margin-right: 5px;
                border:none;
                height: 35px;
                line-height: 35px;
                text-indent: .5em;
                border: 1px solid #ccc;
                font-size: 14px;
            }
            .sgsBtn{
                float: right;
                box-sizing: border-box;
                padding: 0 20px;
                height: 35px;
                line-height: 37px;
                border: none;
                background-color: #2795ee;
                color: #fff;
                font-size: 12px;
            }
        }
        .sgsResult{
            padding: 0 5px;
            h5{
                padding: 5px;
            }
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

<div class="xygsPage">
    <my-header title="信用公示"></my-header>

    <span class="sgsNav">
        <router-link
            active-class="active"
            :to="{ 'name': 'ListFgzcChild', params: { 'id': '109','childType':'bdList' }}">
            法人<br/>行政许可
        </router-link>
        <router-link
            active-class="active"
            :to="{ 'name': 'ListFgzcChild', params: { 'id': '110','childType':'wdList' }}">
            法人<br/>行政处罚
        </router-link>
        <router-link
            active-class="active"
            :to="{ 'name': 'ListFgzcChild', params: { 'id': '152','childType':'hnList' }}">
            自然人<br/>行政许可
        </router-link>
        <router-link
            active-class="active"
            :to="{ 'name': 'ListFgzcChild', params: { 'id': '153','childType':'gjList' }}">
            自然人<br/>行政处罚
        </router-link>
    </span>

    <div class="sgsSearch">
        <input type="text" placeholder="请输入关键字">
        <span class="sgsBtn">搜索</span>
    </div>

    <div class="sgsResult">
        <h5>搜索结果</h5>

        <!-- <mt-loadmore :top-method="loadListTop" :bottom-method="loadListBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <ul class="list">
                <li v-for="item in storeAliasName.list">
                    <router-link :to="{ 'name': 'Content', params: { id: item.id }}">
                        <h5><b>[{{item.channel}}]</b>{{item.title}}</h5>
                        <p class="date">{{item.releaseDate}}</p>
                    </router-link>
                </li>
            </ul>
        </mt-loadmore>
        <mt-button type="default" v-if="showManualRefresh" @click="manualRefresh">刷新</mt-button> -->
    </div>

</div>

</template>

<script>
import {
    Toast
}
from 'mint-ui'

import MyHeader from '../components/Header.vue'

export default {
    data() {
        return {
            showManualRefresh:false,
            allLoaded:false
        }
    },
    computed:{
        currentListParams: function() {
            let obj = {}
            this.$store.state.channel.forEach(function(value, index, array) {
                if(this.$route.params.id==value.channelId){
                    obj = value
                }
            }.bind(this))

            return obj
        },
        storeAliasName: function(){
            let listTypeName=this.currentListParams.listTypeName
            return this.$store.state[listTypeName]
        }
    },
    methods: {
        loadListTop:function(){
            setTimeout(function () {
                this.$store.dispatch('loadList',{
                    'params':{'channelIds': this.$route.params.id},
                    'listType':this.currentListParams.listTypeName
                }).then(() => {
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
                this.$store.dispatch('loadList',{
                    'params':{
                        'channelIds': this.$route.params.id,
                        'first':this.storeAliasName.list.length
                    },
                    'listType':this.currentListParams.listTypeName,
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

        }
    },
    mounted:function () {
        this.loadListTop()
    },
    components:{
        MyHeader
    }
}

</script>
