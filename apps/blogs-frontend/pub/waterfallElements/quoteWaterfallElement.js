/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/15 13:44
 *
 * 功能：quote引用瀑布流元素
 *
 */

var React = require('react');
var data = require('./ArticleDefaultData').DEFAULT_DATA;

class QuoteWaterfallElement extends React.Component{

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
            <article className="masonry__brick entry format-quote animate-this">

                <div className="entry__thumb">
                    <blockquote>
                        <p>{this.state.contentTitle}</p>

                        <cite>{this.state.contentIntro}</cite>
                    </blockquote>
                </div>

            </article>
        );
    }

}
module.exports = QuoteWaterfallElement;
