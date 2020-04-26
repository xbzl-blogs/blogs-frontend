/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/18 14:24
 *
 * 功能：详情页面 与主页面相同的侧边栏以及底部栏，只改变内容
 *
 */

var React = require('react');
var Header = require('./header');
var Footer = require('./footer');
var AllContents = require('../contents/allContents');

class Details extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : props.location.state.data
        };
    }

    render() {
        return (
                <div id="top" className="s-wrap site-wrapper">

                    {/*site header
            ================================================== */}
                    {/*头部栏；目录侧边栏*/}
                    <Header />
                    {/*内容 ；单个详情页面*/}
                    <AllContents data={this.state.data}/>
                    {/*底部栏*/}
                    <Footer/>
                </div>
        );
    }
}

module.exports = Details;

