import React, { Component } from 'react'

import '../css/Navbar.css';

import {Link} from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-container-logo">
                        <Link to='/'>
                            <div className="logo-image"/>
                        </Link>
                    </div>
                    <div className="navbar-container-login">
                        <button>
                            <strong>Σύνδεση/Εγγραφή</strong>
                        </button>     
                    </div>
                </div>
            </nav>
        )
    }
}
