<style scoped lang="scss">
    .listPage{
        .smallNav{
            overflow: auto;
            position: fixed;
            width: 100%;
            top: 50px;
            left: 0;
            background-color: #fff;
            z-index: 1;
            a{
                float: left;
                width: 25%;
                line-height: 2.5;
                text-align: center;
                font-size: 14px;
                &.active{
                    border-bottom: 2px solid #26a2ff;
                }
            }
        }
    }
</style>

<template>

<div class="listPage">
    <my-header title="信用动态" isBackTop="true" :isFixed="true"></my-header>

    <span class="smallNav">
        <router-link
            active-class="active"
            :to="{ 'name': 'ListXydtChild', params: { 'id': '107','childType':'bdList' }}">
            郑州动态
        </router-link>
        <router-link
            active-class="active"
            :to="{ 'name': 'ListXydtChild', params: { 'id': '108','childType':'wdList' }}">
            外地动态
        </router-link>
        <router-link
            active-class="active"
            :to="{ 'name': 'ListXydtChild', params: { 'id': '150','childType':'hnList' }}">
            河南动态
        </router-link>
        <router-link
            active-class="active"
            :to="{ 'name': 'ListXydtChild', params: { 'id': '151','childType':'gjList' }}">
            国家动态
        </router-link>
    </span>

    <router-view></router-view>
</div>

</template>

<script>

import MyHeader from '../components/Header.vue'

export default {
    data() {
        return {
            selected:'1',
            allLoaded:false
        }
    },
    computed:{
    },
    methods: {
    },
    components:{
        MyHeader
    }
}

</script>
