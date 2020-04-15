/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/15 14:50
 *
 * 功能：video视频瀑布流元素
 *
 */

var React = require('react');
var data = require('./ArticleDefaultData').DEFAULT_DATA;
var {IMAGE_PATH} = require('../RestUrl');

class AudioWaterfallElement extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            id: props.data.id || data.id,
            articleType: props.data.articleType || data.articleType,
            articleTime: props.data.articleTime || data.articleTime,
            articleUserName: props.data.articleUserName || data.articleUserName,
            articleCover: props.data.articleCover || data.articleCover,
            contentTitle: props.data.contentTitle || data.contentTitle,
            contentSubhead: props.data.contentSubhead || data.contentSubhead,
            contentTags: props.data.contentTags || data.contentTags,
            contentCategory: props.data.contentCategory || data.contentCategory,
            contentIntro: props.data.contentIntro || data.contentIntro,
            contents: props.data.contents || data.contents
        }
    }


    render () {
        return(
            <article className="masonry__brick entry format-video animate-this">

                <div className="entry__thumb video-image">
                    <a href="" data-lity className="entry__thumb-link">
                        <img src={IMAGE_PATH+this.state.articleCover} />
                    </a>
                </div>

                <div className="entry__text">
                    <div className="entry__header">
                        <h2 className="entry__title"><a href="single-video.html">{this.state.contentTitle}</a></h2>
                        <div className="entry__meta">
                                    <span className="entry__meta-cat">
                                        <a href="category.html">{this.state.articleUserName}</a>
                                        <a href="category.html">Health</a>
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
module.exports = AudioWaterfallElement;

