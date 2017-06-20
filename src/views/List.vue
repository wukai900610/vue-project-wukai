<style scoped lang="scss">
    .listPage{
        margin-top: 50px;
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

<div class="listPage">
    <my-header :title="currentListParams.name" :isFixed="true"></my-header>

    <mt-loadmore :top-method="loadListTop" :bottom-method="loadListBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul class="list">
            <li v-for="item in storeAliasName.list">
                <router-link :to="{ 'name': 'Content', params: { id: item.id }}">
                    <h5><b>[{{item.channel}}]</b>{{item.title}}</h5>
                    <p class="date">{{item.releaseDate}}</p>
                </router-link>
            </li>
        </ul>
    </mt-loadmore>
    <mt-button type="default" v-if="showManualRefresh" @click="manualRefresh">刷新</mt-button>
</div>

</template>

<script>
import {
    Header,Popup,Toast
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

        },
        manualRefresh:function() {
            this.showManualRefresh=false
            // this.loadListInit()
        }
    },
    mounted:function () {
        if(this.storeAliasName.list.length==0){
            this.loadListTop()
        }
    },
    components:{
        MyHeader
    }
}

</script>
