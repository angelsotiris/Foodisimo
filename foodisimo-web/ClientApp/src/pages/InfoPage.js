import React, { Component } from 'react'

import '../css/InfoPage.css';
import {Link} from "react-router-dom";

import whoimg from "../images/who.jpg"
import infoimg from "../images/info.jpg"
import faqsimg from "../images/faqs.jpg"
import contactimg from "../images/contact.jpg"
import restaurantimg from "../images/restaurant.jpg"
import tosimg from "../images/tos.jpg"
import privacyimg from "../images/privacy.jpg"
import copyrightimg from "../images/copyright.jpg"
import allergensimg from "../images/allergens.jpg"


import Who from "../componets/Who";
import Info from "../componets/Info";
import Faqs from "../componets/Faqs";
import Tos from "../componets/Tos";
import Privacy from "../componets/Privacy";
import Copyright from "../componets/Copyright";
import Allergens from "../componets/Allergens";
import Contact from "../componets/Contact";
import Restaurant from "../componets/Restaurant";
import CartValue from "../CartValue";
class InfoPage extends Component {
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
        if(this.props.match.params.slug==="who" || this.props.match.params.slug==="info" || this.props.match.params.slug==="faqs" || this.props.match.params.slug==="contact" || this.props.match.params.slug==="restaurant" || this.props.match.params.slug==="tos" || this.props.match.params.slug==="privacy" || this.props.match.params.slug==="copyright"  || this.props.match.params.slug==="allergens"){
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
        let title="";
        let paragraph="";
        let img="";
        if(this.state.slug==="who"){
            title= "Ποιοι είμαστε";
            paragraph="Μείνε μακριά από την κουζίνα!";
            img=whoimg;
        }else if(this.state.slug==="info"){
            title= "Πώς λειτουργεί";
            paragraph="Παραγγελία σε 1'. Στ' αλήθεια!";
            img=infoimg;
        }else if(this.state.slug==="faqs"){
            title= "FAQ";
            paragraph="Εσύ ρωτάς. Εμείς απαντάμε.";
            img=faqsimg;
        }else if(this.state.slug==="contact"){
            title= "Επικοινωνία";
            paragraph="Έμεινες χαρούμενος ή κάτι πήγε λάθος; Μίλησέ μας!";
            img=contactimg;
        }else if(this.state.slug==="restaurant"){
            title= "Βάλε το κατάστημά σου";
            paragraph="Περισσότερες παραγγελίες, πιο χαρούμενοι πελάτες, λιγότερος χρόνος χαμένος στα τηλέφωνα!";
            img=restaurantimg;
        }else if(this.state.slug==="tos"){
            title= "Όροι Χρήσης";
            paragraph="Για να είμαστε σωστοί";
            img=tosimg;
        }else if(this.state.slug==="privacy"){
            title= "Πολιτική Απορρήτου";
            paragraph="Εμείς δε θα πούμε τίποτα. Εσύ;";
            img=privacyimg;
        }else if(this.state.slug==="copyright"){
            title= "Πολιτική Προστασίας";
            paragraph="Καλό θα ήταν να μας ρωτήσεις, πριν πάρεις κάτι από τις σελίδες μας.";
            img=copyrightimg;
        }else if(this.state.slug==="allergens"){
            title= "Πληροφορίες για Αλλεργιογόνα";
            img=allergensimg;
        }
        return (
            <div>
                <div className="info-top">
                    <div className="info-top-icon">
                        <div  className="info-top-icon-container">
                            <img alt="info-img" src={img}/>
                        </div>  
                    </div>
                    <div className="info-top-label">
                        <div className="info-top-label-row">
                            <div className="info-top-label-row-col">
                                <div className="info-top-label-row-col-center">
                                    <div>
                                        <h1>{title}</h1>
                                        <p>{paragraph}</p>
                                    </div> 
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div className="info-main">
                        <div className="info-main-container">
                            <div className="info-main-container-row">
                                <div className="info-main-menu">
                                    <aside>
                                        <nav>
                                            <ul>
                                                <li className={this.state.slug==="who" ? "info-main-menu-pressed" : ""}>
                                                    <Link to="/info/who">
                                                        Ποιοι είμαστε
                                                    </Link>
                                                </li>
                                                <li className={this.state.slug==="info" ? "info-main-menu-pressed" : ""}> 
                                                    <Link to="/info/info">
                                                        Πώς λειτουργεί
                                                    </Link>
                                                </li>
                                                <li className={this.state.slug==="faqs" ? "info-main-menu-pressed" : ""}>
                                                    <Link to="/info/faqs">
                                                        FAQs
                                                    </Link>
                                                </li>
                                                <li className={this.state.slug==="contact" ? "info-main-menu-pressed" : ""}>
                                                    <Link to="/info/contact">
                                                        Επικοινωνία
                                                    </Link>
                                                </li>
                                                <li className={this.state.slug==="restaurant" ? "info-main-menu-pressed" : ""}>
                                                    <Link to="/info/restaurant">
                                                        Έχετε εστιατόριο;
                                                    </Link>
                                                </li>
                                                <li className={this.state.slug==="tos" ? "info-main-menu-pressed" : ""}>
                                                    <Link to="/info/tos">
                                                        Όροι χρήσης
                                                    </Link>
                                                </li>
                                                <li className={this.state.slug==="privacy" ? "info-main-menu-pressed" : ""}>
                                                    <Link to="/info/privacy">
                                                        Πολιτική απορρήτου
                                                    </Link>
                                                </li>
                                                <li className={this.state.slug==="copyright" ? "info-main-menu-pressed" : ""}>
                                                    <Link to="/info/copyright">
                                                        Πολιτική προστασίας
                                                    </Link>
                                                </li>
                                                <li className={this.state.slug==="allergens" ? "info-main-menu-pressed" : ""}>
                                                    <Link to="/info/allergens">
                                                        Αλλεργιογόνα
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </aside>
                                </div>
                                <div className="info-main-content">
                                    <div className="info-main-content-container" >
                                        <div className="info-main-top-mobile">
                                            <h1>{title}</h1>
                                            <p>{paragraph}</p>
                                        </div>
                                        <hr></hr>
                                        <Who page={this.state.slug==="who"}/>
                                        <Info page={this.state.slug==="info"}/>
                                        <Faqs page={this.state.slug==="faqs"}/>
                                        <Tos page={this.state.slug==="tos"}/>
                                        <Privacy page={this.state.slug==="privacy"}/>
                                        <Copyright page={this.state.slug==="copyright"}/>
                                        <Allergens page={this.state.slug==="allergens"}/>
                                        <Contact page={this.state.slug==="contact"}/>
                                        <Restaurant page={this.state.slug==="restaurant"}/>
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
export default InfoPage;