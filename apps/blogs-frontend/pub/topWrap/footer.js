/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/17 8:23
 *
 * 功能：footer 底部栏元素
 *
 */
var React = require('react');

class Footer extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return(<footer className="s-footer">
            <div className="row">
                <div className="column large-full footer__content">
                    <div className="footer__copyright">白鹿博客&copy; 2020.</div>
                </div>
            </div>

            <div className="go-top">
                <a className="smoothscroll" title="Back to Top" href="#top"></a>
            </div>
        </footer>);
    }
}

module.exports = Footer;
