<style scoped lang="scss">
    .xygsPage{
        .sgsNav{
            overflow: auto;
            position: fixed;
            display: flex;
            box-sizing: border-box;
            width: 100%;
            top: 50px;
            left: 0;
            padding: 5px 2px;
            background-color: #fff;
            border-bottom: 5px solid #f1f1f1;
            z-index: 1;
            a{
                flex:1;
                padding: 5px 0;
                margin: 0 3px;
                line-height: 1.2;
                border-bottom: 2px solid #2c3e50;
                background-color: #f1f1f1;
                text-align: center;
                font-size: 14px;
                &.active{
                    background-color: #ec6941;
                    border: none;
                    color: #fff;
                }
            }
        }
    }
</style>

<template>

<div class="xygsPage">
    <my-header title="信用公示" :isBackTop="true" :isFixed="true"></my-header>

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
        }
    },
    computed:{
    },
    methods: {
    },
    mounted:function () {
    },
    components:{
        MyHeader
    }
}

</script>
