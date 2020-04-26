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
var Header = require('./pub/topWrap/header');
var Contents = require('./pub/topWrap/contents');
var Footer = require('./pub/topWrap/footer');

class Home extends React.Component{

    constructor(props){
        super(props);


    }

    render() {
        return (
            <div id="top" className="s-wrap site-wrapper">

            {/*site header
            ================================================== */}
                {/*头部栏；目录侧边栏*/}
                <Header />
                {/*内容 ；瀑布流*/}
                <Contents/>
                {/*底部栏*/}
                <Footer/>
            </div>
        );
    }
}

module.exports = Home;
