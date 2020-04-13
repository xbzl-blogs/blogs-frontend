/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/11 11:00
 *
 * 功能：管理员登录界面
 *
 */
import {Link} from "react-router";

var React = require('react');
var $ = require('jquery');
var YYMessage = require('../pub/YYMessage');
require('./css/style.css');
require('./js/index');

var urls = require('../pub/RestUrl').ADMIN_LOGIN;


class AdminLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.userName || "",
            userPws: props.userPws || "",
            userPswNew: props.userPswNew || ""
        }
    }

    inputNameOnChange(event) {
        this.state.userPws = event.target.value;

    }

    inputRegnameOnChange(event) {
        this.state.userName = event.target.value;
    }

    inpurRegpassOnChange(event) {
        this.state.userPswNew = event.target.value;
    }

    loginButtonOnClick() {
        let data = {
            "pswPassword": this.state.userPws,
        };
        var _this = this;
        $.ajax({
            url: urls.LOGIN,
            data: JSON.stringify(data),
            async: true,
            type: 'POST',
            dataType: "json",
            contentType: 'application/json;charset=utf-8',
            success: function (result) {
                if (result && result.success) {
                    if (result.backData === true) {
                        _this.props.router.push(urls.PATH_MENU);
                    }
                } else {
                    YYMessage.error("错误：" + result.backMsg, 10);
                }
            }
        });
    }

    passForgotOnClick() {
        console.log("点击登录");
        YYMessage.error("点加号", 5);
    }

    render() {
        console.log("初始化管理员登录页面");
        return (
            <div className="materialContainer">
                <div className="box">
                    <div className="title">登录</div>
                    <div className="input">
                        <input type="password" name="name" id="name" onChange={this.inputNameOnChange.bind(this)}/>
                        <span className="spin"></span>
                    </div>
                    <div className="button login">
                        <button onClick={this.loginButtonOnClick.bind(this)}>
                            <span>黑入</span>
                            <i className="fa fa-check"></i>
                        </button>
                    </div>
                    <Link className="pass-forgot" onClick={this.passForgotOnClick.bind(this)}>忘记密码？</Link>
                </div>

                <div className="overbox">
                    <div className="material-button alt-2">
                        <span className="shape"></span>
                    </div>
                    <div className="title">修改密码</div>
                    <div className="input">
                        <label htmlFor="regname">所属人</label>
                        <input type="text" name="regname" id="regname" onChange={this.inputRegnameOnChange.bind(this)}/>
                        <span className="spin"></span>
                    </div>
                    <div className="input">
                        <label htmlFor="regpass">密码</label>
                        <input type="password" name="regpass" id="regpass" onChange={this.inpurRegpassOnChange.bind(this)}/>
                        <span className="spin"></span>
                    </div>
                    <div className="button">
                        <button>
                            <span>修改</span>
                        </button>
                    </div>
                </div>


            </div>

        );
    }
};

module.exports = AdminLogin;
