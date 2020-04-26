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
import {Link} from "react-router";


const setUIADNLI = function (content) {
    let uidata = [];
    if(content.li){
        for (let i in content.li){
            if(content.li[i].core){
                uidata.push(<li>{content.li[i].core}</li>);
            }
            if(content.li[i].ui){
                let ul = setUIADNLI(content.li[i].ui);
                uidata.push(<ul>{ul}</ul>);
            }
        }
    }
    return uidata;
};

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
                    contents.push(<p><img src={sortContents[i].content}/></p>);
                    break;
                case 3:
                    contents.push(<pre><code>{sortContents[i].content}</code></pre>);
                    break;
                case 6:
                    let aData = sortContents[i].content.split("<a/>");
                    let alist = [];
                    for (let i in aData){
                        alist.push(<Link >{aData[i]}</Link>);
                    }
                    contents.push(<p className="entry__tags"><span>文章 标签</span> <span className="entry__tag-list"> {alist}</span></p>);
                    break;
                case 7:
                    let blockquoteData = sortContents[i].content.split("<blockquote/>");
                    if(blockquoteData && blockquoteData.length === 2){
                        contents.push(<blockquote><p>{blockquoteData[0]}</p><cite>{blockquoteData[1]}</cite></blockquote>);
                    }
                    break;
                case 8:
                    let content = JSON.parse( sortContents[i].content);
                    let uidata = setUIADNLI(content);
                    contents.push(<ul >{uidata}</ul>);
                    break;
                case 9:
                    contents.push(<p className="lead drop-cap">{sortContents[i].content}</p>);
                    break;
                case 10:
                    contents.push(<h2>{sortContents[i].content}</h2>);
                    break;
                case 11:
                    contents.push(<h3>{sortContents[i].content}</h3>);
                    break;

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
