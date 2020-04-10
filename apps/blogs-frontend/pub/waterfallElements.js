/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/10 11:59
 *
 * 功能：主页瀑布流 单个元素
 *
 */

var React = require('react');

import '../public/css/base.css';
import '../public/css/main.css';
import '../public/css/vendor.css';


var data = {
    id:"null",
    name:"出错了"
};


var WaterfallElements = React.createClass({

    getInitialState:function(){
        return {
            data:this.props.data || data
        };
    },
    componentDidMount:function(){
        let data = this.props.data;
        console.log(data);
    },
    render: function () {
        return(<article className="masonry__brick entry format-standard animate-this">

            <div className="entry__thumb">
                <a href="single-standard.html" className="entry__thumb-link">
                    <img src="./public/images/thumbs/masonry/woodcraft-600.jpg"
                         srcSet="./public/images/thumbs/masonry/woodcraft-600.jpg 1x, ./public/images/thumbs/masonry/woodcraft-1200.jpg 2x"
                         alt="" />
                </a>
            </div>

            <div className="entry__text">
                <div className="entry__header">

                    <h2 className="entry__title"><a href="single-standard.html">{this.getInitialState().data.name}</a></h2>
                    <div className="entry__meta">
                                    <span className="entry__meta-cat">
                                        <a href="category.html">Design</a>
                                        <a href="category.html">Photography</a>
                                    </span>
                        <span className="entry__meta-date">
                                        <a href="single-standard.html">Apr 29, 2019</a>
                                    </span>
                    </div>

                </div>
                <div className="entry__excerpt">
                    <p>
                        Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit
                        id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit
                        nisi officia aute incididunt velit sint in aliqua...
                    </p>
                </div>
            </div>

        </article>
        );
    }
});

module.exports = WaterfallElements;
