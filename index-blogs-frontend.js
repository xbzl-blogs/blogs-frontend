/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/9 20:59
 *
 * 功能：index 主js
 *  由此js进行ReactDOM 将js动态写入静态html文件里面
 *  加载routes 路由配置
 *
 */
var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Router, hashHistory} = require('react-router');
var {syncHistoryWithStore} = require('react-router-redux');

// //获取路由信息
var routes = require('./apps/blogs-frontend/routes');
//初始化store
var configureStore = require('./apps/blogs-frontend/store/configureStore');
//创建store
var store = configureStore();
//同步路由与Redux的状态
var history = syncHistoryWithStore(hashHistory, store);

var App = require('./apps/blogs-frontend/App');


ReactDOM.render(
    <Provider store={store}><Router history={history}>{routes}</Router></Provider>
    , document.getElementById('root')
);

