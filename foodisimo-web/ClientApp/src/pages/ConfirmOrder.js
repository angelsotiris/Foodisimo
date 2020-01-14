import React, { Component } from 'react'

import '../css/ConfirmOrder.css';
import {FaMapMarkerAlt} from 'react-icons/fa';
import CartValue from "../CartValue";
import AddressValue from "../AddressValue";
class ConfirmOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {      
            fields: {},
            errors: {},
            cart:CartValue.getCartValue(),
            cartTimi:CartValue.getSinolikiTimiValue(),
            address:AddressValue.getAddressValue()
        };
    }
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
            //lastname
            if(!fields["orofos"]){
                formIsValid = false;
                errors["orofos"] = "Cannot be empty";
            }
            //name
            if(!fields["name"]){
                formIsValid = false;
                errors["name"] = "Cannot be empty";
            }
            //tilefono
            if(!fields["tilefono"]){
                formIsValid = false;
                errors["tilefono"] = "Cannot be empty";
            }
       
       this.setState({errors: errors});
       return formIsValid;
   }
    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
    confirmSubmit(e) {
        e.preventDefault();        
        if(this.handleValidation()){     
            let fields = this.state.fields;
            let user_id = JSON.parse(localStorage.getItem("user"))["id"]
            let doorbell_name = fields["name"]
            let floor = fields["orofos"]
            let phone = fields["tilefono"]
            let notes = fields["message"]
            let total = this.state.cartTimi;
            let items = this.state.cart.map((item) => {
                return { "productName": item["onoma"], "quantity": item["posotita"] }
            })
            let url_string = window.location.href;
            let url = new URL(url_string);
            let shopId = url.searchParams.get("id");
            fetch('https://localhost:5001/order', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    "userId": user_id,
                    "shopId": parseInt(shopId),
                    "doorbellName": doorbell_name,
                    "floor": parseInt(floor),
                    "phone": phone,
                    "notes": notes,
                    "orderItems": items,
                    "total": total
                })
            }
            ).then((res) => {
                window.location.href = "/";
                window.alert("ΟΚ")
            }).catch((err) => {
                window.alert("SFALMA")
            })
        }
     }
    render() {
        var cartItems = this.state.cart.map(item =>{ 
            return (
                <div key={item.key}  className="confirmorder-bottom-container-col2-item">
                    <div className="confirmorder-bottom-container-col2-item-info">
                        <strong>{item.onoma}</strong>
                    </div>
                    <div className="confirmorder-bottom-container-col2-item-container">
                            <span>
                                <strong>{item.posotita}x</strong>
                            </span>
                            <span>
                                <strong>{item.timi}€</strong>
                            </span>
                    </div>
                </div>
            );
        });
        return (
            <div>
                <div className="account-top"> 
                   <div className="account-top-container">
                        <div className="account-top-container-center">
                        </div>
                    </div>
                </div>
                <div className="confirmorder">
                    <section>
                        <div className="confirmorder-top">
                            <div className="confirmorder-top-header">
                                <h1>
                                    Ολοκλήρωση
                                    <br/>
                                    Παραγγελίας
                                </h1>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div  className="confirmorder-bottom">
                            <div className="confirmorder-bottom-container">
                                <div className="confirmorder-bottom-container-col">
                                    <div className="confirmorder-bottom-container-col-shadow">
                                        <h2>1. Στοιχεία Παραγγελίας</h2>
                                        <div className="confirmorder-bottom-container-col-address">
                                            <div>
                                                <FaMapMarkerAlt className="map-marker"/>
                                            </div>
                                            <p>
                                                <strong>Διεύθυνση</strong>
                                                {this.state.address}
                                            </p>
                                        </div>
                                        <form>
                                            <div className="confirmorder-bottom-container-col-formgroup">
                                                <label>Όνομα στο κουδούνι </label>
                                                <input type="text" name="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} placeholder="Όνομα στο κουδούνι"/>
                                                <span className="login-error">{this.state.errors["name"]}</span>
                                            </div>
                                            <div className="confirmorder-bottom-container-col-row">
                                                <div className="confirmorder-bottom-container-col-row-left">
                                                    <div>
                                                        <label>Όροφος </label>
                                                        <input type="text" name="Orofos" onChange={this.handleChange.bind(this, "orofos")} value={this.state.fields["orofos"]} placeholder="π.χ. 1ος"/>
                                                        <span className="login-error">{this.state.errors["orofos"]}</span>
                                                    </div>
                                                </div>
                                                <div className="confirmorder-bottom-container-col-row-right">
                                                    <div>
                                                        <label>Προαιρετικό τηλ. επικοινωνίας </label>
                                                        <input type="text" name="Tilefono" onChange={this.handleChange.bind(this, "tilefono")} value={this.state.fields["tilefono"]}  placeholder="π.χ. 69xxxxxxxx"/>
                                                        <span className="login-error">{this.state.errors["tilefono"]}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="confirmorder-bottom-container-col-formgroup">
                                                <label>Σχόλια διεύθυνσης</label>
                                                <textarea  name="Message" onChange={this.handleChange.bind(this, "message")} value={this.state.fields["message"]}  placeholder="Π.χ. Καλέστε στο τηλέφωνο αντί να χτυπήσετε κουδούνι."/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div  className="confirmorder-bottom-container-col2">
                                    <div className="confirmorder-bottom-container-col2-shadow">
                                        <div>
                                            <div>
                                                <div className="confirmorder-bottom-container-col2-header">
                                                    <span>2.</span>
                                                    <h3>Ολοκλήρωση</h3>
                                                    <div className="confirmorder-bottom-container-col2-header-container">
                                                        <div>
                                                            <div>Κόστος</div>
                                                            <div>{this.state.cartTimi}</div>
                                                        </div>
                                                        <button onClick={this.confirmSubmit.bind(this)}>Αποστολή Παραγγελίας</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    {cartItems}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
export default ConfirmOrder;