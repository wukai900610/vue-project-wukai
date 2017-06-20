
let gfun = {};

//本地存储
gfun.setlocalStorage = function (key, value){
    window.localStorage.setItem(key, window.JSON.stringify(value));
}
gfun.getlocalStorage = function (key){
    return window.JSON.parse(window.localStorage.getItem(key));
}
gfun.removelocalStorage = function (key){
    window.localStorage.removeItem(key);
}
//cookie存储
gfun.setCookie = function (key, value){
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = key + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
gfun.getCookie = function (key){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
gfun.removeCookie = function (key){
    window.localStorage.removeItem(key);
}

export default gfun;
