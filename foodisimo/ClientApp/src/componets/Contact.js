import React, { Component } from 'react'

import '../css/Contact.css';


class Contact extends Component {
    constructor(props) {
        super(props)
        
        this.state = {      
            fields: {},
            errors: {},
           
        };
    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
            //lastname
            if(!fields["lastname"]){
                formIsValid = false;
                errors["lastname"] = "Cannot be empty";
            }
            //name
            if(!fields["name"]){
                formIsValid = false;
                errors["name"] = "Cannot be empty";
            }
            //message
            if(!fields["message"]){
                formIsValid = false;
                errors["message"] = "Cannot be empty";
            }
       
       this.setState({errors: errors});
       return formIsValid;
   }
    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
    contactSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){     
            var link = "mailto:me@example.com"
                 + "?cc="
                 + "&subject=" +this.state.fields["firstname"] + " " + this.state.fields["lastname"] 
                 + "&body=" + this.state.fields["message"] ;
    
            window.location.href = link;
        }
     }
    render() {
        return (
            <div style={this.props.page ? {display:"block"} : {display:"none"}} className="contact">
                <h3>Επικοινωνία</h3>
                <p>Τηλέφωνο efood:
                    <strong>
                        <a href="tel:+302310000000">  2310 000 0000</a>
                    </strong>
                </p>
                    <form method="post" encType="text/plain" onSubmit= {this.contactSubmit.bind(this)}>
                        <div className="contact-row">
                            <label>Όνομα</label>
                            <input type="text" name="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} placeholder="Το Όνομά σου"/>
                            <span className="login-error">{this.state.errors["name"]}</span>
                        </div>
                        <div  className="contact-row">
                            <label>Επίθετο</label>
                            <input type="text" name="Lastname" onChange={this.handleChange.bind(this, "lastname")} value={this.state.fields["lastname"]} placeholder="Το Επίθετό σου"/>
                            <span className="login-error">{this.state.errors["lastname"]}</span>
                        </div>
                        <div  className="contact-row">
                            <label>Μήνυμα</label>
                            <textarea  name="Message" onChange={this.handleChange.bind(this, "message")} value={this.state.fields["message"]} placeholder="Το Μήνυμά σου"></textarea>
                            <span className="login-error">{this.state.errors["message"]}</span>
                        </div>
                        <button type="submit" name="submit" >Αποστολή</button>
                    </form>
            </div>         
        );
    }
}
export default Contact;