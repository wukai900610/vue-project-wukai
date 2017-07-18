<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }


    .mint-swipe-indicators{
        .mint-swipe-indicator{
            opacity: .4;
            background-color: #26a2ff;
        }
        .mint-swipe-indicator.is-active{
            opacity: 1;
        }
    }

    .app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        li{
            list-style: none;
        }
        div,p,input,form,ul,li{
            box-sizing: border-box;
        }
        input,button{
            outline: none;
            -webkit-appearance:none;
            appearance:none;
        }

        // :-webkit-input-placeholder {
        //     line-height: 1;
        // }
        // :-moz-placeholder {/* Firefox 18- */
        //     line-height: 1;
        // }
        // ::-moz-placeholder{/* Firefox 19+ */
        //     line-height: 1;
        // }
        // :-ms-input-placeholder {
        //     line-height: 1;
        // }

        a{
            position: relative;
            display: inline-block;
            -webkit-tap-highlight-color:rgba(0,0,0,0);
            text-decoration: none;
            color: #2c3e50;
            &:after{
                content: " ";
                // opacity: 0;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                position: absolute;
                background-color: rgba(0, 0, 0, 0);
            }
            &:active:after{
                // opacity: .1;
                background-color: rgba(0, 0, 0, .1);
            }
        }
        .myLoad{
            display: flex;
            justify-content:center;
        }
        // 过渡效果
        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s
        }
        .fade-enter, .fade-leave-active {
            opacity: 0
        }
        .mint-header{
            height: 50px;
        }
    }

</style>

<template>

<div id="app" class="app">
    <router-view></router-view>
</div>

</template>

<script>

export default {
    name: 'app'
}

</script>
