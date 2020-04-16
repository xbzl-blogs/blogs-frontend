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

               /*  footer*/
                <footer class="s-footer">
                    <div class="row">
                        <div class="column large-full footer__content">
                            <div class="footer__copyright">Copyright &copy; 2019.Company name All rights reserved.<a target="_blank" href="http://sc.chinaz.com/moban/">&#x7F51;&#x9875;&#x6A21;&#x677F;</a></div>
                        </div>
                    </div>

                    <div class="go-top">
                        <a class="smoothscroll" title="Back to Top" href="#top"></a>
                    </div>
                </footer>
            </div></div>
        );
    }
}

module.exports = Home;
