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


var AdminLogin = React.createClass({

    getInitialState : function(){
        return {
            userName:"",
            userPws:"",
            userPswNew:""
        }
    },
    inputNameOnChange : function(event){
        this.state.userPws = event.target.value;

    },
    inputRegnameOnChange : function(event){
        this.state.userName = event.target.value;
    },
    inpurRegpassOnChange :function(event) {
        this.state.userPswNew = event.target.value;
    },
    loginButtonOnClick:function(){
        let data = {
            "pswPassword":this.state.userPws,
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
    },
    passForgotOnClick:function(){
        console.log("点击登录");
        YYMessage.error("点加号",5);
    },
    render: function () {
        console.log("初始化管理员登录页面");
        return(
            <div className="materialContainer">
                <div className="box">
                    <div className="title">登录</div>
                    <div className="input">
                        <input type="password" name="name" id="name" onChange={this.inputNameOnChange}/>
                            <span className="spin"></span>
                    </div>
                    <div className="button login">
                        <button onClick={this.loginButtonOnClick}>
                            <span>黑入</span>
                            <i className="fa fa-check"></i>
                        </button>
                    </div>
                    <Link className="pass-forgot" onClick={this.passForgotOnClick}>忘记密码？</Link>
                </div>

                <div className="overbox">
                    <div className="material-button alt-2">
                        <span className="shape"></span>
                    </div>
                    <div className="title">修改密码</div>
                    <div className="input">
                        <label htmlFor="regname">所属人</label>
                        <input type="text" name="regname" id="regname" onChange={this.inputRegnameOnChange}/>
                            <span className="spin"></span>
                    </div>
                    <div className="input">
                        <label htmlFor="regpass">密码</label>
                        <input type="password" name="regpass" id="regpass" onChange={this.inpurRegpassOnChange}/>
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
});

module.exports = AdminLogin;
