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
    // headers: {'wukai':'11'},
});

export default util;
