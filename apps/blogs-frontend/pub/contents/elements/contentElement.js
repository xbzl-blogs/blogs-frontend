/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/18 16:16
 *
 * 功能：content内容 正文部分
 *
 */

var React = require('react');


class ContentElement extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data:props.data,
            contents:null,
            haveData: false,
        };
    }

    // 组件渲染后调用
    componentDidMount(){
        let contents = [];
        //排序
        let sortContents = this.state.data.sort(function (a, b) {
            return parseInt(a.sort) - parseInt(b.sort);
        });

        for (let i in sortContents){
            switch (sortContents[i].type) {
                case 1:
                    contents.push(<p>{sortContents[i].content}</p>);
                    break;
                case 2:
                    contents.push(<img src={sortContents[i].content}/>);
                    break;
                case 3:
                    contents.push(<pre><code>{sortContents[i].content}</code></pre>)
                    break;
                case 9:
                    contents.push(<p className="lead drop-cap">{sortContents[i].content}</p>)

            }
        }

        this.setState({
            contents:contents,
            haveData:true,
        });
    }

    render() {
        return(
            this.state.haveData
                ?   <div className="entry__content">
                        {this.state.contents}
                    </div>
                :   null
        );
    }
}

module.exports = ContentElement;
