<style scoped lang="scss">
    .xygsPage{
        .sgsNav{
            overflow: auto;
            position: fixed;
            width: 100%;
            top: 50px;
            left: 0;
            padding: 5px;
            background-color: #fff;
            border-bottom: 5px solid #f1f1f1;
            z-index: 1;
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
    }
</style>

<template>

<div class="xygsPage">
    <my-header title="信用公示" isBackTop="true" :isFixed="true"></my-header>

    <span class="sgsNav">
        <router-link
            active-class="active"
            :to="{ 'name': 'SgsChild', params: { 'name': 'frxk' }}">
            法人<br/>行政许可
        </router-link>
        <router-link
            active-class="active"
            :to="{ 'name': 'SgsChild', params: { 'name': 'frcf' }}">
            法人<br/>行政处罚
        </router-link>
        <router-link
            active-class="active"
            :to="{ 'name': 'SgsChild', params: { 'name': 'zzrxk' }}">
            自然人<br/>行政许可
        </router-link>
        <router-link
            active-class="active"
            :to="{ 'name': 'SgsChild', params: { 'name': 'zzrcf' }}">
            自然人<br/>行政处罚
        </router-link>
    </span>

    <router-view></router-view>

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
        // this.loadListTop()
    },
    components:{
        MyHeader
    }
}

</script>
