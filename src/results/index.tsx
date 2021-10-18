import React, { useEffect } from 'react';
import { IMAGES_URL } from '../constant/images';

function Results() {
    useEffect(() => {
        $('.accordian-body').on('show.bs.collapse', function () {
            $(this).closest("table")
                .find(".collapse.in")
                .not(this)
                .collapse('toggle');
        });
        $(".accordion-toggle").click(function () {
            $(this).toggleClass("change-bg");
        });
        $('[data-toggle="tooltip"]').tooltip();
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
            <div className="table-section">
                <div className="container">
                    <div className="table-box">
                        <ul>
                            <li><a href="/">Enter Race</a></li>
                            <li><a href="/scheduled/races">Scheduled Races</a></li>
                            <li className="active"><a href="/result">Results</a></li>
                        </ul>
                        <div className="result-filter">
                            <div>
                                <label className="switch">
                                    <input type="checkbox" className="switch-input" />
                                    <span className="switch-label" ></span>
                                    <span className="switch-handle"></span>
                                </label>
                                <span className="my-chicken">My Chickens Only</span>
                            </div>
                            <div>
                                <div className="race-result">
                                    <h4><span className="yellow">315516</span> RACES <span className="spacing-right"></span> <span className="green">$24,154,45 USD</span> WON</h4>
                                </div>
                                <div className="filter-right">
                                    <a href="#" data-toggle="modal" data-target="#filter-popup" className="btn btn-filters"><span className="fa fa-sliders"></span>  Filters</a>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-stripped table-hover" style={{ "borderCollapse": "collapse" }}>
                                <thead>
                                    <tr>
                                        <th>Event</th>
                                        <th>Location</th>
                                        <th>Winner</th>
                                        <th>Pecking Order</th>
                                        <th>Distance</th>
                                        <th>Terrain</th>
                                        <th>Prize Pool</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle">
                                        <td>Juvinile Jubile</td>
                                        <td>US San Francisco</td>
                                        <td>Chicken</td>
                                        <td><span className="text-class">A</span></td>
                                        <td>1600m</td>
                                        <td>
                                            <img src={IMAGES_URL.TERRAIN} className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
                                        </td>
                                        <td><span className="price-green"> $5.99</span> <span className="price-usd">USD</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={8} className="hiddenRow">
                                            <div id="demo1" className="accordian-body collapse">
                                                <div className="top-heading">
                                                    <div>
                                                    </div>
                                                    <div>
                                                        <a href="#" data-toggle="modal" data-target="#select-chicken" className="btn btn-enter">Watch Reply</a>
                                                    </div>
                                                </div>
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Position</th>
                                                            <th>Image</th>
                                                            <th>Name</th>
                                                            <th>Owner</th>
                                                            <th>Winnings</th>
                                                            <th>Heritage</th>
                                                            <th>Perfection</th>
                                                            <th>History</th>
                                                            <th>Races</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1st</td>
                                                            <td><img src={IMAGES_URL.CHICKEN} className="img-pic" alt="" /></td>
                                                            <td>Willber</td>
                                                            <td>Liam</td>
                                                            <td>$5.99</td>
                                                            <td>Dorking</td>
                                                            <td>96%</td>
                                                            <td>2/0/4</td>
                                                            <td>12</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2nd</td>
                                                            <td><img src={IMAGES_URL.CHICKEN} className="img-pic" alt="" /></td>
                                                            <td>Willber</td>
                                                            <td>Liam</td>
                                                            <td>$5.99</td>
                                                            <td>Dorking</td>
                                                            <td>96%</td>
                                                            <td>2/0/4</td>
                                                            <td>12</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3rd</td>
                                                            <td><img src={IMAGES_URL.CHICKEN} className="img-pic" alt="" /></td>
                                                            <td>Willber</td>
                                                            <td>Liam</td>
                                                            <td>$5.99</td>
                                                            <td>Dorking</td>
                                                            <td>96%</td>
                                                            <td>2/0/4</td>
                                                            <td>12</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-toggle="collapse" data-target="#demo2" className="accordion-toggle">
                                        <td>Juvinile Jubile</td>
                                        <td>US San Francisco</td>
                                        <td>Chicken</td>
                                        <td><span className="text-class">A</span></td>
                                        <td>1600m</td>
                                        <td>
                                            <img src={IMAGES_URL.TERRAIN} className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
                                        </td>
                                        <td><span className="price-green"> $5.99</span> <span className="price-usd">USD</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={8} className="hiddenRow">
                                            <div id="demo2" className="accordian-body collapse">
                                                <div className="top-heading">
                                                    <div>
                                                    </div>
                                                    <div>
                                                        <a href="#" data-toggle="modal" data-target="#select-chicken" className="btn btn-enter">Watch Reply</a>
                                                    </div>
                                                </div>
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Position</th>
                                                            <th>Image</th>
                                                            <th>Name</th>
                                                            <th>Owner</th>
                                                            <th>Winnings</th>
                                                            <th>Heritage</th>
                                                            <th>Perfection</th>
                                                            <th>History</th>
                                                            <th>Races</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1st</td>
                                                            <td><img src={IMAGES_URL.CHICKEN} className="img-pic" alt="" /></td>
                                                            <td>Willber</td>
                                                            <td>Liam</td>
                                                            <td>$5.99</td>
                                                            <td>Dorking</td>
                                                            <td>96%</td>
                                                            <td>2/0/4</td>
                                                            <td>12</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1st</td>
                                                            <td><img src={IMAGES_URL.CHICKEN} className="img-pic" alt="" /></td>
                                                            <td>Willber</td>
                                                            <td>Liam</td>
                                                            <td>$5.99</td>
                                                            <td>Dorking</td>
                                                            <td>96%</td>
                                                            <td>2/0/4</td>
                                                            <td>12</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1st</td>
                                                            <td><img src={IMAGES_URL.CHICKEN} className="img-pic" alt="" /></td>
                                                            <td>Willber</td>
                                                            <td>Liam</td>
                                                            <td>$5.99</td>
                                                            <td>Dorking</td>
                                                            <td>96%</td>
                                                            <td>2/0/4</td>
                                                            <td>12</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-toggle="collapse" data-target="#demo3" className="accordion-toggle">
                                        <td>Juvinile Jubile</td>
                                        <td>US San Francisco</td>
                                        <td>Chicken</td>
                                        <td><span className="text-class">A</span></td>
                                        <td>1600m</td>
                                        <td>
                                            <img src={IMAGES_URL.TERRAIN} className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
                                        </td>
                                        <td><span className="price-green"> $5.99</span> <span className="price-usd">USD</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={8} className="hiddenRow">
                                            <div id="demo3" className="accordian-body collapse">
                                                <div className="top-heading">
                                                    <div>
                                                    </div>
                                                    <div>
                                                        <a href="#" data-toggle="modal" data-target="#select-chicken" className="btn btn-enter">Watch Reply</a>
                                                    </div>
                                                </div>
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Position</th>
                                                            <th>Image</th>
                                                            <th>Name</th>
                                                            <th>Owner</th>
                                                            <th>Winnings</th>
                                                            <th>Heritage</th>
                                                            <th>Perfection</th>
                                                            <th>History</th>
                                                            <th>Races</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1st</td>
                                                            <td><img src={IMAGES_URL.CHICKEN} className="img-pic" alt="" /></td>
                                                            <td>Willber</td>
                                                            <td>Liam</td>
                                                            <td>$5.99</td>
                                                            <td>Dorking</td>
                                                            <td>96%</td>
                                                            <td>2/0/4</td>
                                                            <td>12</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1st</td>
                                                            <td><img src={IMAGES_URL.CHICKEN} className="img-pic" alt="" /></td>
                                                            <td>Willber</td>
                                                            <td>Liam</td>
                                                            <td>$5.99</td>
                                                            <td>Dorking</td>
                                                            <td>96%</td>
                                                            <td>2/0/4</td>
                                                            <td>12</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1st</td>
                                                            <td><img src={IMAGES_URL.CHICKEN} className="img-pic" alt="" /></td>
                                                            <td>Willber</td>
                                                            <td>Liam</td>
                                                            <td>$5.99</td>
                                                            <td>Dorking</td>
                                                            <td>96%</td>
                                                            <td>2/0/4</td>
                                                            <td>12</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-toggle="collapse" data-target="#demo4" className="accordion-toggle">
                                        <td>Juvinile Jubile</td>
                                        <td>US San Francisco</td>
                                        <td>Chicken</td>
                                        <td><span className="text-class">A</span></td>
                                        <td>1600m</td>
                                        <td>
                                            <img src={IMAGES_URL.TERRAIN} className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
                                        </td>
                                        <td><span className="price-green"> $5.99</span> <span className="price-usd">USD</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={8} className="hiddenRow">
                                            <div id="demo4" className="accordian-body collapse">
                                                <div className="top-heading">
                                                    <div>
                                                    </div>
                                                    <div>
                                                        <a href="#" data-toggle="modal" data-target="#select-chicken" className="btn btn-enter">Watch Reply</a>
                                                    </div>
                                                </div>
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Position</th>
                                                            <th>Image</th>
                                                            <th>Name</th>
                                                            <th>Owner</th>
                                                            <th>Winnings</th>
                                                            <th>Heritage</th>
                                                            <th>Perfection</th>
                                                            <th>History</th>
                                                            <th>Races</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1st</td>
                                                            <td><img src={IMAGES_URL.CHICKEN} className="img-pic" alt="" /></td>
                                                            <td>Willber</td>
                                                            <td>Liam</td>
                                                            <td>$5.99</td>
                                                            <td>Dorking</td>
                                                            <td>96%</td>
                                                            <td>2/0/4</td>
                                                            <td>12</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1st</td>
                                                            <td><img src={IMAGES_URL.CHICKEN} className="img-pic" alt="" /></td>
                                                            <td>Willber</td>
                                                            <td>Liam</td>
                                                            <td>$5.99</td>
                                                            <td>Dorking</td>
                                                            <td>96%</td>
                                                            <td>2/0/4</td>
                                                            <td>12</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1st</td>
                                                            <td><img src={IMAGES_URL.CHICKEN} className="img-pic" alt="" /></td>
                                                            <td>Willber</td>
                                                            <td>Liam</td>
                                                            <td>$5.99</td>
                                                            <td>Dorking</td>
                                                            <td>96%</td>
                                                            <td>2/0/4</td>
                                                            <td>12</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-toggle="collapse" data-target="#demo5" className="accordion-toggle">
                                        <td>Juvinile Jubile</td>
                                        <td>US San Francisco</td>
                                        <td>Chicken</td>
                                        <td><span className="text-class">A</span></td>
                                        <td>1600m</td>
                                        <td>
                                            <img src={IMAGES_URL.TERRAIN} className="" data-toggle="tooltip" data-placement="bottom" title="Terrain Icon" alt="" />
                                        </td>
                                        <td><span className="price-green"> $5.99</span> <span className="price-usd">USD</span></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={8} className="hiddenRow">
                                            <div id="demo5" className="accordian-body collapse">
                                                <div className="top-heading">
                                                    <div>
                                                    </div>
                                                    <div>
                                                        <a href="#" data-toggle="modal" data-target="#select-chicken" className="btn btn-enter">Watch Reply</a>
                                                    </div>
                                                </div>
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Position</th>
                                                            <th>Image</th>
                                                            <th>Name</th>
                                                            <th>Owner</th>
                                                            <th>Winnings</th>
                                                            <th>Heritage</th>
                                                            <th>Perfection</th>
                                                            <th>History</th>
                                                            <th>Races</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1st</td>
                                                            <td><img src={IMAGES_URL.CHICKEN} className="img-pic" alt="" /></td>
                                                            <td>Willber</td>
                                                            <td>Liam</td>
                                                            <td>$5.99</td>
                                                            <td>Dorking</td>
                                                            <td>96%</td>
                                                            <td>2/0/4</td>
                                                            <td>12</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1st</td>
                                                            <td><img src={IMAGES_URL.CHICKEN} className="img-pic" alt="" /></td>
                                                            <td>Willber</td>
                                                            <td>Liam</td>
                                                            <td>$5.99</td>
                                                            <td>Dorking</td>
                                                            <td>96%</td>
                                                            <td>2/0/4</td>
                                                            <td>12</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1st</td>
                                                            <td><img src={IMAGES_URL.CHICKEN} className="img-pic" alt="" /></td>
                                                            <td>Willber</td>
                                                            <td>Liam</td>
                                                            <td>$5.99</td>
                                                            <td>Dorking</td>
                                                            <td>96%</td>
                                                            <td>2/0/4</td>
                                                            <td>12</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Results;
