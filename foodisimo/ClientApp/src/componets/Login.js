import React, { Component } from 'react'

import '../css/Login.css';

import {Link} from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
            <div className="login-register">
                <div className="login-register-container">
                    <div className="login-register-container-dialog">
                        <div className="login-register-header">
                            <div className="login-register-header-container">
                                <h2>
                                    <strong>Είσοδος στο efood</strong>
                                </h2>
                                <button>
                                    <span>x</span>
                                </button>
                            </div>
                            <ul>
                                <li>
                                    <span>Σύνδεση</span>
                                </li>
                                <li>
                                    <span>Εγγραφή</span>
                                </li>
                            </ul>
                        </div>  
                        <div className="login-register-main">
                            <div>
                                <div>
                                    <form>
                                        <div className="login-email">
                                            <div>
                                                <input type="email" name="email"  placeholder="Το Email σου" autocomplete="email"/>
                                            </div>
                                        </div>
                                        <div className="login-password">
                                            <div>
                                                <input type="password" name="password" placeholder="Ο κωδικός σου"/>
                                            </div>
                                        </div>
                                        <button className="login-button" type="submit">Κάνε σύνδεση</button>
                                    </form>
                                    <button  className="login-button-forgot" type="button"><u>Ξέχασα τον κωδικό μου</u></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
