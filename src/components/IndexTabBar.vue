<style scoped lang="scss">
    .mint-popup{
        background: none;
    }
    .indexTabPage{
        .muder{
            padding-bottom: 10px;
            background: url('../assets/infoSearchIco.png') center 0 no-repeat;
            div{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 350px;
                // height: 150px;
                background-color: #fff;
                a{
                    flex:1;
                    padding-bottom: 10px;
                    height: 100%;
                    text-align: center;
                    &:before{
                        content: ' ';
                        display: block;
                        padding: 40px 0;
                        width: 100%;
                    }
                }
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
    <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade">
        <div class="muder">
            <div>
                <router-link :to="{ 'name': 'Home'}">
                    法人信用<br>信息查询
                </router-link>
                <router-link :to="{ 'name': 'Home'}">
                    自然人信用<br>信息查询
                </router-link>
            </div>

        </div>
    </mt-popup>
    <div class="tabBar">
        <ul class="">
            <li></li>
            <li class="diff" @click="showMuder"><a href="#">查询</a></li>
            <li></li>
        </ul>
    </div>
</div>


</template>

<script>

export default {
    data() {
        return {
            popupVisible:false
        }
    },
    methods: {
        showMuder:function(){
            this.popupVisible=true
            console.log(111);
        }
    },
    mounted:function () {
    }
}

</script>
