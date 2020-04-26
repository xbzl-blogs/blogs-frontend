/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/18 14:57
 *
 * 功能：media内容 封面媒体
 * 不同详情页面的区分
 *
 */


var React = require('react');


class MediaElement extends React.Component{

    constructor(props){
        super(props);
        this.state = props.data;
    }

    render() {
        return(
            <div className="media-wrap entry__media">
                <div className="entry__post-thumb" style={{textAlign:'center'}}>
                    <img src={this.state.content} />
                </div>
            </div>
        );
    }
}

module.exports = MediaElement;
