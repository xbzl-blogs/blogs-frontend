/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/15 14:59
 *
 * 功能：link链接瀑布流元素
 *
 */

var React = require('react');
var data = require('./ArticleDefaultData').DEFAULT_DATA;

class LinkWaterfallElement extends React.Component{

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
            <article className="masonry__brick entry format-link animate-this">

                <div className="entry__thumb">
                    <div className="link-wrap">
                        <h2>{this.state.contentTitle}</h2>
                        <cite>
                            <a target="_blank" href={this.state.articleCover}>{this.state.contentIntro}</a>
                        </cite>
                    </div>
                </div>

            </article>
        );
    }

}
module.exports = LinkWaterfallElement;
