import React, { Component } from 'react'

import '../css/MyOrders.css';
import shoplogo from "../images/shop-logo.png";

import {Link} from "react-router-dom";

export default class Profile extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="orders" style={this.props.currentpage ? {display:"block"} : {display:"none"}}>
                <div className="orders-container">
                    <div  className="orders-container-center">
                        <div className="orders-box">
                            <div className="orders-box-top">
                                <h2>Οι παραγγελίες σου</h2>
                            </div>
                            <ul>
                                <li>
                                    <div className="orders-row">
                                        <div className="orders-row-col">
                                            <strong>Κωδ. Παραγγελίας</strong>
                                        </div>
                                        <div className="orders-row-col">
                                            <strong>Ημερομηνία</strong>
                                        </div>
                                        <div className="orders-row-col">
                                            <strong>Εστιατόριο</strong>
                                        </div>
                                        <div className="orders-row-col2">
                                            <strong>Περιεχόμενα</strong>
                                        </div>
                                        <div className="orders-row-col3">
                                            <strong>Κόστος</strong>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="orders-row">
                                        <div className="orders-row-col4">
                                            <strong>82422489</strong>
                                        </div>
                                        <div className="orders-row-col4">
                                            <strong>27/05/2019</strong>
                                        </div>
                                        <div className="orders-row-col4">
                                            <div>
                                                <img  alt="Fresh Day" src={shoplogo}/>
                                                <span>Fresh Day</span>
                                            </div>
                                        </div>
                                        <div className="orders-row-col5">
                                            <div>1x Club sandwich κλασικό</div>
                                            <div>1x Κρέπα Merenda</div>
                                            <div>1x Coca-Cola zero 330ml</div>
                                        </div>
                                        <div className="orders-row-col6">
                                            <div>6,70€</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="orders-row">
                                        <div className="orders-row-col4">
                                            <strong>82422489</strong>
                                        </div>
                                        <div className="orders-row-col4">
                                            <strong>27/05/2019</strong>
                                        </div>
                                        <div className="orders-row-col4">
                                            <div>
                                                <img  alt="Fresh Day" src={shoplogo}/>
                                                <span>Fresh Day</span>
                                            </div>
                                        </div>
                                        <div className="orders-row-col5">
                                            <div>1x Club sandwich κλασικό</div>
                                            <div>1x Κρέπα Merenda</div>
                                            <div>1x Coca-Cola zero 330ml</div>
                                        </div>
                                        <div className="orders-row-col6">
                                            <div>6,70€</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="orders-row">
                                        <div className="orders-row-col4">
                                            <strong>82422489</strong>
                                        </div>
                                        <div className="orders-row-col4">
                                            <strong>27/05/2019</strong>
                                        </div>
                                        <div className="orders-row-col4">
                                            <div>
                                                <img  alt="Fresh Day" src={shoplogo}/>
                                                <span>Fresh Day</span>
                                            </div>
                                        </div>
                                        <div className="orders-row-col5">
                                            <div>1x Club sandwich κλασικό</div>
                                            <div>1x Κρέπα Merenda</div>
                                            <div>1x Coca-Cola zero 330ml</div>
                                        </div>
                                        <div className="orders-row-col6">
                                            <div>6,70€</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="orders-row">
                                        <div className="orders-row-col4">
                                            <strong>82422489</strong>
                                        </div>
                                        <div className="orders-row-col4">
                                            <strong>27/05/2019</strong>
                                        </div>
                                        <div className="orders-row-col4">
                                            <div>
                                                <img  alt="Fresh Day" src={shoplogo}/>
                                                <span>Fresh Day</span>
                                            </div>
                                        </div>
                                        <div className="orders-row-col5">
                                            <div>1x Club sandwich κλασικό</div>
                                            <div>1x Κρέπα Merenda</div>
                                            <div>1x Coca-Cola zero 330ml</div>
                                        </div>
                                        <div className="orders-row-col6">
                                            <div>6,70€</div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="orders-row">
                                        <div className="orders-row-col4">
                                            <strong>82422489</strong>
                                        </div>
                                        <div className="orders-row-col4">
                                            <strong>27/05/2019</strong>
                                        </div>
                                        <div className="orders-row-col4">
                                            <div>
                                                <img  alt="Fresh Day" src={shoplogo}/>
                                                <span>Fresh Day</span>
                                            </div>
                                        </div>
                                        <div className="orders-row-col5">
                                            <div>1x Club sandwich κλασικό</div>
                                            <div>1x Κρέπα Merenda</div>
                                            <div>1x Coca-Cola zero 330ml</div>
                                        </div>
                                        <div className="orders-row-col6">
                                            <div>6,70€</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
