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

var homepageLogoSvg = require('./public/images/logo.svg');


var Home = React.createClass({
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
                        <Link className="site-logo" to="/home">
                            <img src={homepageLogoSvg} alt="Homepage" />
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
                        <li className="current"><a href="index.html" title="">Home</a></li>
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

                    <ul className="header__social">
                        <li className="ss-facebook">
                            <a href="">
                                <span className="screen-reader-text">Facebook</span>
                            </a>
                        </li>
                        <li className="ss-twitter">
                            <a href="#0">
                                <span className="screen-reader-text">Twitter</span>
                            </a>
                        </li>
                        <li className="ss-dribbble">
                            <a href="#0">
                                <span className="screen-reader-text">Dribbble</span>
                            </a>
                        </li>
                        <li className="ss-pinterest">
                            <a href="#0">
                                <span className="screen-reader-text">Behance</span>
                            </a>
                        </li>
                    </ul>

                </nav>
                {/*end header__nav-wrap*/}

            </header>
            </div></div>
        );
    }
});

module.exports = Home;
