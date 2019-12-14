import React, { Component } from 'react'

import '../css/Footer.css';

import {Link} from "react-router-dom";
import {FaFacebookF,FaTwitter,FaInstagram,FaYoutube,FaLinkedin} from 'react-icons/fa';

export default class Footer extends Component {
    render() {
        return (
            <div >
                <div className="footer">
                    <div className="footer-container">
                        <div className="footer-logo">
                            <Link to='/'>
                                <div className="footer-logo-img"/>
                            </Link>
                        </div>
                        <div className="footer-raw">
                            <div className="footer-info">
                                <p>Πείνασες; Είσαι στο γραφείο και θες καφέ; Είναι Σαββατοκύριακο και δεν θες να σηκωθείς από το κρεβάτι; Γι' αυτό υπάρχει το efood. Βρες ό,τι τραβάει η όρεξή σου και παράγγειλε επιλέγοντας ανάμεσα σε  6500 καταστήματα και 60 πόλεις! Τι άλλο θες; efood και έφαγες!</p>
                            </div>
                            <div className="footer-links">
                                <ul className="list-unstyled mb-0 footer-links-list">
                                    <li><Link to="/info/who">Ποιοί είμαστε</Link></li>
                                    <li><Link to="/info/info">Πώς λειτουργεί</Link></li>
                                    <li><Link to="/info/faqs">FAQs</Link></li>
                                    <li><Link to="/info/contact">Επικοινωνία</Link></li>
                                    <li><Link to="/info/restaurant">Έχεις κατάστημα;</Link></li>
                                    <li><Link to="/info/tos">Όροι χρήσης</Link></li>
                                    <li><Link to="/info/allergens">Αλλεργιογόνα</Link></li>
                                    <li><Link to="/info/privacy">Πολιτική απορρήτου</Link></li>
                                    <li><Link to="/info/copyright">Πολιτική προστασίας</Link></li>
                                </ul>
                            </div>
                            <div className="footer-social">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/"><FaFacebookF/></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/"><FaTwitter/></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/"><FaInstagram/></a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/"><FaYoutube/></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/"><FaLinkedin/></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-copyright">
                                <p>©2019 efood Με επιφύλαξη όλων των δικαιωμάτων. Όροι χρήσης, Πολιτική ιδιωτικού απορρήτου και Πολιτική περί cookies του efood</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
