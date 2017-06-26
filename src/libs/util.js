import axios from 'axios';
// import env from '../../config/env';
import env from '../../config/dev.env';

let util = {};
util.title = function(title) {
    title = title ? title + ' - 信用郑州' : '信用郑州';
    window.document.title = title;
};

// const ajaxUrl = env.NODE_ENV === '"development"' ?
//     '' :
//     env.NODE_ENV === '"production"' ?
//     'https://online.url.com' :
//     'https://debug.url.com';
const ajaxUrl = '';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 2000,
    // headers: {'content-type':'application/json;charset=UTF-8'},
    responseType: 'json',
    transformResponse: [function (data) {
        // 这里提前处理返回的数据
        // console.log(JSON.parse(data));
        // console.log(data);

        return data;
    }]
});

export default util;
