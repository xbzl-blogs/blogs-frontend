/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/9 20:26
 *
 * 功能：主页面
 *
 */

var React = require('react');



import './public/css/base.css';
import './public/css/main.css';
import './public/css/vendor.css';

var Header = require('./pub/header');
var Content = require('./pub/content');




class Home extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
            <div id="preloader">
                <div id="loader" className="dots-fade">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div id="top" className="s-wrap site-wrapper">

            {/*site header
            ================================================== */}
                <Header />
                <Content/>
            </div></div>
        );
    }
}

module.exports = Home;
