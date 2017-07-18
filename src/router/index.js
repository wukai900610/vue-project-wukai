// const piex='/dist'
const piex=''
const routers = [
    {
        path: piex+'/',
        name: 'Home',
        component: (resolve) => require(['../views/Home.vue'], resolve)
    },{
        path: piex+'/listFrzzr',
        name: 'ListFrzzr',
        redirect: piex+'/ListFrzzr/fr',
        component: (resolve) => require(['../views/ListFrzzr.vue'], resolve),
        children:[
            {
                path: ':type',
                name: 'ListFrzzrChild',
                component: (resolve) => require(['../components/ListFrzzrChild.vue'], resolve)
            }
        ]
    },
    {
        path: piex+'/search',
        name: 'Search',
        component: (resolve) => require(['../views/Search.vue'], resolve)
    },
    {
        path: piex+'/list/:id',
        name: 'List',
        component: (resolve) => require(['../views/List.vue'], resolve)
    },
    {
        path: piex+'/listXydt',
        name: 'ListXydt',
        redirect: piex+'/listXydt/107',
        component: (resolve) => require(['../views/ListXydt.vue'], resolve),
        children:[
            {
                path: ':id',
                name: 'ListXydtChild',
                component: (resolve) => require(['../components/MyXydtList.vue'], resolve)
            }
        ]
    },
    {
        path: piex+'/listFgzc',
        name: 'ListFgzc',
        redirect: piex+'/listFgzc/109',
        component: (resolve) => require(['../views/ListFgzc.vue'], resolve),
        children:[
            {
                path: ':id',
                name: 'ListFgzcChild',
                component: (resolve) => require(['../components/MyFgzcList.vue'], resolve)
            }
        ]
    },{
        path: piex+'/xygs',
        name: 'Xygs',
        redirect: piex+'/xygs/frxk',
        component: (resolve) => require(['../views/Xygs.vue'], resolve),
        children:[
            {
                path: ':name',
                name: 'SgsChild',
                component: (resolve) => require(['../components/MySgsChild.vue'], resolve)
            }
        ]
    },{
        path: piex+'/xygsContent/:id',
        name: 'XygsContent',
        component: (resolve) => require(['../views/XygsContent.vue'], resolve)
    },
    {
        path: piex+'/listTzgg/:id',
        name: 'ListTzgg',
        component: (resolve) => require(['../views/ListTzgg.vue'], resolve)
    },{
        path: piex+'/content/:id',
        name: 'Content',
        component: (resolve) => require(['../views/Content.vue'], resolve)
    },{
        path: piex+'/*',
        name: 'NotFound',
        component: (resolve) => require(['../views/NotFound.vue'], resolve)
    }
]
export default routers
