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
var $ = require('jquery');
require('./css/style.css');

var urls = require('../pub/RestUrl').ADMIN_LOGIN;


const loginButtonOnClick = function () {
    console.log("点击登录");
    var data = {
        "pswPassword":"123456zdzzz",
        "id":"123456"
    };
    $.ajax({
        url:urls.LOGIN,
        data:JSON.stringify(data),
        async:true,
        type:'POST',
        dataType: "json",
        contentType:'application/json;charset=utf-8',
        success:function (result) {
            console.log(result);
        }
    });

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
