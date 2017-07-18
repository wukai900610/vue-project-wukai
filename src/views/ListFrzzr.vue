<style scoped lang="scss">
    .listPage{
        // .smallNav{
        //     overflow: auto;
        //     position: fixed;
        //     width: 100%;
        //     top: 50px;
        //     left: 0;
        //     background-color: #fff;
        //     z-index: 1;
        //     a{
        //         float: left;
        //         width: 50%;
        //         line-height: 2.5;
        //         text-align: center;
        //         font-size: 14px;
        //         &.active{
        //             border-bottom: 2px solid #26a2ff;
        //         }
        //     }
        // }
    }
</style>

<template>

<div class="listPage">
    <my-header title="查询" :isBackTop="true" :isFixed="true"></my-header>

    <!-- <span class="smallNav">
        <router-link active-class="active" :to="{'name':'ListFrzzrChild', 'params': { type: 'fr' }}">
            法人
        </router-link>
        <router-link active-class="active" :to="{'name':'ListFrzzrChild', 'params': { type: 'zzr' }}">
            自然人
        </router-link>
    </span> -->

    <router-view></router-view>
</div>

</template>

<script>

import MyHeader from '../components/Header.vue'

export default {
    data() {
        return {
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
