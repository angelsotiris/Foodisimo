import React, { Component } from 'react'

import '../css/Login.css';


export default class Login extends Component {
    constructor(props) {
        super(props)
        
        this.registerToggle = this.registerToggle.bind(this);

        this.buttonname="Κάνε σύνδεση";
        this.loginerror="";
        this.state = {
            isOpenRegister: false,
            isOpenForgot: false,       
            fields: {},
            errors: {},
           
        };
    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if(this.buttonname==="Κάνε σύνδεση"){
            //Email
            if(!fields["email"]){
                formIsValid = false;
                errors["email"] = "Required Email";
            }
    
            if(typeof fields["email"] !== "undefined"){
                if(!fields["email"].match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                formIsValid = false;
                errors["email"] = "Only emails";
                }        
            } 

            if(typeof fields["email"] !== "undefined"){
                if(fields["email"][0].match(/^\s+$/)){
                formIsValid = false;
                errors["email"] = "Required Email";
                }        
            }
            
            //password
            if(!fields["password"]){
                formIsValid = false;
                errors["password"] = "Cannot be empty";
            }
            
        }else if(this.buttonname=== "Εγγραφή"){
            //Email
            if(!fields["email"]){
                formIsValid = false;
                errors["email"] = "Required Email";
            }
    
            if(typeof fields["email"] !== "undefined"){
                if(!fields["email"].match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                formIsValid = false;
                errors["email"] = "Only emails";
                }        
            } 

            if(typeof fields["email"] !== "undefined"){
                if(fields["email"][0].match(/^\s+$/)){
                formIsValid = false;
                errors["email"] = "Required Email";
                }        
            }
            //password
            if(!fields["password"]){
                formIsValid = false;
                errors["password"] = "Cannot be empty";
            }
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
        }else{
            //Email
            if(!fields["email"]){
                formIsValid = false;
                errors["email"] = "Required Email";
            }
    
            if(typeof fields["email"] !== "undefined"){
                if(!fields["email"].match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                formIsValid = false;
                errors["email"] = "Only emails";
                }        
            } 

            if(typeof fields["email"] !== "undefined"){
                if(fields["email"][0].match(/^\s+$/)){
                formIsValid = false;
                errors["email"] = "Required Email";
                }        
            }
        }
       
       this.setState({errors: errors});
       return formIsValid;
   }
    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
    loginSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){     
            let fields = this.state.fields; 
            if(this.buttonname==="Κάνε σύνδεση"){
                if(fields["email"]==="as@gmail.com" && fields["password"]==="1"){
                    this.props.action2(true);
                }else{
                    this.props.action2(false);
                    this.loginerror="Λάθος κωδικός"
                }
            }else if(this.buttonname==="Αποστολή"){
                if(fields["email"]==="as@gmail.com"){
                    this.props.action();
                }else{
                    this.loginerror="Λάθος email";
                }
            }else{
                if(fields["email"]==="as@gmail.com"){ 
                    this.loginerror="Το email υπάρχει"
                }else{
                    this.props.action(); 
                    window.location.href = "/";
                }
            }
        }
     }
    registerToggle  = ()=> {
        this.setState({ isOpenRegister: !this.state.isOpenRegister, errors: {}  });  
    };
    forgotpassToggle = () =>{
        this.setState({ isOpenForgot: !this.state.isOpenForgot, errors: {}  }); 
    }
    buttonName = () =>{
        if(this.state.isOpenForgot){
            this.buttonname="Αποστολή";
            if(this.loginerror==="Λάθος κωδικός" || this.loginerror==="Το email υπάρχει"){
                this.loginerror="";
            }
        }else{
            if(this.state.isOpenRegister){
                this.buttonname= "Εγγραφή";
                if(this.loginerror==="Λάθος κωδικός" || this.loginerror==="Λάθος email"){
                    this.loginerror="";
                }
             }else{
                if(this.loginerror==="Λάθος email" || this.loginerror==="Το email υπάρχει" ){
                    this.loginerror="";
                }
                this.buttonname= "Κάνε σύνδεση";
            }
        }
    }
    render() {
        this.buttonName();
        return (
           this.props.opened ?
                <div style={this.props.opened ? {display:"block"} : {display:"none"}} className="login-register">
                    <div className="login-register-container">
                        <div className="login-register-container-dialog">
                            <div className="login-register-header">
                                <div className="login-register-header-container">
                                    <h2>
                                        <strong>{this.state.isOpenForgot ? "Υπευνθύμιση κωδικού" : "Είσοδος στο efood"} </strong>
                                    </h2>
                                    <button  onClick={() => this.props.action()}>
                                        <span>Χ</span>
                                    </button>
                                </div>
                                <ul style={this.state.isOpenForgot ? {display:"none"} : {display:"flex"}}>
                                    <li className={this.state.isOpenRegister ? "login-register-header-closed" : "login-register-header-opened"}>
                                        <a className={this.state.isOpenRegister ? "" : "login-register-header-a-opened"} onClick={this.registerToggle} href="/#">Σύνδεση</a>
                                    </li>
                                    <li className={this.state.isOpenRegister ? "login-register-header-opened" : "login-register-header-closed"}>
                                        <a className={this.state.isOpenRegister ? "login-register-header-a-opened" : ""} onClick={this.registerToggle} href="/#">Εγγραφή</a>
                                    </li>
                                </ul>
                            </div>  
                            <p style={this.state.isOpenForgot ? {display:"block"} : {display:"none"}} className="forgot-p">Θα σου στείλουμε ένα e-mail για να ορίσεις ένα νέο κωδικό πρόσβασης</p>
                            <div className="login-register-main">
                                <div>
                                    <div>
                                        <form method="post" encType="text/plain" onSubmit= {this.loginSubmit.bind(this)}>
                                            <div className="login-email">
                                                <div style={this.state.isOpenRegister ? {display:"block"} : {display:"none"}}>
                                                    <input type="text" name="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} placeholder="Το Ονομά σου"/>
                                                    <span className="login-error">{this.state.errors["name"]}</span>
                                                </div>
                                                <div  style={this.state.isOpenRegister ? {display:"block"} : {display:"none"}}>
                                                    <input type="text" name="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]} placeholder="H Διεύθυνσή σου"/>
                                                    <span className="login-error">{this.state.errors["address"]}</span>
                                                </div>
                                                <div>
                                                    <input type="text" name="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} placeholder="Το Email σου" autoComplete="email"/>
                                                    <span className="login-error">{this.state.errors["email"]}</span>
                                                </div>                                           
                                            </div>
                                            <div style={this.state.isOpenForgot ? {display:"none"} : {display:"block"}} className="login-password">
                                                <div>
                                                    <input type="password"  placeholder="Ο κωδικός σου" name="Password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
                                                </div>
                                                <span className="login-error">{this.state.errors["password"]}</span>
                                                <small style={this.state.isOpenRegister ? {display:"block"} : {display:"none"}}>Ο κωδικός σου πρέπει να είναι τουλάχιστον 8 χαρακτήρες και να περιλαμβάνει τουλάχιστον έναν αριθμό, ένα κεφαλαίο και ένα μικρό γράμμα.</small>
                                            </div>
                                            <span className="login-error">{this.loginerror}</span>
                                            <button className="login-button" id="submit" value="Submit">{this.buttonname}</button>
                                        </form>
                                        <button  onClick={this.forgotpassToggle}  style={this.state.isOpenRegister ? {display:"none"} : {display:"block"}} className="login-button-forgot" type="button"><u>{this.state.isOpenForgot ? "Πίσω στην σύνδεση" : "Ξέχασα τον κωδικό μου"}</u></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            :
                null
        )
    }
}
