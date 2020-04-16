/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/12 20:36
 *
 * 功能：管理员目录
 *
 */
import {Link} from "react-router";
// require('./css/menuStyle.less');

var React = require('react');


class AdminMenuPage extends React.Component{

    constructor(props) {
        super(props);
    }

    render () {
        return(
            <div className="admin-menu">
                <Link >查询</Link>
                <br/>
                <Link >添加</Link>
                <br/>
            </div>
        );
    }

}

module.exports = AdminMenuPage;
