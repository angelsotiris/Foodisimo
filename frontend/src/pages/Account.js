import React, { Component } from 'react'

import '../css/Account.css';
import {Link} from "react-router-dom";
import Profile from "../componets/Profile";
import MyOrders from "../componets/MyOrders";
import CartValue from "../CartValue";

class Account extends Component {
    constructor(props) {
        super(props)
        this.state={
            slug:""
        }
    }
    componentDidUpdate() {
        if (this.props.match.params.slug !== this.state.slug) {
            this.componentDidMount();
        }
      }
    componentDidMount(){
        if(this.props.match.params.slug==="view" || this.props.match.params.slug==="orders"){
            this.setState({
                slug: this.props.match.params.slug
             });
        }else{
            window.location.href = "/error";
        }
        window.scrollTo(0, 0);
        CartValue.ChangeValue([],0);
    }
    render() {
        return (
            <>  
                <div className="account-top"> 
                   <div className="account-top-container">
                        <div className="account-top-container-center">
                            <div className="account-top-container-center-col">
                                <h1>Ο λογαριασμός μου</h1>
                                <div className="account-top-links">
                                    <ul>
                                        <li>
                                            <Link className={this.state.slug==="view" ? "link-actived" : ""}  to="/account/view">
                                                Προφίλ
                                            </Link>
                                            </li>
                                        <li>
                                            <Link className={this.state.slug==="orders" ? "link-actived" : ""} to="/account/orders">
                                                    Παραγγελίες
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Profile currentpage={this.state.slug==="view"}/>
                <MyOrders currentpage={this.state.slug==="orders"}/>
            </>
        );
    }
}
export default Account;