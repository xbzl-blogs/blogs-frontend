/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/18 14:43
 *
 * 功能：常规详情页面（STANDARD类型）
 *
 */

var React = require('react');
var MediaElement = require('./elements/mediaElement');
var HeaderElement = require('./elements/headerElement');
var ContentElement = require('./elements/contentElement');


class StandardContent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data:props.data,
            contents:null
        };
    }

    // 组件渲染后调用
    componentDidMount() {
        let contents = [];

        //排序
        // let sortContents = this.state.contents.sort(function (a, b) {
        //     return parseInt(a.sort) - parseInt(b.sort);
        // });

        //分离五种属性大分类内容 以type分离
        //4 媒体分类 只有一个
        let medias;
        //5 头部分类 只有一个
        let headers;
        //1、2、3 内容分类 多个
        let content = [];
        let data = this.state.data.contents;
        for (let i in data){

            switch (data[i].type) {
                case 1:
                case 2:
                case 3:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                    content.push(data[i]);
                    break;
                case 4:
                    medias = data[i];
                    break;
                case 5:
                    headers = data[i];
                    break;
            }

        }
        //插入顺序 media > header > content > pagenav > related
        if(medias){
            contents.push(<MediaElement data={medias}/>);
        }
        if(headers){
            contents.push(<HeaderElement data={headers}/>);
        }
        if(content && content.length > 0){
            contents.push(<ContentElement data={content}/>);
        }

        this.setState({
            contents:contents
        });

    }

    render() {
        return(
            <article className="column large-full entry format-standard">
                {this.state.contents}
            </article>
        );
    }


}

module.exports = StandardContent;
