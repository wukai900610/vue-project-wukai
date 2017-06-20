import Util from '../libs/util'
import Api from '../libs/apiConfig'

export default {
    state: {
        search:{
            list:[],
            allLoaded:true
        },
        channel:[
            {
                name:'最新动态',
                channelId:114,
                listTypeName:'tzgg'
            },
            {
                name:'信用动态',
                channelId:'106',
                listTypeName:'xydt'
            },
            {
                name:'政策法规',
                channelId:'111',
                listTypeName:'fgzc'
            },
            {
                name:'信用公示',
                channelId:'125',
                listTypeName:'sgs'
            },
            {
                name:'入围机构',
                channelId:115,
                listTypeName:'jgmd'
            },
            {
                name:'信用报告',
                channelId:116,
                listTypeName:'bgmd'
            }
        ],
        // 注：home和tzgg下都有tzgg,但两者是不同的
        home:{
            tzgg:[],
        },
        tzgg:{
            banner:[],
            list:[]
        },
        jgmd:{
            list:[],
            content:{}
        },
        bgmd:{
            list:[],
            content:{}
        },
        xydt:{
            bdList:[],
            wdList:[],
            hnList:[],
            gjList:[],
            content:{}
        },
        fgzc:{
            bdList:[],
            wdList:[],
            hnList:[],
            gjList:[],
            content:{}
        },
        // list:[],
        content:{}
    },
    getters: {
        content_filterAttachmentNames : function (state){
            if(state.content.attachmentNames){
                return state.content.attachmentNames.split(',')
            }else{
                return []
            }
        },
        content_filterAttachmentPaths : function (state){
            if(state.content.attachmentPaths){
                return state.content.attachmentPaths.split(',')
            }else{
                return []
            }
        }
    },
    mutations: {
        getBanner(state,data){
            state.tzgg.banner=data
        },
        getHomeTzgg(state,data){
            state.home.tzgg=data
        },
        getList(state,mParams){
            state[mParams.listType].list=mParams.data
        },
        getListMore(state,mParams){
            state[mParams.listType].list=state[mParams.listType].list.concat(mParams.data)
        },
        //信用动态
        getXydtList(state,mParams){
            state[mParams.listType][mParams.childType]=mParams.data
        },
        getXydtListMore(state,mParams){
            state[mParams.listType][mParams.childType]=state[mParams.listType][mParams.childType].concat(mParams.data)
        },
        //法归政策
        getFgzcList(state,mParams){
            state[mParams.listType][mParams.childType]=mParams.data
        },
        getFgzcListMore(state,mParams){
            state[mParams.listType][mParams.childType]=state[mParams.listType][mParams.childType].concat(mParams.data)
        },
        getContent(state,data){
            state.content=data
        },
        getSearchList(state,data){
            state.search.list=data
        },
        getSearchListMore(state,data){
            state.search.list=state.search.list.concat(data)
        },
        isSearchLoadEnd(state,data){
            state.search.allLoaded=false
        },
    },
    actions: {
        loadBanner({commit},paramsObj) {
            return new Promise((resolve, reject) => {
                Util.ajax.get(Api.list,paramsObj).then((response) => {
                    if(response.status==200){
                        commit('getBanner',response.data)
                        resolve()
                    }else{
                        reject('status不为200')
                    }
                }).catch((err) => {
                    reject(err)
                })
            })
        },
        loadSearchList({commit},paramsObj) {
            //加载更多
            if(paramsObj.isLoadMore){
                return new Promise((resolve, reject) => {
                    Util.ajax.get(Api.search,paramsObj).then((response) => {
                        if(response.status==200){
                            if(response.data.length==0){
                                commit('isSearchLoadEnd')
                            }else{
                                commit('getSearchListMore',response.data)
                            }

                            resolve()
                        }else{
                            reject('status不为200')
                        }
                    }).catch((err) => {
                        reject(err)
                    })
                })
            }else {
                return new Promise((resolve, reject) => {
                    Util.ajax.get(Api.search,paramsObj).then((response) => {
                        if(response.status==200){
                            commit('getSearchList',response.data)
                            resolve()
                        }else{
                            reject('status不为200')
                        }
                    }).catch((err) => {
                        reject(err)
                    })
                })
            }
        },
        loadHomeTzgg({commit},paramsObj) {
            return new Promise((resolve, reject) => {
                Util.ajax.get(Api.list,paramsObj).then((response) => {
                    if(response.status==200){
                        commit('getHomeTzgg',response.data)
                        resolve()
                    }else{
                        reject('status不为200')
                    }
                }).catch((err) => {
                    reject(err)
                })
            })
        },
        loadList({commit},paramsObj) {
            if(paramsObj.isLoadMore){
                return new Promise((resolve, reject) => {
                    Util.ajax.get(Api.list,paramsObj).then((response) => {
                        if(response.status==200){
                            commit('getListMore',{data:response.data,listType:paramsObj.listType})
                            resolve()
                        }else{
                            reject('status不为200')
                        }
                    }).catch((err) => {
                        reject(err)
                    })
                })
            }else{
                return new Promise((resolve, reject) => {
                    Util.ajax.get(Api.list,paramsObj).then((response) => {
                        if(response.status==200){
                            commit('getList',{data:response.data,listType:paramsObj.listType})
                            resolve()
                        }else{
                            reject('status不为200')
                        }
                    }).catch((err) => {
                        reject(err)
                    })
                })
            }
        },
        loadXydtList({commit},paramsObj) {
            if(paramsObj.isLoadMore){
                return new Promise((resolve, reject) => {
                    Util.ajax.get(Api.list,paramsObj).then((response) => {
                        if(response.status==200){
                            commit('getXydtListMore',{
                                data:response.data,
                                listType:paramsObj.listType,
                                childType:paramsObj.params.childType
                            })
                            resolve()
                        }else{
                            reject('status不为200')
                        }
                    }).catch((err) => {
                        reject(err)
                    })
                })
            }else{
                return new Promise((resolve, reject) => {
                    Util.ajax.get(Api.list,paramsObj).then((response) => {
                        if(response.status==200){
                            commit('getXydtList',{
                                data:response.data,
                                listType:paramsObj.listType,
                                childType:paramsObj.params.childType
                            })
                            resolve()
                        }else{
                            reject('status不为200')
                        }
                    }).catch((err) => {
                        reject(err)
                    })
                })
            }
        },
        loadFgzcList({commit},paramsObj) {
            if(paramsObj.isLoadMore){
                return new Promise((resolve, reject) => {
                    Util.ajax.get(Api.list,paramsObj).then((response) => {
                        if(response.status==200){
                            commit('getFgzcListMore',{
                                data:response.data,
                                listType:paramsObj.listType,
                                childType:paramsObj.params.childType
                            })
                            resolve()
                        }else{
                            reject('status不为200')
                        }
                    }).catch((err) => {
                        reject(err)
                    })
                })
            }else{
                return new Promise((resolve, reject) => {
                    Util.ajax.get(Api.list,paramsObj).then((response) => {
                        if(response.status==200){
                            commit('getFgzcList',{
                                data:response.data,
                                listType:paramsObj.listType,
                                childType:paramsObj.params.childType
                            })
                            resolve()
                        }else{
                            reject('status不为200')
                        }
                    }).catch((err) => {
                        reject(err)
                    })
                })
            }
        },
        loadContent({commit},paramsObj) {
            return new Promise((resolve, reject) => {
                Util.ajax.get(Api.content,paramsObj).then((response) => {
                    if(response.status==200){
                        commit('getContent',response.data)
                        resolve()
                    }else{
                        reject('status不为200')
                    }
                }).catch((err) => {
                    reject(err)
                })
            })
        },
    }
};
