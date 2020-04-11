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

var AdminLogin = require('../admin/adminLogin'); //管理员登录页面


module.exports = (
    <Route exact  path="/">
        <IndexRoute component={Home}/>
        <Route path="main" component={PageRoutes}>
            <Route path="home" component={Home}/>
        </Route>
        <Route path="whiteroadAdminLogin" component={PageRoutes}>
            <Route path="login" component={AdminLogin}/>
        </Route>
    </Route>

    );
