import React from 'react';
import { IMAGES_URL } from '../constant/images';

function Transection() {
    return (
        <>
            <div className="modal fade" id="transaction-confirmation" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><img src={IMAGES_URL.CLOSEICON} alt="" /></span></button>
                            <h3 className="modal-title" id="myModalLabel">Transaction confirmation</h3>
                        </div>
                        <div className="modal-body">
                            <h4>CURRENT PRICE</h4>
                            <p>$2.36 USD</p>
                            <h4>ESTIMATED TX FEE</h4>
                            <p>$0.00 USD</p>
                            <h4>ESTIMATED TOTAL</h4>
                            <p>$0.00 USD</p>
                            <h4 className="text-center">
                                $2.36 USD (0.0006 ETH)
                            </h4>
                            <div className="bottom-btn">
                                <a href="" className="btn btn-go">GO BACK</a>
                                <a href="" data-toggle="modal" data-target="#complete-transaction" className="btn btn-confirm" data-dismiss="modal">CONFIRM</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade choose-an-account complete-transaction" id="complete-transaction" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h3>
                                Please complete you transaction <span className="block"></span> on MetaMask
                            </h3>
                            <p>
                                To complete your transaction please click Confirm in the <span className="block"></span>
                                MetaMask window
                            </p>
                            <p>
                                <img src={IMAGES_URL.LOADER} className="loader-img" alt="" />
                            </p>
                            <h5>Tip: If Metamask does not appear automatically. Please click <span className="block"></span>
                                on MetaMask icon in your browser notification toolbar
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Transection;
