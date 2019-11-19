import React, { Component } from 'react'

import Navbar from "../componets/Navbar";
import Address from "../componets/Address";
import Offers from "../componets/Offers";
import Stores from "../componets/Stores";
import HomeInfo from "../componets/HomeInfo";
import Footer from "../componets/Footer";
import Login from '../componets/Login';

class Home extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>  
                <Navbar/>
                <Address/>
                <Offers/>
                <Stores/>
                <HomeInfo/>
                <Footer/>
            </>
        );
    }
}
export default Home;