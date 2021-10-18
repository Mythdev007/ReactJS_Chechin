import React from 'react';
import { IMAGES_URL } from "../constant/images";

function ChooseAnAccount() {
    return (
        <>
            <div className="modal fade choose-an-account" id="choose-an-account" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h3>
                                CHOOSE AN ACCOUNT
                            </h3>
                            <div className="blue-box">
                                <p className="text-center"> <img src={IMAGES_URL.METAMASK} className="meta-mask" alt="" /> </p>
                                <h3>MetaMask</h3>
                                <h4>Browser Extension</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChooseAnAccount;
