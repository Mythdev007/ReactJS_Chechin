import React from 'react';
import { IMAGES_URL } from '../constant/images';

function ViewChicken() {
    return (
        <>
            <div className="modal fade" id="view-chicken" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><img src={IMAGES_URL.CLOSEICON} alt="" /></span></button>
                            <h3 className="modal-title" id="myModalLabel">View Chicken Details</h3>
                        </div>
                        <div className="modal-body">
                            <div className="chicken-box-sm">
                                <p> <img src={IMAGES_URL.CHICKENTHUMBNAIL} alt="" /> </p>
                                <div className="chicken-user">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Owner</th>
                                                <th>Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>John</td>
                                                <td>Willber</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="chicken-box-lg">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Heritage</th>
                                                <th>Perfection</th>
                                                <th>Stock</th>
                                                <th>Talent</th>
                                                <th>Pecking Order</th>
                                                <th>POP</th>
                                                <th>History</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Dorking</td>
                                                <td>96%</td>
                                                <td>Stock</td>
                                                <td>Talent</td>
                                                <td><span className="text-classwhite">CLASS V</span></td>
                                                <td>12</td>
                                                <td>2/0/4</td>
                                            </tr>
                                            <tr>
                                                <th>Races</th>
                                                <th>Winnings</th>
                                                <th>Situations</th>
                                                <th>Gender</th>
                                                <th>Color</th>
                                                <th>Stripes</th>
                                                <th>Eyes</th>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>$5.99</td>
                                                <td>Race Pen</td>
                                                <td>Roaster</td>
                                                <td>Orange</td>
                                                <td>Stripes</td>
                                                <td>Eyes</td>
                                            </tr>
                                            <tr>
                                                <th colSpan={1} className="hidden-xs"></th>
                                                <th>Beak</th>
                                                <th>Comb</th>
                                                <th>Wattle</th>
                                                <th>Background</th>
                                            </tr>
                                            <tr>
                                                <td colSpan={1} className="hidden-xs"></td>
                                                <td>Orange</td>
                                                <td>Red</td>
                                                <td>Red</td>
                                                <td>Background</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewChicken;
