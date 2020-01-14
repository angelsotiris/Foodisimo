import React, { Component } from 'react'

import '../css/MyOrders.css';
import shoplogo from "../images/shop-logo.png";


export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            order_data: null
        }
    }

    componentWillMount() {
        let userId = JSON.parse(localStorage.getItem("user"))["id"];
        fetch('https://localhost:5001/order/user/' + userId)
        .then(res => res.json())
        .then((res) => {
            this.setState({ order_data: res })
        })
    }

    getOrders() {
        return this.state.order_data.map((order) => {
            let items = order["orderItems"].map((item) => {
                let quantity = item["quantity"]
                let name = item["productName"]
                return (<div>{quantity}x {name}</div>)
            })
            return (
                < li >
                    <div className="orders-row">
                        <div className="orders-row-col4">
                            <strong>{order["id"]}</strong>
                        </div>
                        <div className="orders-row-col4">
                            <strong>{order["createdAt"]}</strong>
                        </div>
                        <div className="orders-row-col4">
                            <div>
                                <img alt="shop-logo" src={require('../images/' + order["shopId"] + '.png')} />
                                <span>{order["shopName"]}</span>
                            </div>
                        </div>
                        <div className="orders-row-col5">
                            {items}
                        </div>
                        <div className="orders-row-col6">
                            <div>{order["total"]}€</div>
                        </div>
                    </div>
                </li >)
        })
           
    }
     
    render() {
        
        return this.state.order_data != null && this.props.currentpage ? (<div className="orders">
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
                                    {this.getOrders()}                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>) :  null
        
    }
}
