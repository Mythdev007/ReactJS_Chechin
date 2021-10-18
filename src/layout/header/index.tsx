import React, { useState } from 'react';
import { IMAGES_URL } from "../../constant/images";

function Header() {
    const [isShowBalance, setIsShowBalance] = useState<boolean>(false);
    const handleCardIconClick = () => {
        setIsShowBalance(!isShowBalance);
        $(".balance-sheet").toggle(500);
    };
    return (
        <>
            <nav className="navbar navbar-default mynav">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="" href="/">
                            <img src={IMAGES_URL.LOGO} className="logo" alt="" />
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Racing <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="/">Enter Race</a></li>
                                    <li><a href="/scheduled/races">Scheduled</a></li>
                                    <li><a href="/result">Results</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Chickens <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="/my-coop">My Coop</a></li>
                                    <li><a href="#">Search</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Tutorial</a></li>
                            <li>
                                <div className="pricing-section">
                                    <div className="show-width">
                                        <ul className="balance-sheet" style={{ display: 'none' }}>
                                            <li>ETH BALANCE <span>$0.00 USD</span></li>
                                            <li>WETH BALANCE <span>$148.86 USD</span></li>
                                        </ul>
                                    </div>
                                    <a href="#" className="icon-show" onClick={() => { handleCardIconClick() }}>
                                        <img src={IMAGES_URL.CARDICON} className="icon-card" alt="" />
                                        <span className="open">{isShowBalance ? 'Hide' : 'Show'}</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
