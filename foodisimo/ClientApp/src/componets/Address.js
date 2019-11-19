import React, { Component } from 'react'

import '../css/Address.css';
import cocacola from "../images/cocacola.png";

import {Link} from "react-router-dom";

export default class Address extends Component {
    render() {
        return (
            <div className="address-icon">
                <div className="address-icon-container">
                    <div className="icon">
                        <div className="icon-container">
                            <div className="icon-container-cocacola">
                            <img alt="Coca-Cola Taste the feeling"  src={cocacola} style={{width:"87px",height:"81px"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="address">
                    <div className="address-container">
                        <div className="address-container-col">
                            <div className="address-container-col-search">
                                <div className="address-container-col-search-container">
                                    <div className="search-info">
                                        <h1> Παράγγειλε 
                                            <span className="search-info-span">
                                                <div>
                                                    <span>Σουβλάκι</span>
                                                    <span>Καφέ</span>
                                                    <span>Pizza</span>
                                                    <span>Burger</span>
                                                    <span>Κρέπα</span>
                                                    <span>Κινέζικο</span>
                                                    <span>Ιταλικό</span>
                                                    <span>Sushi</span>
                                                    <span>Delivery</span>
                                                </div>
                                            </span>
                                            <br/>
                                            <span>online σε 1'</span>
                                        </h1>
                                        <p> 500 καταστήματα, 60 πόλεις. Πλήρωσε με πιστωτική / χρεωστική κάρτα, μετρητά ή PayPal</p>
                                    </div>
                                    <div className="search-form">
                                        <form>
                                            <div className="search-form-box" >
                                                <div className="search-form-box-outer">
                                                    <div className="search-form-box-outer-preinput">
                                                        <span className="search-icon"></span>
                                                        <input type="text" placeholder="Βάλε τη διεύθυνσή σου"></input>
                                                    </div>
                                                    <span  className="example">π.χ. Διονύσου 48, Μαρούσι</span>
                                                    <div className="search-button">
                                                        <button type="button">Παράγγειλε τώρα</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
