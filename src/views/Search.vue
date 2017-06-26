<style lang="scss">
.searchPage {
    /*display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;*/
    padding-top: 55px;
    .list {
        overflow: auto;
        padding: 10px;
        border-top: 1px solid #f7f7f7;
        li {
            position: relative;
            overflow: auto;
            border-bottom: 1px solid #f7f7f7;
            // &:active {
            //     background-color: #f1f1f1;
            // }
            a {
                overflow: auto;
                display: block;
                padding: 10px 0;
                img {
                    float: left;
                    width: 150px;
                    margin-right: 10px;
                }
                h4 {
                    padding-bottom: 15px;
                    line-height: 1.5;
                    color: #333;
                    font-size: 14px;
                }
                p.date {
                    position: absolute;
                    bottom: 5px;
                    right: 5px;
                    color: #999;
                    font-size: 14px;
                }
            }
        }
    }
}

</style>

<template>

<div class="searchPage">
    <my-search></my-search>

    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" bottomPullText="上拉加载" bottomDropText="释放加载">
        <ul class="list">
            <li v-for="item in $store.state.search.list">
                <router-link :to="{ name: 'Content', params: { id: item.id }}">
                    <img :src="item.typeImg" :alt="item.title" v-if="item.typeImg">
                    <h4>【{{item.channel}}】{{item.title}}</h4>
                    <p class="date">{{item.releaseDate}}</p>
                </router-link>
            </li>
        </ul>
    </mt-loadmore>
</div>

</template>

<script>
import {
    Toast
}
from 'mint-ui'

import Gfun from '../libs/gFun'

import MySearch from '../components/MySearch'

export default {
    data() {
        return {
            allLoaded: false,
        }
    },
    methods:{
        loadBottom:function () {
            let keyword = Gfun.getlocalStorage('keyword')
            if(keyword){
                setTimeout(function () {
                    this.$store.dispatch('loadSearchList',{
                            'params':{
                                'q': keyword.word,
                                'first':this.$store.state.search.list.length
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
                            message: '加载失败',
                            position: 'top',
                            duration: 500
                        })
                        this.$refs.loadmore.onBottomLoaded()
                    })
                }.bind(this), 500)

                //判断数据是否全部加载完
                if(!this.$store.state.search.allLoaded){
                    this.allLoaded=true
                }
            }else{
                Toast({
                    message: '请输入关键词',
                    position: 'middle',
                    duration: 500
                })
                this.$refs.loadmore.onBottomLoaded()
            }
        }
    },
    components:{
        MySearch
    }
}

</script>
