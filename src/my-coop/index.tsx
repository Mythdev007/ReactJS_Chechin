import React, { useEffect } from 'react';
import { IMAGES_URL } from '../constant/images';

function MyCoop() {
    useEffect(() => {
        $('.modal').on('show.bs.modal', function () {
            $(this).show();
            setModalMaxHeight(this);
        });

        $(window).resize(function () {
            if ($('.modal.in').length != 0) {
                setModalMaxHeight($('.modal.in'));
            }
        });
    }, [])
    const setModalMaxHeight = (element: any) => {
        var $element = $(element);
        var $content = $element.find('.modal-content');
        var borderWidth = $content.outerHeight() - $content.innerHeight();
        var dialogMargin = $(window).width() < 768 ? 20 : 60;
        var contentHeight = $(window).height() - (dialogMargin + borderWidth);
        var headerHeight = $element.find('.modal-header').outerHeight() || 0;
        var footerHeight = $element.find('.modal-footer').outerHeight() || 0;
        var maxHeight = contentHeight - (headerHeight + footerHeight);

        $content.css({
            'overflow': 'hidden'
        });

        $element
            .find('.modal-body').css({
                'max-height': maxHeight,
                'overflow-y': 'auto'
            });
    }
    return (
        <>
            <div className="my-coop">
                <div className="container">
                    <div className="my-coop-top">
                        <div className="width100">
                            <h1 className="text-center">My Coop</h1>
                            <h4 className="text-center">You have 5 Chickens</h4>
                        </div>
                        <div>
                            <a href="#" data-toggle="modal" data-target="#my-coop-filter" className="btn btn-filters"><span className="fa fa-sliders"></span>  Filters</a>
                        </div>
                    </div>
                    <div className="row ten-columns">
                        <div className="col-sm-2">
                            <div className="coop-box">
                                <a href="/chicken-detail">  <img src={IMAGES_URL.CHICKENTHUMBNAIL} alt="" /></a>
                                <h3>Flight</h3>
                                <ul>
                                    <li><a href="">Dorking</a></li>
                                    <li><a href="">92%</a></li>
                                    <li><a href="">Talent</a></li>
                                    <li><a href="">Spicy</a></li>
                                </ul>
                                <p className="text-center">
                                    <a href="/chicken-detail" className="btn btn-showdetails">SHOW DETAILS</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="coop-box">
                                <a href="/chicken-detail">  <img src={IMAGES_URL.CHICKENTHUMBNAIL} alt="" /></a>
                                <h3>Flight</h3>
                                <ul>
                                    <li><a href="">Dorking</a></li>
                                    <li><a href="">92%</a></li>
                                    <li><a href="">Talent</a></li>
                                    <li><a href="">Spicy</a></li>
                                </ul>
                                <p className="text-center">
                                    <a href="/chicken-detail" className="btn btn-showdetails">SHOW DETAILS</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="coop-box">
                                <a href="/chicken-detail">  <img src={IMAGES_URL.CHICKENTHUMBNAIL} alt="" /></a>
                                <h3>Flight</h3>
                                <ul>
                                    <li><a href="">Dorking</a></li>
                                    <li><a href="">92%</a></li>
                                    <li><a href="">Talent</a></li>
                                    <li><a href="">Spicy</a></li>
                                </ul>
                                <p className="text-center">
                                    <a href="/chicken-detail" className="btn btn-showdetails">SHOW DETAILS</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="coop-box">
                                <a href="/chicken-detail">  <img src={IMAGES_URL.CHICKENTHUMBNAIL} alt="" /></a>
                                <h3>Flight</h3>
                                <ul>
                                    <li><a href="">Dorking</a></li>
                                    <li><a href="">92%</a></li>
                                    <li><a href="">Talent</a></li>
                                    <li><a href="">Spicy</a></li>
                                </ul>
                                <p className="text-center">
                                    <a href="/chicken-detail" className="btn btn-showdetails">SHOW DETAILS</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="coop-box">
                                <a href="/chicken-detail">  <img src={IMAGES_URL.CHICKENTHUMBNAIL} alt="" /></a>
                                <h3>Flight</h3>
                                <ul>
                                    <li><a href="">Dorking</a></li>
                                    <li><a href="">92%</a></li>
                                    <li><a href="">Talent</a></li>
                                    <li><a href="">Spicy</a></li>
                                </ul>
                                <p className="text-center">
                                    <a href="/chicken-detail" className="btn btn-showdetails">SHOW DETAILS</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyCoop;
