import React, { Component } from 'react'
import {Link} from "react-router-dom";
import '../css/ShopsSearch.css';

import shoplogo from "../images/shop-logo.png";

class ShopsSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isKouzines: false,
            isFilterMenu: false,
            fields: {"all":true,"souvlakia":false,"kafedes":false,"pizza":false,"burgers":false,"krepes":false,"apostasi":false,"xronos-paradosis":false,"elaxisti":false,"alfabitika":true}
        };
    }
    kouzinesToggle = () => {
        this.setState({ isKouzines: !this.state.isKouzines });
    };
    filterToggle = () => {
        this.setState({ isFilterMenu: !this.state.isFilterMenu });
    };
    handleChange(field, e){         
        let fields = this.state.fields;
        if(fields[field]){
            fields[field]=false
        }else{
            fields[field]=true
        }
        
           
        this.setState({fields});
    }
    render() {
        return (
            <div className="shops-search">
                <div className="shops-search-container">
                    <div className="shops-search-container-row">
                        <div className="shops-search-top">
                            <div className="shops-search-top-container">
                                <div className="shops-search-top-container-search"> 
                                    <div>
                                        <div>
                                            <form>
                                                <div>
                                                    <span className="search-icon"></span>
                                                    <input type="search" placeholder="Αναζήτησε καταστήματα ή προϊόντα"/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="shops-search-top-container-filter">
                                    <div>
                                        <button onClick={this.filterToggle} >
                                            <span className="filter-icon"></span>
                                            <span>Φίλτρα &amp; Ταξινόμηση</span>
                                        </button>
                                        <div style={this.state.isFilterMenu ? {display:"block"} : {display:"none"}} className="shops-search-top-container-filter-menu">
                                            <h5>κουζινες</h5>
                                                <ul className="filter-checkbox">
                                                    <li>
                                                        <div>
                                                            <input type="checkbox"  id="all"/>
                                                            <label  onClick={this.handleChange.bind(this, "all")} className={this.state.fields["all"] ? "filter-checked" : "filter-unchecked"} htmlFor="all">
                                                                <div>
                                                                    <span>Όλες οι κουζίνες</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            <input type="checkbox"  id="souvlakia"/>
                                                            <label  onClick={this.handleChange.bind(this, "souvlakia")} className={this.state.fields["souvlakia"] ? "filter-checked" : "filter-unchecked"} htmlFor="souvlakia">
                                                                <div>
                                                                    <span>Σουβλάκια</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            <input type="checkbox"   id="kafedes"/>
                                                            <label   onClick={this.handleChange.bind(this, "kafedes")} className={this.state.fields["kafedes"] ? "filter-checked" : "filter-unchecked"} htmlFor="kafedes">
                                                                <div>
                                                                    <span>Καφέδες</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <ul style={this.state.isKouzines ? {display:"block"} : {display:"none"}} className="filter-checkbox">
                                                        <li>
                                                            <div>
                                                                <input type="checkbox"  id="pizza"/>
                                                                <label   onClick={this.handleChange.bind(this, "pizza")} className={this.state.fields["pizza"] ? "filter-checked" : "filter-unchecked"} htmlFor="pizza">
                                                                    <div>
                                                                        <span>Pizza</span>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <input type="checkbox"  id="burgers"/>
                                                                <label   onClick={this.handleChange.bind(this, "burgers")} className={this.state.fields["burgers"] ? "filter-checked" : "filter-unchecked"} htmlFor="burgers">
                                                                    <div>
                                                                        <span>Burgers</span>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <input type="checkbox"  id="krepes"/>
                                                                <label   onClick={this.handleChange.bind(this, "krepes")} className={this.state.fields["krepes"] ? "filter-checked" : "filter-unchecked"} htmlFor="krepes">
                                                                    <div>
                                                                        <span>Κρέπες</span>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <li>
                                                        <div>
                                                            <button onClick={this.kouzinesToggle}>
                                                                <span>{this.state.isKouzines ? "Λιγότερες" : "Δες τις όλες"}</span>
                                                            </button>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <h5>Ταξινόμηση</h5>
                                                    <ul className="filter-checkbox">
                                                        <li>
                                                            <div>
                                                                <input type="checkbox"  id="apostasi"/>
                                                                <label   onClick={this.handleChange.bind(this, "apostasi")} className={this.state.fields["apostasi"] ? "filter-checked" : "filter-unchecked"} htmlFor="apostasi">
                                                                    <div>
                                                                        <span>Απόσταση</span>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <input type="checkbox"  id="xronos-paradosis"/>
                                                                <label   onClick={this.handleChange.bind(this, "xronos-paradosis")} className={this.state.fields["xronos-paradosis"] ? "filter-checked" : "filter-unchecked"} htmlFor="xronos-paradosis">
                                                                    <div>
                                                                        <span>Χρόνος Παράδοσης</span>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <input type="checkbox"  id="elaxisti"/>
                                                                <label   onClick={this.handleChange.bind(this, "elaxist")} className={this.state.fields["elaxisti"] ? "filter-checked" : "filter-unchecked"} htmlFor="elaxist">
                                                                    <div>
                                                                        <span>Ελάχιστη</span>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <input type="checkbox"  id="alfabitika"/>
                                                                <label  onClick={this.handleChange.bind(this, "alfabitika")} className={this.state.fields["alfabitika"] ? "filter-checked" : "filter-unchecked"} htmlFor="alfabitika">
                                                                    <div>
                                                                        <span>Αλφαβητικά</span>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="shops-search-shops">
                            <div className="shops-search-shops-container">
                                <div className="shops-search-shops-icon">
                                    <img alt="shop-logo" src={shoplogo}/>
                                </div>
                                <div  className="shops-search-shops-info">
                                    <h3>Πίτσα Μπύρα</h3>
                                    <small>
                                        <span>Θέρμη</span>
                                        <span>1,9χλμ</span>
                                    </small>
                                </div>
                                <div className="shops-search-shops-info2">
                                    <div className="shops-search-shops-info2-xronos">
                                        <div>
                                            <div>Χρόνος</div>
                                            <span>35'</span>
                                        </div> 
                                        <div>
                                            <div>Ελάχιστη</div>
                                            <span>4€</span>
                                        </div>
                                    </div>
                                    <div className="shops-search-shops-info2-katigories">
                                        <small>Pizza, Γλυκά, Ποτά</small>
                                    </div>
                                </div>
                                <div className="shops-search-shops-button">
                                    <div>
                                           <Link to="/shops/menu" className="offers-info">Παράγγειλε</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="shops-search-shops">
                            <div className="shops-search-shops-container">
                                <div className="shops-search-shops-icon">
                                    <img alt="shop-logo" src={shoplogo}/>
                                </div>
                                <div  className="shops-search-shops-info">
                                    <h3>Πίτσα Μπύρα</h3>
                                    <small>
                                        <span>Θέρμη</span>
                                        <span>1,9χλμ</span>
                                    </small>
                                </div>
                                <div className="shops-search-shops-info2">
                                    <div className="shops-search-shops-info2-xronos">
                                        <div>
                                            <div>Χρόνος</div>
                                            <span>35'</span>
                                        </div> 
                                        <div>
                                            <div>Ελάχιστη</div>
                                            <span>4€</span>
                                        </div>
                                    </div>
                                    <div className="shops-search-shops-info2-katigories">
                                        <small>Pizza, Γλυκά, Ποτά</small>
                                    </div>
                                </div>
                                <div className="shops-search-shops-button">
                                    <div>
                                           <Link to="/" className="offers-info">Παράγγειλε</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="shops-search-shops">
                            <div className="shops-search-shops-container">
                                <div className="shops-search-shops-icon">
                                    <img alt="shop-logo" src={shoplogo}/>
                                </div>
                                <div  className="shops-search-shops-info">
                                    <h3>Πίτσα Μπύρα</h3>
                                    <small>
                                        <span>Θέρμη</span>
                                        <span>1,9χλμ</span>
                                    </small>
                                </div>
                                <div className="shops-search-shops-info2">
                                    <div className="shops-search-shops-info2-xronos">
                                        <div>
                                            <div>Χρόνος</div>
                                            <span>35'</span>
                                        </div> 
                                        <div>
                                            <div>Ελάχιστη</div>
                                            <span>4€</span>
                                        </div>
                                    </div>
                                    <div className="shops-search-shops-info2-katigories">
                                        <small>Pizza, Γλυκά, Ποτά</small>
                                    </div>
                                </div>
                                <div className="shops-search-shops-button">
                                    <div>
                                           <Link to="/" className="offers-info">Παράγγειλε</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
        );
    }
}
export default ShopsSearch;