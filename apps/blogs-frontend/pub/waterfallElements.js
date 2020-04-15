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
    id: '1',
    articleType: '出错了！',
    articleTime: '出错了！',
    articleUserName: '出错了！',
    contentTitle: '出错了！',
    contentSubhead: '出错了！',
    contentTags: '出错了！',
    contentCategory: '出错了！',
    contentIntro: '出错了！',
    contents: null
};


class WaterfallElements extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            id: props.data.id || data.id,
            articleType: props.data.articleType || data.articleType,
            articleTime: props.data.articleTime || data.articleTime,
            articleUserName: props.data.articleUserName || data.articleUserName,
            contentTitle: props.data.contentTitle || data.contentTitle,
            contentSubhead: props.data.contentSubhead || data.contentSubhead,
            contentTags: props.data.contentTags || data.contentTags,
            contentCategory: props.data.contentCategory || data.contentCategory,
            contentIntro: props.data.contentIntro || data.contentIntro,
            contents: props.data.contents || data.contents
        }
    }

    render () {
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

                    <h2 className="entry__title"><a href="single-standard.html">{this.state.contentTitle}</a></h2>
                    <div className="entry__meta">
                                    <span className="entry__meta-cat">
                                        <a href="category.html">{this.state.articleUserName}</a>
                                        <a href="category.html">Photography</a>
                                    </span>
                        <span className="entry__meta-date">
                                        <a href="single-standard.html">{this.state.articleTime}</a>
                                    </span>
                    </div>

                </div>
                <div className="entry__excerpt">
                    <p>
                        {this.state.contentIntro}
                    </p>
                </div>
            </div>

        </article>
        );
    }
}

module.exports = WaterfallElements;
