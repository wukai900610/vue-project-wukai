import axios from 'axios';
// import env from '../../config/env';
import env from '../../config/dev.env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
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
    timeout: 3000,
    // headers: {'X-Custom-Header': 'foo'}
});

export default util;
