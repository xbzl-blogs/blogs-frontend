/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/10 11:59
 *
 * 功能：主页瀑布流 单个元素
 *
 */

import QuoteWaterfallElement from "./quoteWaterfallElement";
import StandardWaterfallElement from './standardWaterfallElement';
import AudioWaterfallElement from './audioWaterfallElement';
import '../../public/css/base.css';
import '../../public/css/main.css';
import '../../public/css/vendor.css';

var React = require('react');

class WaterfallElements extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : props.data || null,
            type : props.data.articleType || 2
        }
    }

    render () {
        return(
            this.state.type === 1
                ? <StandardWaterfallElement data={this.state.data}/>
                : this.state.type === 2
                    ? <QuoteWaterfallElement data={this.state.data}/>
                    : this.state.type === 3
                        ? <AudioWaterfallElement data={this.state.data}/>
                        :null
        );
    }
}

module.exports = WaterfallElements;
