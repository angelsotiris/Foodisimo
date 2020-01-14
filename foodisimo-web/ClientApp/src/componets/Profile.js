import React, { Component } from 'react'

import '../css/Profile.css';
import user from "../images/user.png";

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.user = JSON.parse(localStorage.getItem("user"))
        this.state = {   
            fields: {["surName"]:this.user["surName"],["name"]:this.user["name"],["address"]:this.user["address"]["addressTitle"]},
            errors: {},
            profilestatus:"",
            passwordstatus:""
        };
    }
    handleValidationProfile(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
            //name
            if(!fields["name"]){
                formIsValid = false;
                errors["name"] = "Cannot be empty";
            }
            //address
            if(!fields["address"]){
                formIsValid = false;
                errors["address"] = "Cannot be empty";
            }
       
       this.setState({errors: errors});
       return formIsValid;
   }
    handleChangeProfile(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
    profileSubmit(e){
        e.preventDefault();
        if(this.handleValidationProfile()){     
            this.setState({profilestatus:"Άλλαξαν τα στοιχεία σου"});
        }else{
            this.setState({profilestatus:""});
        }
    }
    handleValidationPassword(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
            //current-pass
            if(!fields["current-pass"]){
                formIsValid = false;
                errors["current-pass"] = "Cannot be empty";
            }
            //new-pass
            if(!fields["new-pass"]){
                formIsValid = false;
                errors["new-pass"] = "Cannot be empty";
            }
       
       this.setState({errors: errors});
       return formIsValid;
   }
    handleChangePassword(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
    passwordSubmit(e){
        e.preventDefault();
        if(this.handleValidationPassword()){     
            this.setState({passwordstatus:"Ο κωδικός άλλαξε"});
        }else{
            this.setState({passwordstatus:""});
        }
     }
    render() {
        return (
            this.props.currentpage ?
                <div className="profile">
                    <div className="profile-container">
                        <div className="profile-container-center">
                            <div className="profile-user">
                                <div className="profile-user-container">
                                    <img alt="user-icon" src={user}/>
                                    <h2>{this.user["name"]}</h2>
                                </div>
                            </div>
                            <div className="profile-info">
                                    <div className="profile-info-container">
                                        <div className="profile-info-container-top">
                                            <h2>Τα στοιχεία σου</h2>
                                        {/*<p>Θέλεις να αλλάξεις κάτι; Μην ξεχάσεις να πατήσεις "Αποθήκευση αλλαγών" στο τέλος της φόρμας.</p>*/}
                                        </div>
                                        <div className="profile-row">
                                            <div className="profile-row-col">
                                                <form method="post" encType="text/plain" onSubmit= {this.profileSubmit.bind(this)}>
                                                    <div className="profile-row">
                                                        <div className="profile-row-input">
                                                            <div className="form-group">
                                                            <label>Όνομα</label>
                                                            <input disabled type="text" name="Name" onChange={this.handleChangeProfile.bind(this, "name")} value={this.state.fields["name"] + " " + this.state.fields["surName"]}/>
                                                            <span className="login-error">{this.state.errors["name"]}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="profile-row">
                                                        <div className="profile-row-input">
                                                            <div className="form-group">
                                                            <label>email</label>
                                                            <input disabled style={{ backgroundColor: "#e9ecef" }} type="text" id="email" value={this.user["email"]} readOnly="readonly"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="profile-row">
                                                        <div className="profile-row-input">
                                                            <div className="form-group">
                                                            <label>Διεύθυνση</label>
                                                            <input disabled type="text" name="Address" onChange={this.handleChangeProfile.bind(this, "address")} value={this.state.fields["address"]}  />
                                                            <span className="login-error">{this.state.errors["address"]}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span style={{color:"#ffc200",fontSize:"14px"}}>{this.state.profilestatus}</span>
                                                    <div className="profile-row">
                                                        <div className="profile-row-input">
                                                        {/*<button type="submit" name="submit">Αποθήκευση αλλαγών</button>*/}
                                                        </div>
                                                    </div>
                                                </form> 
                                            </div>
                                        </div>
                                    </div>
                                {/*<div className="profile-info-container">
                                        <div className="profile-info-container-top">
                                            <h2>Αλλαγή κωδικού</h2>
                                        </div>
                                        <div className="profile-row">
                                            <div className="profile-row-col">
                                                <form method="post" encType="text/plain" onSubmit= {this.passwordSubmit.bind(this)}>
                                                    <div className="profile-row">
                                                        <div className="profile-row-input">
                                                            <div className="form-group">
                                                            <label>Τρέχων κωδικός</label>
                                                            <input type="password" name="Current-pass" onChange={this.handleChangePassword.bind(this, "current-pass")} value={this.state.fields["current-pass"]} />
                                                            <span className="login-error">{this.state.errors["current-pass"]}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="profile-row">
                                                    <div className="profile-row-input">
                                                            <div className="form-group">
                                                            <label>Νέος κωδικός</label>
                                                            <input type="password" name="new-pass" onChange={this.handleChangePassword.bind(this, "new-pass")} value={this.state.fields["new-pass"]} />
                                                            <span className="login-error">{this.state.errors["new-pass"]}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="profile-row">
                                                        <div className="profile-row-input">
                                                        <p>Ο κωδικός σου πρέπει να είναι τουλάχιστον 8 χαρακτήρες και να περιλαμβάνει τουλάχιστον έναν αριθμό, ένα κεφαλαίο και ένα μικρό γράμμα.</p>
                                                        <br/>
                                                        <span style={{color:"#ffc200",fontSize:"14px"}}>{this.state.passwordstatus}</span>
                                                            <button type="submit" name="submit1">Αποθήκευση αλλαγών</button>
                                                        </div>
                                                    </div>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <div  className="profile-row">
                                                        <div className="profile-row-input">
                                                            <h3>Διαγραφή λογαριασμού:</h3>
                                                            <p>Μπορείς να διαγράψεις το λογαριασμό σου, αλλά θα πρέπει να γνωρίζεις ότι αυτή η ενέργεια δεν είναι αναστρέψιμη. Εαν αλλάξεις γνώμη μετά τη διαγραφή σου, θα πρέπει να δημιουργήσεις λογαριασμό εκ νέου. Εαν θέλεις να διαγραφεί ο λογαριασμός σου, πάτα το κουμπί παρακάτω.</p>
                                                            <button style={{fontSize:".85rem",width: "130%",border:"1px solid #dfdfdf",backgroundColor:"#fff"}} type="button">Διαγραφή του λογαριασμού μου</button>
                                                        </div>
                                                    </div>
                                                </form> 
                                            </div>
                                        </div>
                                    </div>*/}
                                </div>
                        </div>
                    </div>
                </div>
            :
                null
        )
    }
}
