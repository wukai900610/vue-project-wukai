<style scoped lang="scss">
    .listPage{
        .banner{
            height: 150px;
            .mint-swipe-items-wrap{
                .mint-swipe-item{
                    width: 100%;
                    // height: 100%;
                    a{
                        display: block;
                        width: 100%;
                        height: 100%;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        p{
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            padding: 5px;
                            background-color: rgba(0, 0, 0, .7);
                            color: #fff;
                        }
                    }
                }
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

<div class="listPage">
    <my-header :title="currentListParams.name"></my-header>

    <mt-swipe :auto="50000" class="banner">
        <mt-swipe-item v-for="item in $store.state.tzgg.banner" :key="item.id">
            <router-link :to="{'name':'Home'}" :style="{backgroundImage: 'url(' + item.typeImg + ')'}" >
                <p>{{item.title}}</p>
            </router-link>
        </mt-swipe-item>
    </mt-swipe>

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
        goback:function () {
            this.$router.back()
        },
        loadBanner:function(){
            setTimeout(function () {
                this.$store.dispatch('loadBanner',{
                    'params':{'channelIds': 120}
                }).then(() => {
                    this.$refs.loadmore.onTopLoaded()
                }).catch(err => {
                    this.$refs.loadmore.onTopLoaded()
                })
            }.bind(this), 500)
        },
        loadListTop:function(){
            setTimeout(function () {
                this.$store.dispatch('loadList',{
                    'params':{'channelIds': this.$route.params.id},
                    'listType':this.currentListParams.listTypeName,
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
                        'first':this.$store.state.list.length
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
        this.loadBanner()
        if(this.storeAliasName.list.length==0){
            this.loadListTop()
        }

    },
    components:{
        MyHeader
    }
}

</script>
