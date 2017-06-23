<style scoped lang="scss">
    .xygsBox{
        position: absolute;
        top: 113px;
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
            .list{
                padding: 0 5px;
                li{
                    overflow: auto;
                    border-bottom: 1px solid #ccc;
                    a{
                        display: block;
                        padding: 5px 0;
                    }
                }
            }
        }


    }
</style>

<template>

<div class="xygsBox">
    <div class="loadListBox" v-if="loading">
        <mt-spinner type="fading-circle" color="#26a2ff"></mt-spinner>
    </div>

    <div class="sgsSearch">
        <input type="text" v-model.trim.lazy="keyword" placeholder="请输入关键字">
        <span class="sgsBtn" @click="loadListTop">搜索</span>
    </div>

    <div class="sgsResult">
        <h5>
            <span>搜索词：{{keyword}}</span>
            <p>搜索结果</p>
        </h5>


        <mt-loadmore :top-method="loadListTop" :bottom-method="loadListBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <ul class="list" v-if="$route.params.name=='frxk'">
                <li v-for="item in storeAliasName[$route.params.name].list">
                    <router-link :to="{ 'name': 'XygsContent', params: { id: item.id }}">
                        <table>
                            <tr>
                                <td>信用主体名称：</td>
                                <td>{{item.xyztmc}}</td>
                            </tr>
                            <tr>
                                <td>决定书文号：</td>
                                <td>{{item.wsh}}</td>
                            </tr>
                            <tr>
                                <td>项目名称：</td>
                                <td>{{item.xmmc}}</td>
                            </tr>
                            <tr>
                                <td>许可决定日期：</td>
                                <td>{{item.xkrq}}</td>
                            </tr>
                            <tr>
                                <td>许可机关：</td>
                                <td>{{item.xzjg}}</td>
                            </tr>
                        </table>
                    </router-link>
                </li>
            </ul>
            <ul class="list" v-if="$route.params.name=='frcf'">
                <li v-for="item in storeAliasName[$route.params.name].list">
                    <router-link :to="{ 'name': 'XygsContent', params: { id: item.id }}">
                        <table>
                            <tr>
                                <td>信用主体名称：</td>
                                <td>{{item.xyztmc}}</td>
                            </tr>
                            <tr>
                                <td>决定书文号：</td>
                                <td>{{item.wsh}}</td>
                            </tr>
                            <tr>
                                <td>项目名称：</td>
                                <td>{{item.xmmc}}</td>
                            </tr>
                            <tr>
                                <td>处罚决定日期：</td>
                                <td>{{item.cfrq}}</td>
                            </tr>
                            <tr>
                                <td>处罚机关：</td>
                                <td>{{item.xzjg}}</td>
                            </tr>
                        </table>
                    </router-link>
                </li>
            </ul>
            <ul class="list" v-if="$route.params.name=='zzrxk'">
                <li v-for="item in storeAliasName[$route.params.name].list">
                    <router-link :to="{ 'name': 'XygsContent', params: { id: item.id }}">
                        <table>
                            <tr>
                                <td>信用主体名称：</td>
                                <td>{{item.xyztmc}}</td>
                            </tr>
                            <tr>
                                <td>决定书文号：</td>
                                <td>{{item.wsh}}</td>
                            </tr>
                            <tr>
                                <td>名称：</td>
                                <td>{{item.xmmc}}</td>
                            </tr>
                            <tr>
                                <td>许可决定日期：</td>
                                <td>{{item.xkjzrq}}</td>
                            </tr>
                            <tr>
                                <td>许可机关：</td>
                                <td>{{item.xzjg}}</td>
                            </tr>
                        </table>
                    </router-link>
                </li>
            </ul>
            <ul class="list" v-if="$route.params.name=='zzrcf'">
                <li v-for="item in storeAliasName[$route.params.name].list">
                    <router-link :to="{ 'name': 'XygsContent', params: { id: item.id }}">
                        <table>
                            <tr>
                                <td>信用主体名称：</td>
                                <td>{{item.xyztmc}}</td>
                            </tr>
                            <tr>
                                <td>决定书文号：</td>
                                <td>{{item.wsh}}</td>
                            </tr>
                            <tr>
                                <td>名称：</td>
                                <td>{{item.xmmc}}</td>
                            </tr>
                            <tr>
                                <td>处罚决定日期：</td>
                                <td>{{item.cfrq}}</td>
                            </tr>
                            <tr>
                                <td>处罚机关：</td>
                                <td>{{item.xzjg}}</td>
                            </tr>
                        </table>
                    </router-link>
                </li>
            </ul>
        </mt-loadmore>
    </div>

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
            // loading:true,
            loading:false,
            keyword:'',
            pageNo:1
        }
    },
    computed:{
        storeAliasName: function(){
            return this.$store.state.xygs
        }
    },
    methods: {
        loadListTop:function(){
            if(this.keyword){
                this.loading=true
                this.allLoaded=false
                setTimeout(function () {
                    this.$store.dispatch('loadXygsList',{
                        'params':{
                            'type': this.$route.params.name,
                            'keyword': this.keyword,
                            'pageNo':1
                        }
                    }).then(() => {
                        this.loading=false
                        Toast({
                            message: '刷新成功',
                            position: 'top',
                            duration: 500
                        })
                        this.$refs.loadmore.onTopLoaded()
                    }).catch(err => {
                        this.loading=false
                        Toast({
                            message: '加载失败，手动刷新试试',
                            position: 'top',
                            duration: 500
                        })
                        this.$refs.loadmore.onTopLoaded()
                    })
                }.bind(this), 500)
            }else{
                Toast({
                    message: '请输入查询关键词',
                    position: 'middle',
                    duration: 500
                })
                this.$refs.loadmore.onTopLoaded()
            }
        },
        loadListBottom:function(){
            let currentPage=++this.pageNo
            // 判断是否加载到最后
            if(this.keyword){
                if(currentPage>this.storeAliasName[this.$route.params.name].totalPage){
                    this.$refs.loadmore.onBottomLoaded()
                    this.allLoaded=true
                    Toast({
                        message: '已经加载完啦',
                        position: 'middle',
                        duration: 1000
                    })
                }else{
                    this.allLoaded=false
                    setTimeout(function () {
                        this.$store.dispatch('loadXygsList',{
                            'params':{
                                'type': this.$route.params.name,
                                'keyword': this.keyword,
                                'pageNo':currentPage
                            },
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
            }else{
                Toast({
                    message: '请输入查询关键词',
                    position: 'middle',
                    duration: 500
                })
                this.$refs.loadmore.onBottomLoaded()
            }
        },
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route' (to, from) {
            this.keyword=''
            this.allLoaded=false
            this.pageNo=1
        }
        // '$route':'loadListTop'
    },
    mounted:function () {
    },
    components:{
    }
}

</script>
