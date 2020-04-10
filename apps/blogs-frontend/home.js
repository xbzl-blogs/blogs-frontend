/**
 *
 * @author Mr.Da
 *
 * @date 2020/4/9 20:26
 *
 * 功能：主页面
 *
 */
import {Link} from "react-router";
var React = require('react');



import './public/css/base.css';
import './public/css/main.css';
import './public/css/vendor.css';

var WaterfallElements = require('./pub/waterfallElements');

var whiteroadBlogsLogoSvg = require('./public/images/whiteroadBlogsLogoSvg.svg');

const homeOnClick = function () {
    console.log("进入首页点击事件，刷新数据！");
};

/**
 * 获取数据并使用瀑布流元素加载
 */
const getWaterfallElements = function (waterfallElementsMapData) {

    console.log("getWaterfallElements方法被调用，这里加载后端数据进行写入瀑布流元素map！");

    let data = {
        id:'1234567890',
        name:'大新闻1',
        value:'Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...'
    };

    let data2 = {
        id:'1234567890',
        name:'大新闻2',
        value:'Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.Dieter Rams Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.Dieter Ram'
    };

    waterfallElementsMapData.push(<WaterfallElements data={data}/>);
    waterfallElementsMapData.push(<WaterfallElements data={data2}/>);
    waterfallElementsMapData.push(<WaterfallElements/>);
    waterfallElementsMapData.push(<WaterfallElements/>);
    waterfallElementsMapData.push(<WaterfallElements/>);
    waterfallElementsMapData.push(<WaterfallElements/>);
    waterfallElementsMapData.push(<WaterfallElements/>);
    waterfallElementsMapData.push(<WaterfallElements/>);
};

var Home = React.createClass({

    getInitialState:function(){
        let waterfallElementsMapData = [];
        getWaterfallElements(waterfallElementsMapData);

        return {
            waterfallElementsMapData:waterfallElementsMapData
        };
    },

    render: function () {
        return (
            <div>
            <div id="preloader">
                <div id="loader" className="dots-fade">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div id="top" className="s-wrap site-wrapper">

            {/*site header
            ================================================== */}

            <header className="s-header">
                <div className="header__top">
                    <div className="header__logo">
                        <Link className="site-logo" to="/home" onClick={homeOnClick}>
                            <img src={whiteroadBlogsLogoSvg} alt="Homepage" />
                        </Link>
                    </div>

                    <div className="header__search">

                        <form role="search" method="get" className="header__search-form" action="#">
                            <label>
                                <span className="hide-content">Search for:</span>
                                <input type="search" className="header__search-field" placeholder="Type Keywords"
                                       value="" name="s" title="Search for:" autoComplete="off" />
                            </label>
                            <input type="submit" className="header__search-submit" value="Search" />
                        </form>

                        <a href="#0" title="Close Search" className="header__search-close">Close</a>

                    </div> {/*end header__search*/}

                    {/*toggles*/}
                    <a href="#0" className="header__search-trigger"></a>
                    <a href="#0" className="header__menu-toggle"><span>Menu</span></a>

                </div> {/*end header__top*/}


                <nav className="header__nav-wrap">

                    <ul className="header__nav">
                        <li className="current">
                            <Link to="/home" onClick={homeOnClick}>Home</Link>
                        </li>
                        <li className="has-children">
                            <a href="#0" title="">Categories</a>
                            <ul className="sub-menu">
                                <li><a href="category.html">Lifestyle</a></li>
                                <li><a href="category.html">Health</a></li>
                                <li><a href="category.html">Family</a></li>
                                <li><a href="category.html">Management</a></li>
                                <li><a href="category.html">Travel</a></li>
                                <li><a href="category.html">Work</a></li>
                            </ul>
                        </li>
                        <li className="has-children">
                            <a href="#0" title="">Blog Posts</a>
                            <ul className="sub-menu">
                                <li><a href="single-video.html">Video Post</a></li>
                                <li><a href="single-audio.html">Audio Post</a></li>
                                <li><a href="single-gallery.html">Gallery Post</a></li>
                                <li><a href="single-standard.html">Standard Post</a></li>
                            </ul>
                        </li>
                        <li><a href="styles.html" title="">Styles</a></li>
                        <li><a href="page-about.html" title="">About</a></li>
                        <li><a href="page-contact.html" title="">Contact</a></li>
                    </ul>
                    {/*end header__nav*/}
                </nav>
                {/*end header__nav-wrap*/}
            </header>


                <div className="s-content">

                    <div className="masonry-wrap">

                        <div className="masonry">

                            <div className="grid-sizer"></div>

                            {this.getInitialState().waterfallElementsMapData}

                        </div>

                    </div>


                </div>
            </div></div>
        );
    }
});

module.exports = Home;
