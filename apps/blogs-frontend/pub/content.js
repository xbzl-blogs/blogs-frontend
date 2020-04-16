/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/14 14:14
 *
 * 功能：内容展示
 *
 */

var React = require('react');
var $ = require('jquery');
var WaterfallElements = require('./waterfallElements/waterfallElements');

var urls = require('../pub/RestUrl').CONTENT;


/**
 * 获取数据并使用瀑布流元素加载
 */
const getWaterfallElements = function (_this,waterfallElementsMapData) {

    console.log("getWaterfallElements方法被调用，这里加载后端数据进行写入瀑布流元素map！");

    $.ajax({
        url: urls.QUERY_LIST,
        async: true,
        type: 'GET',
        dataType: "json",
        contentType: 'application/json;charset=utf-8',
        success: function (result) {
            console.log(result);
            if(result && result.success){
                if(result.backData){
                    let backData = result.backData;
                    for (let i in backData){
                        let data = backData[i];
                        waterfallElementsMapData.push(<WaterfallElements data={data}/>);
                    }
                    _this.setState({
                        haveData:true,
                        waterfallElementsMapData:waterfallElementsMapData
                    });
                }
            }
        }
    });



};

class Content extends React.Component{

    // 初始化
    constructor(props){
        super(props);

        this.state = {
            haveData:false
        }
    }

    // 组件渲染后调用
    componentDidMount(){
        let waterfallElementsMapData = [];
        getWaterfallElements(this,waterfallElementsMapData);
    }

    render(){

        return(
            !this.state.haveData ?
                null:
                (<div className="s-content">
                    <div className="masonry-wrap">
                        <div className="masonry">
                            <div className="grid-sizer"></div>
                            {this.state.waterfallElementsMapData}
                        </div>
                    </div>
                    <div className="row">
                        <div className="column large-full">
                            <nav className="pgn">
                                <ul>
                                    <li><a className="pgn__prev" href="#0">Prev</a></li>
                                    <li><a className="pgn__num" href="#0">1</a></li>
                                    <li><span className="pgn__num current">2</span></li>
                                    <li><a className="pgn__num" href="#0">3</a></li>
                                    <li><a className="pgn__num" href="#0">4</a></li>
                                    <li><a className="pgn__num" href="#0">5</a></li>
                                    <li><span className="pgn__num dots">…</span></li>
                                    <li><a className="pgn__num" href="#0">8</a></li>
                                    <li><a className="pgn__next" href="#0">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>)
        );
    }
}

module.exports = Content;
