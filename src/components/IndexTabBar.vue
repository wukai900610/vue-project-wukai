<style scoped lang="scss">
    .mint-popup{
        background: none;
    }
    .indexTabPage{
        .muder{
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            // padding-bottom: 10px;
            // background: url('../assets/infoSearchIco.png') center 0 no-repeat;
            background-color: rgba(0, 0, 0, .5);
            .infoContent{
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translate(-50%,-50%);
                display: flex;
                justify-content: center;
                align-items: center;
                width: 350px;
                // height: 150px;
                li{
                    flex:1;
                    padding-bottom: 10px;
                    height: 100%;
                    text-align: center;
                    background-color: #fff;
                    a{
                        display: block;
                        width: 100%;
                        &:before{
                            content: ' ';
                            display: block;
                            padding: 40px 0;
                            width: 100%;
                        }
                    }

                }
            }
            .close{
                position: fixed;
                left: 50%;
                bottom: 0;
                width: 60px;
                height: 60px;
                transform: translate(-50%,-27px);
                background-color: #fff;
            }
        }
        .tabBar{
            position: fixed;
            left: 50%;
            bottom: 0;
            width: 100%;
            transform: translate(-50%,0);
            background-color: #f7f7f7;
            ul{
                height:50px;
                display: flex;
                justify-content: center;
                align-items: center;
                li{
                    flex:2;
                    text-align: center;
                    &.diff{
                        flex:2;
                        a{
                            position: relative;
                            top: -20px;
                            &:before{
                                content: ' ';
                                display: block;
                                margin:0 auto;
                                width: 60px;
                                height: 60px;
                                background: url('../assets/router.png') center 0 no-repeat;
                                background-size: 100%;
                            }
                        }
                    }
                    a{
                        display: block;
                        width: 100%;
                        height: 100%;
                        line-height: 1;
                        font-size: 14px;
                    }
                }
            }
        }
    }

</style>

<template>
<div class="indexTabPage">
    <transition name="fade">
        <div class="muder" v-if="muder">
            <ul class="infoContent">
                <li>
                    <router-link :to="{'name':'ListFrzzrChild', 'params': { type: 'fr' }}">
                        法人信用<br>信息查询
                    </router-link>
                </li>
                <li>
                    <router-link :to="{'name':'ListFrzzrChild', 'params': { type: 'zzr' }}">
                        自然人信用<br>信息查询
                    </router-link>
                </li>
            </ul>
            <span class="close" @click="muder=false"></span>
        </div>
    </transition>
    <div class="tabBar">
        <ul class="">
            <li></li>
            <li class="diff" @click="muder=true"><a href="#">查询</a></li>
            <li></li>
        </ul>
    </div>
</div>


</template>

<script>

export default {
    data() {
        return {
            muder:false
        }
    },
    methods: {
        // showMuder:function(){
        //     this.muder=true
        // }
    },
    mounted:function () {
    }
}

</script>
