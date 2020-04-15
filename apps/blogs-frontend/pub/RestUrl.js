/**
 * Created by Administrator on 2016/4/25.
 */
var URL_HOME = '/'; //主页的链接
window.EnvConfig = window.EnvConfig || {};
// var ADDR = EnvConfig.ADDR;// 后端服务地址
var BASEHOST_ONLINE_URL = EnvConfig.BASEHOST_ONLINE_URL;// 后端线上服务地址

// 后端服务地址
var ADDR = "http://localhost:8080";
// 后端服务项目名
var ROOT_PATH = "/blogs-web/";

var ROOT_IMAGE_PATH = "/blogs-image/";

var IMAGE_PATH = ADDR + ROOT_IMAGE_PATH;

//管理员登录
var ADMIN_LOGIN = {
    LOGIN_INIT : ADDR + ROOT_PATH + "PasswordController/insertInit",
    LOGIN : ADDR + ROOT_PATH + "PasswordController/login",

    PATH_LOGIN : "/whiteroadAdminLogin/login",
    PATH_MENU:"/whiteroadAdminLogin/menu"
};

//文章查询
var CONTENT = {
    QUERY_LIST : ADDR + ROOT_PATH + "articleController/queryList",
};

module.exports = {
    URL_HOME,
    ADDR,
    ROOT_PATH,
    BASEHOST_ONLINE_URL,
    ADMIN_LOGIN,
    CONTENT,
    IMAGE_PATH
};
