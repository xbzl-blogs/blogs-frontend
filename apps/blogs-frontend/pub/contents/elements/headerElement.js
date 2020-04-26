/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/18 15:20
 *
 * 功能：header内容 标题头
 *
 */

var React = require('react');


class HeaderElement extends React.Component{

    constructor(props){
        super(props);
        /**
         * 按照标题存储规则：以<header/>标签分隔内容
         * 顺序依次是标题、作者、时间、内容分类
         */
        let headerData = props.data.content.split("<header/>");
        this.state = {
            title:headerData[0],
            name:headerData[1],
            date:headerData[2],
            catefory:headerData[3]
        };
    }

    render() {
        return(
            <div className="content__page-header entry__header">
                <h1 className="display-1 entry__title">
                    {this.state.title}
                </h1>
                <ul className="entry__header-meta">
                    <li className="author">{this.state.name}</li>
                    <li className="date">{this.state.date}</li>
                    <li className="cat-links">
                        {this.state.catefory}
                    </li>
                </ul>
            </div>
        );
    }
}

module.exports = HeaderElement;
