import React, { Component } from 'react'

import '../css/ShopMenu.css';
import shoplogo from "../images/shop-logo.png";
import MenuCart from "../componets/MenuCart";

class ShopMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shop_data: null
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentWillMount() {
        let url_string = window.location.href;
        let url = new URL(url_string);
        let id = url.searchParams.get("id");
        fetch('https://localhost:5001/shop/menu/' + id).then(res => res.json()).then(res => this.setState({shop_data: res}))
    }
    render() {
        let url_string = window.location.href;
        let url = new URL(url_string);
        let id = url.searchParams.get("id");
        return this.state.shop_data != null ? (<div>
            <div className="shopmenu-top">
                <div className="shopmenu-top-container">
                    <div className="shopmenu-top-container-center">
                        <div className="shopmenu-top-row">
                            <div className="shopmenu-top-row-col">
                                <div className="shopmenu-top-row-col-container">
                                    <div className="shopmenu-top-row-col-container-top">
                                        <div>
                                            <div className="shopmenu-top-row-col-container-top-img">
                                                <img alt="shop-logo" src={require('../images/' + id + '.png')} />
                                            </div>
                                        </div>
                                        <div className="shopmenu-top-row-col-container-top-info">
                                            <h1>{this.state.shop_data["name"]}</h1>
                                            <span>{this.state.shop_data["address"]}</span>
                                        </div>
                                    </div>
                                    <div className="shopmenu-top-row-col-container-bottom">
                                        <div className="shopmenu-top-row-col-container-bottom-category">
                                            <span>{this.state.shop_data["categories"].map(el=>el["name"]).join(", ")}</span>
                                        </div>
                                        <div className="shopmenu-top-row-col-container-bottom-info">
                                            <div>
                                                <div>
                                                    <span>Ελάχιστη {this.state.shop_data["minOrder"]}€</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>Παράδοση {this.state.shop_data["deliveryTime"]}'</span>
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
            <MenuCart shop_data={this.state.shop_data} />
        </div>) : null
    }
}
export default ShopMenu;