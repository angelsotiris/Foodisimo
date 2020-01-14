import React, { Component } from 'react'

import '../css/HomeInfo.css';

import {Link} from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div className="homeinfo">
                <div className="homeinfo-icon">
                    <div className="homeinfo-icon-col">
                        <div></div>
                    </div>
                </div>
                <div className="homeinfo-info">
                    <div className="homeinfo-info-row">
                        <div className="homeinfo-info-row-col">
                            <h2>Για τι έχεις όρεξη σήμερα;</h2>
                            <p>Μήπως ένα καφεδάκι είναι απαραίτητο για να ξεκινήσει καλά η μέρα; Σου έχει λείψει το παστίτσιο αλλά "ποιος μαγειρεύει τώρα"; Μήπως ήρθε η στιγμή να δοκιμάσεις εκείνο το μεξικάνικο;</p>
                            <p>Ό,τι κι αν θέλεις, το έχουμε!</p>
                            <h3>Διάλεξε ανάμεσα σε 50 κουζίνες</h3>
                            <ul>
                            <li>
                                    <Link to="/">Πίτσες</Link>•
                                </li>
                                <li>
                                    <Link to="/">Burgers</Link>•
                                </li>
                                <li>
                                    <Link to="/">Μαγειρευτά</Link>•
                                </li>
                                <li>
                                    <Link to="/">Γλυκά</Link>•
                                </li>
                                <li>
                                    <Link to="/">Sushi</Link>•
                                </li>
                                <li>
                                    <Link to="/">Νηστίσιμα</Link>•
                                </li>
                                <li>
                                    <Link to="/">Μεξικάνικα</Link>•
                                </li>
                                <li>
                                    <Link to="/">Καφές</Link>•
                                </li>
                                <li>
                                    <Link to="/">Γυράδικα</Link>•
                                </li>
                                <li>
                                    <Link to="/">Σουβλάκια</Link>•
                                </li>
                                <li>
                                    <Link to="/">Κρέπες</Link>•
                                </li>
                                <li>
                                    <Link to="/">Ινδικό</Link>•
                                </li>
                                <li>
                                    <Link to="/">Grill - Ψητά</Link>•
                                </li>
                                <li>
                                    <Link to="/">Βάφλες</Link>•
                                </li>
                                <li>
                                    <Link to="/">24 ωρα</Link>•
                                </li>
                                <li>
                                    <Link to="/">Μακαρονάδες</Link>•
                                </li>
                                <li>
                                    <Link to="/">Κινέζικο</Link>•
                                </li>
                                <li>
                                    <Link to="/">Noodles</Link>•
                                </li>
                                <li>
                                    <Link to="/">Ρύζι</Link>•
                                </li>
                                <li>
                                    <Link to="/">Spring Rolls - Won Ton</Link>•
                                </li>
                                <li>
                                    <Link to="/">Brunch</Link>•
                                </li>
                                <li>
                                    <Link to="/">Vegetarian</Link>•
                                </li>
                                <li>
                                    <Link to="/">Μπουγάτσα</Link>•
                                </li>
                                <li>
                                    <Link to="/">Vegan</Link>•
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
