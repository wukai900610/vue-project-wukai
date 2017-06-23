<style scoped lang="scss">
    .searchPage{
        .searchBox{
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            padding: 10px;
            background-color: #2795ee;
            .back{
                margin-right: 10px;
                color: #fff;
            }
            i{
                position: absolute;
                top: 50%;
                right: 65px;
                padding: 10px;
                transform: translate(0,-50%);
                background: url('../assets/searchIco.png') center -84px no-repeat;
                background-size: 20px;
            }
            input{
                flex:1;
                margin-right: 10px;
                border:none;
                height: 35px;
                text-indent: .5em;
                font-size: 14px;
            }
        }

    }
</style>

<template>
    <!-- <mt-search v-model="value" :result.sync="result"></mt-search> -->
    <div class="searchPage">
        <div class="searchBox">
            <router-link :to="{ name: 'Home'}" class="back">返回</router-link>
            <i v-if="keyword.showClearKeyword" @click="clearKeywordFun"></i>
            <input type="text" v-model.trim="keyword.word" placeholder="请输入关键词">
            <mt-button size="small" icon="search" @click.native="goSearchFun"></mt-button>
        </div>

    </div>

</template>

<script>
import {
    Toast
}
from 'mint-ui'

import Gfun from '../libs/gFun'

export default {
    data() {
        return {
            keyword:{
                word:'',
                showClearKeyword:false
            }
        }
    },
    methods: {
        checkKeywordFun:function () {
            if(this.keyword.word.length>0){
                this.keyword.showClearKeyword=true
            }else{
                this.keyword.showClearKeyword=false
            }
        },
        clearKeywordFun:function () {
            this.keyword={
                word:'',
                showClearKeyword:false
            }
        },
        goSearchFun:function () {
            if(this.keyword.word.length>0){
                //本地 保存 搜索 值
                Gfun.setlocalStorage('keyword',this.keyword)
                this.$store.dispatch('loadSearchList',{
                        'params':{'q': this.keyword.word}
                    }).then(() => {
                    Toast({
                        message: '搜索成功',
                        position: 'top',
                        duration: 500
                    })
                }).catch(err => {
                    Toast({
                        message: '搜索失败',
                        position: 'top',
                        duration: 500
                    })
                })
            }
        }
    },
    watch: {
        'keyword.word'(){
            this.checkKeywordFun()
        }
    },
}

</script>
