/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/11 11:00
 *
 * 功能：管理员登录界面
 *
 */

var React = require('react');

require('./css/style.css');


const loginButtonOnClick = function () {
    console.log("点击登录");
};

var AdminLogin = React.createClass({

    render: function () {
        console.log("初始化管理员登录页面");
        return(
            <div className="materialContainer">
                <div className="box">
                    <div className="title">登录</div>
                    <div className="input">
                        <input type="text" name="name" id="name"/>
                            <span className="spin"></span>
                    </div>
                    <div className="button login">
                        <button onClick={loginButtonOnClick}>
                            <span>黑入</span>
                            <i className="fa fa-check"></i>
                        </button>
                    </div>
                </div>

            </div>
        );
    }

});

module.exports = AdminLogin;
