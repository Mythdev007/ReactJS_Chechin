import React from 'react';

function Filter() {
    return (
        <>
            <div className="modal fade" id="filter-popup" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="myModalLabel">Filter</h3>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Pecking Order</label>
                                        <div className="dropdown select-checkout">
                                            <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                                Select Pecking Order
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        A
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        B
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        C
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Chicks
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Distance</label>
                                        <div className="dropdown select-checkout">
                                            <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                                Select Distance
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        100m
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        120m
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        140m
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        160m
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        180m
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        200m
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Entry Fee (Min)</label>
                                        <input type="text" className="form-control" name="" id="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Entry Fee (Max)</label>
                                        <input type="text" className="form-control" name="" id="" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Terrain Type</label>
                                <div className="dropdown select-checkout">
                                    <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                        Select Terrain
                                        <b className="caret"></b>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                        <li>
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                                Dirt
                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                                Grass
                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                                Road
                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                                Rock
                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                                Sand
                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                                Snow
                                            </label>
                                        </li>
                                        <li>
                                            <label className="checkbox">
                                                <input type="checkbox" />
                                                Track
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-btn">
                                <button type="button" className="btn btn-reset">Reset</button>
                                <button type="button" className="btn btn-filter-modal">Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="filter-popup2" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="myModalLabel">Filter</h3>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Heritage</label>
                                        <div className="dropdown select-checkout">
                                            <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                                Select Heritage
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Serema
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Sultan
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Lakenvelder
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Dorking
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Talent</label>
                                        <div className="dropdown select-checkout">
                                            <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                                Select Talent
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Anvil
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Black Hole
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Blue Egg
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Blue Rooster
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Chickenapult
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Cold Snap
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Coober
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Devolution
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        DIG
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Fan Group
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Flight
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Growth
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Helicopter
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Jetpack
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Machete
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Moving Walkway
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Rollerblades
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Royal Procession
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Teleport
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Races (Min)</label>
                                        <input type="text" className="form-control" name="" id="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Races (Max)</label>
                                        <input type="text" className="form-control" name="" id="" />
                                    </div>
                                </div>
                            </div>
                            <div className="footer-btn">
                                <button type="button" className="btn btn-reset">Reset</button>
                                <button type="button" className="btn btn-filter-modal">Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade my-coop-filter" id="my-coop-filter" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h3>Filter</h3>
                            <h4 className="fbold">Stats</h4>
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Name</label>
                                        <input type="text" className="form-control" name="" id="" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Heritage</label>
                                        <div className="dropdown select-checkout">
                                            <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                                Select Heritage
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Serema
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Sultan
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Lakenvelder
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Dorking
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Talent</label>
                                        <div className="dropdown select-checkout">
                                            <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                                Select Talent
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Anvil
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Black Hole
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Blue Egg
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Blue Rooster
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Chickenapult
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Cold Snap
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Coober
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Devolution
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Dig
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Fan  Group
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Flight
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Growth
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Helicopter
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Jetpack
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Machete
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Moving Walkway
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Rollerblades
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Royal Procession
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Teleport
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Stock</label>
                                        <div className="dropdown select-checkout">
                                            <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                                Select Stock
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Spicy
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Robust
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Fresh
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Crisp
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Tender
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Bland
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Perfection (Min)</label>
                                        <input type="text" className="form-control" name="" id="" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Perfection (Max)</label>
                                        <input type="text" className="form-control" name="" id="" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Situation</label>
                                        <div className="dropdown select-checkout">
                                            <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                                Select Situation
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Barn
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Race Pen
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Racing
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 className="fbold">Race History</h4>
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Races (Min)</label>
                                        <input type="text" className="form-control" name="" id="" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Races (Max)</label>
                                        <input type="text" className="form-control" name="" id="" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">POP (Min)</label>
                                        <input type="text" className="form-control" name="" id="" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">POP (Max)</label>
                                        <input type="text" className="form-control" name="" id="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Placed (Min)</label>
                                        <input type="text" className="form-control" name="" id="" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Placed (Max)</label>
                                        <input type="text" className="form-control" name="" id="" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Winnings (Min)</label>
                                        <input type="text" className="form-control" name="" id="" />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Winnings (Max)</label>
                                        <input type="text" className="form-control" name="" id="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Pecking Order</label>
                                        <div className="dropdown select-checkout">
                                            <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                                Select Pecking Order
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        A
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        B
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        C
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Chicks
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 className="fbold">Traits</h4>
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Gender</label>
                                        <div className="dropdown select-checkout">
                                            <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                                Select Gender
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Hen
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Rooster
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Color</label>
                                        <div className="dropdown select-checkout">
                                            <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                                Select Color
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Bald Chicken
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Black
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Cherry Dusk
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Classic
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Eggshell
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        English Mustard
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Istanblue
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Joker's Jade
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Manic Mint
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Merah Red
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Orange Will
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Purple  Wine
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Robot
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Rose
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Royal Violet
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Sapphire
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Screamin Green
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Shocking Pink
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Wild Moss
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Comb</label>
                                        <div className="dropdown select-checkout">
                                            <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                                Select Comb
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Black
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Blue
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Candy
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Green
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Orange
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Pink
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Purple
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Red
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Studs
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Teal
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        White
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Yellow
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Wattle</label>
                                        <div className="dropdown select-checkout">
                                            <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                                Select Wattle
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Black
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Blue
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Candy
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Green
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Orange
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Pink
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Purple
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Red
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Teal
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        White
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Yellow
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Beak</label>
                                        <div className="dropdown select-checkout">
                                            <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                                Select Beak
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Black
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Gold
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Orange
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        White
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Yellow
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Accessory</label>
                                        <div className="dropdown select-checkout">
                                            <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                                Select Accessory
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        None
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Ring
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Vampire
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Eyes</label>
                                        <div className="dropdown select-checkout">
                                            <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                                Select Eyes
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Alien
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Angry
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Beauty
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Bloodshot
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Bulging
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Cockeyed
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Crosseyed
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Determined
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Exhausted
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Eyepatch
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Lizard
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Robot
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Sad
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Shocked
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Sleepy
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Background</label>
                                        <div className="dropdown select-checkout">
                                            <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                                Select Background
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Amethyst
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Autumn
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Flesh
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Lava
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Lilac
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Ocean
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Spring
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Stone
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Summer
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Winter
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="">Stripes</label>
                                        <div className="dropdown select-checkout">
                                            <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
                                                Select Stripes
                                                <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-form" role="menu">
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        Yes
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="checkbox">
                                                        <input type="checkbox" />
                                                        No
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-filter-modal">Filter</button>
                                <button type="button" className="btn btn-reset">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filter;
