/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/17 8:43
 *
 * 功能：页签元素
 *
 */
var React = require('react');

class Row extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            number:props.data.number || 0, //当前页-1
            size:props.data.size || 20,    //页大小
            totalPages:props.data.totalPages || 1, //总页数
            totalElements:props.data.totalElements || 20 //数据集合计数
        }
    }

    setLi() {
        let lis =  [];

        //i为 展示的起始页 从当前页前两页展示数据
        let i = (this.state.number - 2) < 0 ? 0 : (this.state.number - 2);
        //最多展示到第endNumber页
        let endNumber = this.state.number + 2;
        if(this.state.number > 0){
            //如果当前页是第一页也就是number>=0时 展示向前翻页←
            lis.push(<li><a className="pgn__prev" href="#0">Prev</a></li>);
        }
        if(i > 0){
            //如果起始页不是第一页 则展示……
            lis.push(<li><span className="pgn__num dots" >…</span></li>);
        }
        for (; i < this.state.totalPages; i++){
            if(i > endNumber){
                //如果展示页超过两个后还有页 则展示…… 然后跳出循环
                lis.push(<li><span className="pgn__num dots" >…</span></li>);
                break;
            }
            if(i === this.state.number){
                //如果是当前页 则不能跳转展示黑框
                lis.push(<li><span className="pgn__num current">{i+1}</span></li>)
            }else{
                lis.push(<li><a className="pgn__num" href="#0">{i+1}</a></li>)
            }
        }
        if(this.state.number < this.state.totalPages-1){
            //如果当前页不是最后一页也就是number<totalPages-1时 展示向后翻页→
            lis.push(<li><a className="pgn__next" href="#0">Next</a></li>);
        }
        return lis;
    }

    render() {
        return(<div className="row">
            <div className="column large-full">
                <nav className="pgn">
                    <ul>
                        {this.setLi(this)}
                    </ul>
                </nav>
            </div>
        </div>);
    }
}

module.exports = Row;
