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
                                <ul class="list-unstyled mb-0 footer-links-list">
                                    <li><Link to="">Ποιοί είμαστε</Link></li>
                                    <li><Link to="">Πώς λειτουργεί</Link></li>
                                    <li><Link to="">FAQs</Link></li>
                                    <li><Link to="">Blog</Link></li>
                                    <li><Link to="">Επικοινωνία</Link></li>
                                    <li><Link to="">Έχεις κατάστημα;</Link></li>
                                    <li><Link to="">Γίνε efooder</Link></li>
                                    <li><Link to="">Τρόποι Πληρωμής</Link></li>
                                    <li><Link to="">Όροι χρήσης</Link></li>
                                    <li><Link to="">Αλλεργιογόνα</Link></li>
                                    <li><Link to="">Πολιτική απορρήτου</Link></li>
                                    <li><Link to="">Πολιτική προστασίας</Link></li>
                                    <li><Link to="">Πολιτική cookies</Link></li>
                                    <li><Link to="">Πολιτική αξιολόγησης</Link></li>
                                    <li><Link to="">Εστιατόρια</Link></li>
                                </ul>
                            </div>
                            <div className="footer-social">
                                <ul>
                                    <li>
                                        <Link to="/"><FaFacebookF/></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><FaTwitter/></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><FaInstagram/></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><FaYoutube/></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><FaLinkedin/></Link>
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
