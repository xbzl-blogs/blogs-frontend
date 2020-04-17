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

    //组件更新完之后调用
    componentDidUpdate(){
        //调用内部函数 ；作用是将瀑布流各元素进行依据高度层次感排布
        var mainJs = (function($) {

            "use strict";

            var cfg = {
                    scrollDuration : 800, // smoothscroll duration
                    mailChimpURL   : ''   // mailchimp url
                },

                $WIN = $(window);

            // Add the User Agent to the <html>
            // will be used for IE10/IE11 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; rv:11.0))
            var doc = document.documentElement;
            doc.setAttribute('data-useragent', navigator.userAgent);


            /* Preloader
             * -------------------------------------------------- */
            var ssPreloader = function() {

                $("html").addClass('ss-preload');

                $WIN.on('load', function() {

                    //force page scroll position to top at page refresh
                    // $('html, body').animate({ scrollTop: 0 }, 'normal');

                    // will first fade out the loading animation
                    $("#loader").fadeOut("slow", function() {
                        // will fade out the whole DIV that covers the website.
                        $("#preloader").delay(300).fadeOut("slow");
                    });

                    // for hero content animations
                    $("html").removeClass('ss-preload');
                    $("html").addClass('ss-loaded');

                });
            };


            /* Pretty Print
             * -------------------------------------------------- */
            var ssPrettyPrint = function() {
                $('pre').addClass('prettyprint');
                $( document ).ready(function() {
                    prettyPrint();
                });
            };


            /* search
             * ------------------------------------------------------ */
            var ssSearch = function() {

                var searchWrap = $('.header__search'),
                    searchField = searchWrap.find('.search-field'),
                    closeSearch = searchWrap.find('.header__search-close'),
                    searchTrigger = $('.header__search-trigger'),
                    siteBody = $('body');


                searchTrigger.on('click', function(e) {

                    e.preventDefault();
                    e.stopPropagation();

                    var $this = $(this);

                    siteBody.addClass('search-is-visible');
                    setTimeout(function(){
                        searchWrap.find('.search-field').focus();
                    }, 100);

                });

                closeSearch.on('click', function(e) {

                    var $this = $(this);

                    e.stopPropagation();

                    if(siteBody.hasClass('search-is-visible')){
                        siteBody.removeClass('search-is-visible');
                        setTimeout(function(){
                            searchWrap.find('.search-field').blur();
                        }, 100);
                    }
                });

                searchWrap.on('click',  function(e) {
                    if( !$(e.target).is('.search-field') ) {
                        closeSearch.trigger('click');
                    }
                });

                searchField.on('click', function(e){
                    e.stopPropagation();
                });

                searchField.attr({placeholder: 'Type Keywords', autocomplete: 'off'});

            };


            /* menu
             * ------------------------------------------------------ */
            var ssMenu = function() {

                var menuToggle = $('.header__menu-toggle'),
                    siteBody = $('body');

                menuToggle.on('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    menuToggle.toggleClass('is-clicked');
                    siteBody.toggleClass('nav-wrap-is-visible');
                });

                $('.header__nav .has-children').children('a').on('click', function (e) {

                    e.preventDefault();

                    $(this).toggleClass('sub-menu-is-open')
                        .next('ul')
                        .slideToggle(200)
                        .end()
                        .parent('.has-children')
                        .siblings('.has-children')
                        .children('a')
                        .removeClass('sub-menu-is-open')
                        .next('ul')
                        .slideUp(200);

                });
            };


            /* masonry
             * ---------------------------------------------------- */
            var ssMasonryFolio = function () {

                var containerBricks = $('.masonry');

                containerBricks.masonry({
                    itemSelector: '.masonry__brick',
                    columnWidth: '.grid-sizer',
                    percentPosition: true,
                    resize: true
                });

                // layout Masonry after each image loads
                containerBricks.imagesLoaded().progress( function() {
                    containerBricks.masonry('layout');
                });

            };

            /* animate bricks
             * ------------------------------------------------------ */
            var ssBricksAnimate = function() {

                var animateEl = $('.animate-this');

                $WIN.on('load', function() {

                    setTimeout(function() {
                        animateEl.each(function(ctr) {
                            var el = $(this);

                            setTimeout(function() {
                                el.addClass('animated');
                            }, ctr * 200);
                        });
                    }, 300);

                });

                $WIN.on('resize', function() {
                    // remove animation classes
                    animateEl.removeClass('animate-this animated');
                });

            };


            /* slick slider
             * ------------------------------------------------------ */
            var ssSlickSlider = function() {

                var $gallery = $('.slider__slides').slick({
                    arrows: false,
                    dots: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    pauseOnFocus: false,
                    fade: true,
                    cssEase: 'linear'
                });

                $('.slider__slide').on('click', function() {
                    $gallery.slick('slickGoTo', parseInt($gallery.slick('slickCurrentSlide'))+1);
                });

            };


            /* smooth scrolling
             * ------------------------------------------------------ */
            var ssSmoothScroll = function() {

                $('.smoothscroll').on('click', function (e) {
                    var target = this.hash,
                        $target    = $(target);

                    e.preventDefault();
                    e.stopPropagation();

                    $('html, body').stop().animate({
                        'scrollTop': $target.offset().top
                    }, cfg.scrollDuration, 'swing').promise().done(function () {

                        // check if menu is open
                        if ($('body').hasClass('menu-is-open')) {
                            $('.header-menu-toggle').trigger('click');
                        }

                        window.location.hash = target;
                    });
                });

            };


            /* alert boxes
             * ------------------------------------------------------ */
            var ssAlertBoxes = function() {

                $('.alert-box').on('click', '.alert-box__close', function() {
                    $(this).parent().fadeOut(500);
                });

            };


            /* Back to Top
             * ------------------------------------------------------ */
            var ssBackToTop = function() {

                var pxShow      = 500,
                    goTopButton = $(".go-top")

                // Show or hide the button
                if ($(window).scrollTop() >= pxShow) goTopButton.addClass('link-is-visible');

                $(window).on('scroll', function() {
                    if ($(window).scrollTop() >= pxShow) {
                        if(!goTopButton.hasClass('link-is-visible')) goTopButton.addClass('link-is-visible')
                    } else {
                        goTopButton.removeClass('link-is-visible')
                    }
                });
            };


            /* Initialize
             * ------------------------------------------------------ */
            (function clInit() {

                ssPreloader();
                ssPrettyPrint();
                ssSearch();
                ssMenu();
                ssMasonryFolio();
                ssBricksAnimate();
                ssSlickSlider();
                ssSmoothScroll();
                ssAlertBoxes();
                ssBackToTop();

            })();

        })(jQuery);

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
