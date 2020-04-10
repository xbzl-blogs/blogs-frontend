/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/9 21:02
 *
 * 功能：路由配置
 *
 */
var React = require('react');
var {Route, IndexRoute, Redirect} = require('react-router');

var Home = require('../home');//主页面
var PageRoutes = require('./PageRoutes');//页面路由

// var LazyPageRoutes = lazy(require('bundle?lazy!./PageRoutes'));//页面路由-延迟加载


module.exports = (
    <Route path="/" component={Home}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home}>

        </Route>
    </Route>

    );
