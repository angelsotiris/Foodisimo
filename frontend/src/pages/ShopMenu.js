import React, { Component } from 'react'

import '../css/ShopMenu.css';
import shoplogo from "../images/shop-logo.png";
import MenuCart from "../componets/MenuCart";

class ShopMenu extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <div className="shopmenu-top">
                    <div className="shopmenu-top-container">
                        <div className="shopmenu-top-container-center">
                            <div className="shopmenu-top-row">
                                <div className="shopmenu-top-row-col">
                                    <div className="shopmenu-top-row-col-container">
                                        <div className="shopmenu-top-row-col-container-top">
                                            <div>
                                                <div className="shopmenu-top-row-col-container-top-img">
                                                    <img alt="shop-logo" src={shoplogo} />
                                                </div>
                                            </div>
                                            <div className="shopmenu-top-row-col-container-top-info">
                                                <h1> Ποιοτική ζύμη &amp; γεύση (Μπότσαρη) - Ανάληψη</h1>
                                                <span>Μάρκου Μπότσαρη 86, Ανάληψη</span>
                                            </div>
                                        </div>
                                        <div className="shopmenu-top-row-col-container-bottom">
                                            <div className="shopmenu-top-row-col-container-bottom-category">
                                                <span>Κρέπες</span>
                                            </div>
                                            <div className="shopmenu-top-row-col-container-bottom-info">
                                                <div>
                                                    <div>
                                                        <span>Ελάχιστη 4€</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div>
                                                        <span>Παράδοση 29'</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuCart/>
            </div>
        );
    }
}
export default ShopMenu;