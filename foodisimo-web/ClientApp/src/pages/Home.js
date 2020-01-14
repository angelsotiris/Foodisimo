import React, { Component } from 'react'

import Address from "../componets/Address";
import Offers from "../componets/Offers";
import Stores from "../componets/Stores";
import HomeInfo from "../componets/HomeInfo";
import CartValue from "../CartValue";

class Home extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
        CartValue.ChangeValue([],0)
    }
    render() {
        return (
            <>  
                <Address/>
                <Offers/>
                <Stores/>
                <HomeInfo/>
            </>
        );
    }
}
export default Home;