import React, { Component } from 'react'

import {Link} from "react-router-dom";
import CartValue from "../CartValue";
import '../css/Error.css';

class Error extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
        CartValue.ChangeValue([],0);
    }
    render() {
        return (
            <>  
                <div className="error">
                    <div className="error-container">
                        <h1>404</h1>
                        <h2>404 - Δεν βρήκαμε τη σελίδα :(</h2>
                        <Link to="/">
                            Πάμε στην αρχική σελίδα                
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}
export default Error;