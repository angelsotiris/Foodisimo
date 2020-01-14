import React, { Component } from 'react'

import '../css/Shops.css';
import ShopsSearch from "../componets/ShopsSearch";
import AddressValue from "../AddressValue";
import CartValue from "../CartValue";
class Shops extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
        CartValue.ChangeValue([],0);
    }
    render() {
        return (
            <div> 
                <div className="shops-top"> 
                   <div className="shops-top-container">
                        <div className="shops-top-container-center">
                            <div className="shops-top-container-center-col">
                                <h1>Βρήκαμε 244 καταστήματα</h1>
                                <span className="shops-top-address">
                                    <span>
                                        για delivery στην
                                    </span>
                                    <span>{AddressValue.getAddressValue()}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <ShopsSearch/>
            </div>
        );
    }
}
export default Shops;