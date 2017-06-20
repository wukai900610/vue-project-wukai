<style scoped lang="scss">
    .listPage{
        .smallNav{
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
    <my-header title="法归政策" isBackTop="true"></my-header>

    <span class="smallNav">
        <router-link
            active-class="active"
            :to="{ 'name': 'ListFgzcChild', params: { 'id': '109','childType':'bdList' }}">
            郑州政策
        </router-link>
        <router-link
            active-class="active"
            :to="{ 'name': 'ListFgzcChild', params: { 'id': '110','childType':'wdList' }}">
            外地政策
        </router-link>
        <router-link
            active-class="active"
            :to="{ 'name': 'ListFgzcChild', params: { 'id': '152','childType':'hnList' }}">
            河南政策
        </router-link>
        <router-link
            active-class="active"
            :to="{ 'name': 'ListFgzcChild', params: { 'id': '153','childType':'gjList' }}">
            国家政策
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
