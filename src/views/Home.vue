<style lang="scss">
    .home{
        .search{
            padding: 10px;
            background: url('../assets/searchIco.png') no-repeat;
            background-size: 20px;
        }
        .banner{
            height: 150px;
            .mint-swipe-items-wrap{
                .mint-swipe-item{
                    width: 100%;
                    // height: 100%;
                    img{
                        display: block;
                        width: 100%;
                    }
                }
            }
        }
        .mainNav{
            overflow: auto;
            padding: 0 5px 5px 5px;
            border-bottom: 5px solid #f7f7f7;
            li{
                overflow: hidden;
                float: left;
                width: 33.33%;
                a{
                    position: relative;
                    display: block;
                    padding-bottom: 5px;
                    div{
                        margin: -10px auto -20px;
                        width: 84px;
                        height: 84px;
                        background-repeat: no-repeat;
                        background-image: url('../assets/navIco.png');
                        background-position-x: center;
                        transform: scale(.5);
                    }
                    span{
                        display: block;
                        text-align: center;
                        font-size: 14px;
                    }
                }
                &:nth-child(1){
                    a{
                        div{
                            background-position-y: 0;
                        }
                    }
                }
                &:nth-child(2){
                    a{
                        div{
                            background-position-y: -91px;
                        }
                    }
                }
                &:nth-child(3){
                    a{
                        div{
                            background-position-y: -182px;
                        }
                    }
                }
                &:nth-child(4){
                    a{
                        div{
                            background-position-y: -273px;
                        }
                    }
                }
                &:nth-child(5){
                    a{
                        div{
                            background-position-y: -363px;
                        }
                    }
                }
                &:nth-child(6){
                    a{
                        div{
                            background-position-y: -452px;
                        }
                    }
                }
            }
        }
        .mainList{
            padding: 0 10px;
            h3 {
                margin: 10px 0;
                line-height: 1.8;
                border-left: 5px solid #2795ee;
                text-indent: .5em;
                font-size: 16px;
                a {
                    float: right;
                    color: #333;
                    font-size: 14px;
                    font-weight: normal;
                    &:active {
                        color: #2795ee;
                    }
                }
            }
            ul {
                overflow: auto;
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
                            width: 120px;
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
    }
</style>

<template>

<div class="home">
    <mt-header title="信用郑州">
        <router-link :to="{name:'Search'}" slot="right" class="search"></router-link>
    </mt-header>

    <mt-swipe :auto="5000" class="banner">
        <mt-swipe-item v-for="item in banner" :key="item.id">
            <img :src="item.src">
        </mt-swipe-item>
    </mt-swipe>

    <ul class="mainNav">
        <li>
            <router-link :to="{ 'name': 'ListTzgg', params: { id: 114,name:'最新动态' }}">
                <div></div>
                <span>最新动态</span>
            </router-link>
        </li>
        <li>
            <router-link :to="{ 'name': 'ListXydt', params: { id: 106,name:'信用动态' }}">
                <div></div>
                <span>信用动态</span>
            </router-link>
        </li>
        <li>
            <router-link :to="{ 'name': 'ListFgzc', params: { id: 111,name:'政策法规' }}">
                <div></div>
                <span>政策法规</span>
            </router-link>
        </li>
        <li>
            <router-link :to="{'name':'Xygs', params: { id: 115,name:'信用公示' }}">
                <div></div>
                <span>信用公示</span>
            </router-link>
        </li>
        <li>
            <router-link :to="{ 'name': 'List', params: { id: 115,name:'入围机构' }}">
                <div></div>
                <span>入围机构</span>
            </router-link>
        </li>
        <li>
            <router-link :to="{ 'name': 'List', params: { id: 116,name:'信用报告' }}">
                <div></div>
                <span>信用报告</span>
            </router-link>
        </li>
    </ul>

    <div class="mainList">
        <h3>
            <router-link :to="{ 'name': 'ListTzgg', params: { id: 114,name:'最新动态' }}">
                more >>
            </router-link>
            最新动态
        </h3>
        <ul>
            <li v-for="item in $store.state.home.tzgg">
                <router-link :to="{ name: 'Content', params: { id: item.id }}">
                    <img :src="item.typeImg" :alt="item.title">
                    <h4>{{item.title}}</h4>
                    <p class="date">{{item.releaseDate}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</div>

</template>

<script>
import Util from '../libs/util'
export default {
    data() {
        return {
            banner:[
                {'src':require('../assets/banner2.jpg'),'id':1},
                {'src':require('../assets/banner3.jpg'),'id':2},
                {'src':require('../assets/banner4.jpg'),'id':3}
            ]
        }
    },
    methods: {
        loadHomeTzgg:function(){
            this.$store.dispatch('loadHomeTzgg',{'params':{'channelIds': 120}}).then(() => {
            }).catch(err => {
                Toast({
                    message: '最新动态加载失败',
                    position: 'top',
                    duration: 500
                })
            })
        },
    },
    mounted:function () {
        this.loadHomeTzgg()
        Util.title()
    },
    components:{
    }
}

</script>
