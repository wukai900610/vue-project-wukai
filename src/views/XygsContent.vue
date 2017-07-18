<style scoped lang="scss">

.content {
    .loading {
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        // background-color: #333;
        .loadBg {
            opacity: .2;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            // background-color: #000;
        }
        .loadBox {
            padding: 10px 25px;
            border-radius: 5px;
            // border: 1px solid #2c3e50;
            // background-color: #2c3e50;
            box-shadow: 0 0 20px #2c3e50;
            // text-shadow: 1px 1px 0 #2c3e50;
            color: #2c3e50;
            span.logo {
                display: block;
                margin: 0 auto;
                width: 32px;
                height: 32px;
                // padding: 16px;
                background: url('../assets/logo.png') center/contain no-repeat;
            }
        }
    }
    .sgsContent {
        padding: 60px 10px 10px;
        ul{
            li{
                margin-bottom: 10px;
                background-color: #f1f1f1;
                background-color: #f1f1f1;
                .trTitle{
                    border-bottom: 1px solid #2c3e50;
                }
                .trTxt{
                    // color: #ec6941;
                }
            }
        }
    }
}

</style>

<template>

<div class="content">
    <my-header title="双公示详情" :has-more="false" :is-fixed="true"></my-header>

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

    <div class="sgsContent">
        <ul>
            <li v-for="item in sgsContent">
                <div class="trTitle" width="100%">{{item.text}}</div>
                <div class="trTxt" width="100%">{{item.value}}</div>
            </li>
        </ul>
    </div>
</div>

</template>

<script>

import {
    mapGetters
}
from 'vuex';

import {
    Toast
}
from 'mint-ui'

import MyHeader from '../components/Header.vue'

export default {
    data() {
            return {
                loading: true
            }
        },
        computed: {
            sgsContent: function() {
                let content = this.$store.state.xygs.content
                let detailObj = {}
                if (this.$route.params.type == 'frxk') {
                    detailObj = [{
                        text: '信用主体名称',
                        value: content.xyztmc
                    }, {
                        text: '统一社会信用代码',
                        value: content.tyshxydm,
                    }, {
                        text: '组织机构代码',
                        value: content.zzjgdm,
                    }, {
                        text: '工商登记码',
                        value: content.gszch,
                    }, {
                        text: '税务登记号',
                        value: content.swdjh,
                    }, {
                        text: '文书号',
                        value: content.wsh,
                    }, {
                        text: '项目名称',
                        value: content.xmmc,
                    }, {
                        text: '审批类别',
                        value: content.splb,
                    }, {
                        text: '内容',
                        value: content.nr,
                    }, {
                        text: '许可日期',
                        value: content.xkrq,
                    }, {
                        text: '许可决定日期',
                        value: content.xkjzrq,
                    }, {
                        text: '许可机构',
                        value: content.xzjg,
                    }, {
                        text: '地方编码',
                        value: content.dfbm,
                    }, {
                        text: '信息等级',
                        value: content.xxdj,
                    }, {
                        text: '备注',
                        value: content.bz,
                    }];
                } else if (this.$route.params.type == 'frcf') {
                    detailObj = [{
                        text: '信用主体名称',
                        value: content.xyztmc
                    }, {
                        text: '统一社会信用代码',
                        value: content.tyshxydm,
                    }, {
                        text: '组织机构代码',
                        value: content.zzjgdm,
                    }, {
                        text: '工商登记码',
                        value: content.gszch,
                    }, {
                        text: '税务登记号',
                        value: content.swdjh,
                    }, {
                        text: '文书号',
                        value: content.wsh,
                    }, {
                        text: '名称',
                        value: content.mc,
                    }, {
                        text: '处罚1',
                        value: content.cflb1,
                    }, {
                        text: '处罚2',
                        value: content.cflb2,
                    }, {
                        text: '处罚事由',
                        value: content.sy,
                    }, {
                        text: '建议',
                        value: content.yj,
                    }, {
                        text: '处罚结果',
                        value: content.jg,
                    }, {
                        text: '处罚日期',
                        value: content.cfrq,
                    }, {
                        text: '处罚机关',
                        value: content.xzjg,
                    }, {
                        text: '地方编码',
                        value: content.dfbm,
                    }, {
                        text: '信息等级',
                        value: content.xxdj,
                    }, {
                        text: '备注',
                        value: content.bz,
                    }];
                } else if (this.$route.params.type == 'zzrxk') {
                    detailObj = [{
                        text: '信用主体名称',
                        value: content.xyztmc
                    }, {
                        text: '证件类型',
                        value: content.zjlx
                    }, {
                        text: '证件号码',
                        value: content.zjhm,
                    }, {
                        text: '文书号',
                        value: content.wsh,
                    }, {
                        text: '名称',
                        value: content.xmmc,
                    }, {
                        text: '审批类别',
                        value: content.splb,
                    }, {
                        text: '其他说明',
                        value: content.qtsm,
                    }, {
                        text: '内容',
                        value: content.nr,
                    }, {
                        text: '许可日期',
                        value: content.xkrq,
                    }, {
                        text: '许可决定日期',
                        value: content.xkjzrq,
                    }, {
                        text: '许可机构',
                        value: content.xzjg,
                    }, {
                        text: '地方编码',
                        value: content.dfbm,
                    }, {
                        text: '信息等级',
                        value: content.xxdj,
                    }, {
                        text: '备注',
                        value: content.bz,
                    }];
                } else if (this.$route.params.type == 'zzrcf') {
                    detailObj = [{
                        text: '信用主体名称',
                        value: content.xyztmc
                    }, {
                        text: '证件类型',
                        value: content.zjlx
                    }, {
                        text: '证件号码',
                        value: content.zjhm,
                    }, {
                        text: '文书号',
                        value: content.wsh,
                    }, {
                        text: '名称',
                        value: content.mc,
                    }, {
                        text: '处罚1',
                        value: content.cflb1,
                    }, {
                        text: '处罚2',
                        value: content.cflb2,
                    }, {
                        text: '处罚事由',
                        value: content.sy,
                    }, {
                        text: '建议',
                        value: content.yj,
                    }, {
                        text: '处罚结果',
                        value: content.jg,
                    }, {
                        text: '处罚日期',
                        value: content.cfrq,
                    }, {
                        text: '处罚机关',
                        value: content.xzjg,
                    }, {
                        text: '地方编码',
                        value: content.dfbm,
                    }, {
                        text: '信息等级',
                        value: content.xxdj,
                    }, {
                        text: '备注',
                        value: content.bz,
                    }];
                }
                detailObj.forEach(function(item, index, array) {
                    if(item.value=='' || !item.value){
                        item.value = '空'
                    }
                })

                return detailObj
            }
        },
        methods: {
            loadXygsContent: function() {
                setTimeout(function() {
                    this.$store.dispatch('loadXygsContent', {
                        'params': {
                            'id': this.$route.params.id
                        },
                        'type': this.$route.params.type
                    })
                    .then(() => {
                        this.loading = false
                    })
                    .catch(err => {
                        this.loading = false
                        Toast({
                            message: '内容加载失败',
                            position: 'top',
                            duration: 500
                        })
                    })
                }.bind(this), 500)
            }
        },
        mounted: function() {
            window.scrollTo(0, 0)
            this.loadXygsContent()
        },
        components: {
            MyHeader
        }
}

</script>
