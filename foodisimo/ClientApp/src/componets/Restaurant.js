import React, { Component } from 'react'

import '../css/Restaurant.css';


class Restaurant extends Component {
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
            //address
            if(!fields["address"]){
                formIsValid = false;
                errors["address"] = "Cannot be empty";
            }
            //restaurant
            if(!fields["restaurant"]){
                formIsValid = false;
                errors["restaurant"] = "Cannot be empty";
            }
            //number
            if(!fields["number"]){
                formIsValid = false;
                errors["number"] = "Cannot be empty";
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
    restaurantSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){     
            var link = "mailto:me@example.com"
                 + "?cc="
                 + "&subject=" +this.state.fields["name"] + " " + this.state.fields["number"]+ " " + this.state.fields["address"]  + " " + this.state.fields["restaurant"]  
                 + "&body=" + this.state.fields["message"] ;
    
            window.location.href = link;
        }
     }
    render() {
        return (
            <div style={this.props.page ? {display:"block"} : {display:"none"}} className="restaurant">
                <h3>Μπες στο efood</h3>
                    <form method="post" encType="text/plain" onSubmit= {this.restaurantSubmit.bind(this)}>
                        <div className="restaurant-row">
                            <label>Περιοχή</label>
                            <input type="text" name="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]} placeholder="Η περιοχή που βρίσκεται το εστιατόριο/κατάστημα"/>
                            <span className="login-error">{this.state.errors["address"]}</span>
                        </div>
                        <div  className="restaurant-row">
                            <label>Εστιατόριο</label>
                            <input type="text" name="Restaurant" onChange={this.handleChange.bind(this, "restaurant")} value={this.state.fields["restaurant"]} placeholder="Το όνομα εστιατορίου"/>
                            <span className="login-error">{this.state.errors["restaurant"]}</span>
                        </div>
                        <div  className="restaurant-row">
                            <label>Όνομα υπευθύνου</label>
                            <input type="text" name="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} placeholder="Το όνομα του υπευθύνου του εστιατορίου"/>
                            <span className="login-error">{this.state.errors["name"]}</span>
                        </div>
                        <div  className="restaurant-row">
                            <label>Κινητό</label>
                            <input type="text" name="number" onChange={this.handleChange.bind(this, "number")} value={this.state.fields["number"]} placeholder="Το κινητό σας τηλέφωνο"/>
                            <span className="login-error">{this.state.errors["number"]}</span>
                        </div>
                        <div  className="restaurant-row">
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
export default Restaurant;