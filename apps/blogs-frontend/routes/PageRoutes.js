/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/9 21:04
 *
 * 功能：页面路由
 *
 */

var React = require('react');

//子页面路由
var PageRoutes = React.createClass({
    getDefaultProps: function () {
    },
    componentDidMount: function () {
    },
    render: function () {
        return this.props.children;
    }
});
module.exports = PageRoutes;
