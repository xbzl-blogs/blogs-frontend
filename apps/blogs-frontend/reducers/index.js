/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/9 21:09
 *
 * 功能：
 *
 */
var {combineReducers} = require('redux');
//注册路由组件需要的reducer
var {routerReducer} = require('react-router-redux');
/**
 * 将所有State组织成一个状态树来进行维护
 */
export default combineReducers({
    routing: routerReducer
});
