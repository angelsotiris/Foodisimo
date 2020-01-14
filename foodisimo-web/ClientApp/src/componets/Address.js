import React, { Component } from 'react'

import '../css/Address.css';
import cocacola from "../images/cocacola.png";
import AddressValue from "../AddressValue";
import LoginValue from "../LoginValue";

export default class Address extends Component {
    constructor(props) {
        super(props)

        this.addressMethod = this.addressMethod.bind(this);
        let firsttime;
        console.log(LoginValue.getLoginValue());
        if(LoginValue.getLoginValue()===true){
            firsttime=AddressValue.getAddressValue();
        }else{
            firsttime=false;
        }
        this.state = {
            address: firsttime,
            errors: {},
        };
    }
    addressMethod = () =>{
        let errors = {};
        if(LoginValue.getLoginValue()===true ){
            this.setState({errors: errors}); 
            window.location.href = "/shops";
        }else{
            errors["address"] = "You must login first";
            this.setState({errors: errors});
        }
    }
    render() {
        console.log(this.state.address);
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
                                                        <input readonly="readonly"  type="text" name="Address"  value={this.state.address===false ? "" : this.state.address} placeholder={this.state.address===false ? "Συνδέσου με τον λογαρισμό σου"  : this.state.address}/>
                                                    </div>
                                                    <div className="search-button">
                                                        <button onClick={this.addressMethod} type="button">Παράγγειλε τώρα</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <span style={{paddingTop:"0.45rem",paddingLeft:"4rem",position:"absolute"}} className="login-error">{this.state.errors["address"]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
