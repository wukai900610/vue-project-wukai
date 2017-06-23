<style scoped lang="scss">
    .content{
        .loading{
            position: fixed;
            top: 0;
            bottom: 0;
            width: 100%;
            display: flex;
            justify-content:center;
            align-items: center;
            // background-color: #333;
            .loadBg{
                opacity: .2;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                // background-color: #000;
            }
            .loadBox{
                padding: 10px 25px;
                border-radius: 5px;
                // border: 1px solid #2c3e50;
                // background-color: #2c3e50;
                box-shadow: 0 0 20px #2c3e50;
                // text-shadow: 1px 1px 0 #2c3e50;
                color: #2c3e50;
                span.logo{
                    display: block;
                    margin: 0 auto;
                    width: 32px;
                    height: 32px;
                    // padding: 16px;
                    background: url('../assets/logo.png') center/contain no-repeat;
                }
            }
        }
        .article{
            padding: 10px;
            .title{
                text-align: center;
                font-size: 18px;
            }
            .smallInfo{
                text-align: right;
            }
            .articleBox{
                line-height: 1.6;
                text-indent: 2em;
                font-size: 14px;
            }
        }
    }
</style>

<template>

<div class="content">
    <my-header :title="$store.state.content.title" :has-more="true"></my-header>

    <transition name="fade">
        <div class="loading" v-show="loading">
            <div class="loadBg"></div>
            <div class="loadBox">
                <!-- <mt-spinner class="myLoad" type="double-bounce" color="#42b983"></mt-spinner> -->
                <span class="logo"></span>
                <mt-spinner class="myLoad" type="triple-bounce" color="#26a2ff"></mt-spinner>
                <span>加载中</span>
            </div>
        </div>
    </transition>

    <div class="article">
        <h1 class="title">{{$store.state.content.title}}</h1>
        <p class="smallInfo">{{$store.state.content.releaseDate}}</p>
        <div class="articleBox">
            {{$store.state.content.txt}}
        </div>
    </div>
</div>

</template>

<script>
import { mapGetters } from 'vuex';

import {
    Toast
}
from 'mint-ui'

import MyHeader from '../components/Header.vue'

export default {
    data() {
        return {
            loading:true,
            content:{}
        }
    },
    computed: mapGetters([
    ]),
    methods: {
        loadContent:function(){
            setTimeout(function () {
                this.$store.dispatch('loadContent',{'params':{'id': this.$route.params.id}})
                .then(() => {
                    this.loading=false

                    // this.content_filterTxtImg()
                })
                .catch(err => {
                    this.loading=false
                    Toast({
                        message: '内容加载失败',
                        position: 'top',
                        duration: 500
                    })
                })
            }.bind(this), 500)
        }
    },
    mounted:function () {
        window.scrollTo(0, 0)
        this.loadContent()
    },
    components:{
        MyHeader
    }
}

</script>
