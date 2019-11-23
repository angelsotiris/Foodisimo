import React, { Component } from 'react'

import '../css/Navbar.css';

import {Link} from "react-router-dom";
import Login from './Login';

import user from "../images/user.png";
import LoginValue from "../LoginValue";

export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.loginToggle = this.loginToggle.bind(this);
        this.loggedin = this.loggedin.bind(this);
        let firsttime;
        if(LoginValue.getLoginValue()===true || LoginValue.getLoginValue()===false){
            firsttime=LoginValue.getLoginValue();
        }else{
            firsttime=false;
        }
        this.state = {
            isOpenLogin: false,
            isOpenMenu: false,
            loggedin: firsttime
        };
    }
    
    loginToggle = () => {
        this.setState({ isOpenLogin: !this.state.isOpenLogin });      
    };
    loggedin =(value) =>{
        if(value===true){
            LoginValue.ChangeValue(true);
            this.setState({ isOpenLogin: !this.state.isOpenLogin,loggedin:LoginValue.getLoginValue()});
            
        }
    }
    usermenuToggle = () => {
        this.setState({ isOpenMenu: !this.state.isOpenMenu });
    }
    dissconectToggle = () =>{
        localStorage.clear();
        LoginValue.ChangeValue(false);
        this.setState({ isOpenLogin: false,isOpenMenu:false,loggedin:LoginValue.getLoginValue() }); 
    }
    render() {
        
        console.log(this.state.loggedin);
        return (
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-container-logo">
                        <Link to='/'>
                            <div className="logo-image"/>
                        </Link>
                    </div>
                    <div className="navbar-container-login">
                        <button style={this.state.loggedin ? {display:"none"} : {display:"block"}} onClick={this.loginToggle}>
                            <strong>Σύνδεση/Εγγραφή</strong>
                        </button>    
                        <div style={this.state.loggedin ? {display:"block"} : {display:"none"}} className="acccount">
                            <a onClick={this.usermenuToggle} className="account-container" >
                                <div className="account-image">
                                    <img alt="user-icon" src={user}/>
                                </div>
                                <div className="account-name">
                                    <span>
                                        <strong>Βαγγέλης</strong>
                                    </span>
                                </div>
                            </a>
                            <div style={this.state.isOpenMenu ? {display:"block"} : {display:"none"}} className="account-menu">
                            <ul>
                                <li>
                                    <Link onClick={this.usermenuToggle} to="/account/view" title="Ο λογαριασμός μου">
                                        Ο λογαριασμός μου                    
                                    </Link>
                                </li>
                                <li>
                                    <Link  onClick={this.usermenuToggle} to="/account/orders" title="Οι παραγγελίες μου">
                                        Οι παραγγελίες μου                    
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={this.dissconectToggle} to="/">
                                        Αποσύνδεση                    
                                    </Link>
                                </li>
                            </ul>
                            </div>
                        </div> 
                    </div>
                </div>
                <Login action2={this.loggedin} action={this.loginToggle} opened={this.state.isOpenLogin} />
            </nav>
        )
    }
}
