import React, { Component } from 'react'
import {FaShoppingBasket} from 'react-icons/fa';
import Slider from "react-slick";

import '../css/Offers.css';
import pizzafan from "../images/pizzafan.jpg";

import {Link} from "react-router-dom";

export default class Offers extends Component {
    render() {
        console.log(window.innerWidth);
        let settings=""
        if(window.innerWidth >990){
            settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1
            };
        }else if(window.innerWidth >765){
            settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1
            };
        }else{
            settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1
            };
        }
        
        return (
            <div className="offers">
                <div className="offers-container">
                    <h2>
                        <span>20.000</span>
                        προσφορές μόνο για εσένα
                    </h2>
                    <Slider  {...settings}>
                    <div>
                            <div className="slicker-div-image">
                                <Link to="/">
                                    <img alt="pizzafan" src={pizzafan}/>
                                </Link>
                            </div>
                            <Link to="/" className="offers-info">
                                <div>
                                    <h3>Pizza Fan</h3>
                                    <span>
                                        <FaShoppingBasket className="shopping-basket"/>
                                        12,00€
                                    </span>
                                </div>
                                <p>2 Κανονικές πίτσες &amp; 1 choco krats</p>
                            </Link>
                        </div>
                        <div >
                            <div className="slicker-div-image">
                                <Link to="/">
                                    <img alt="pizzafan" src={pizzafan}/>
                                </Link>
                            </div>
                            <Link to="/" className="offers-info">
                                <div>
                                    <h3>Pizza Fan</h3>
                                    <span>
                                        <FaShoppingBasket className="shopping-basket"/>
                                        12,00€
                                    </span>
                                </div>
                                <p>2 Κανονικές πίτσες &amp; 1 choco krats</p>
                            </Link>
                        </div>
                        <div >
                            <div className="slicker-div-image">
                                <Link to="/">
                                    <img alt="pizzafan" src={pizzafan}/>
                                </Link>
                            </div>
                            <Link to="/" className="offers-info">
                                <div>
                                    <h3>Pizza Fan</h3>
                                    <span>
                                        <FaShoppingBasket className="shopping-basket"/>
                                        12,00€
                                    </span>
                                </div>
                                <p>2 Κανονικές πίτσες &amp; 1 choco krats</p>
                            </Link>
                        </div>
                        <div >
                            <div className="slicker-div-image">
                                <Link to="/">
                                    <img alt="pizzafan" src={pizzafan}/>
                                </Link>
                            </div>
                            <Link to="/" className="offers-info">
                                <div>
                                    <h3>Pizza Fan</h3>
                                    <span>
                                        <FaShoppingBasket className="shopping-basket"/>
                                        12,00€
                                    </span>
                                </div>
                                <p>2 Κανονικές πίτσες &amp; 1 choco krats</p>
                            </Link>
                        </div>
                        <div >
                            <div className="slicker-div-image">
                                <Link to="/">
                                    <img alt="pizzafan" src={pizzafan}/>
                                </Link>
                            </div>
                            <Link to="/" className="offers-info">
                                <div>
                                    <h3>Pizza Fan</h3>
                                    <span>
                                        <FaShoppingBasket className="shopping-basket"/>
                                        12,00€
                                    </span>
                                </div>
                                <p>2 Κανονικές πίτσες &amp; 1 choco krats</p>
                            </Link>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}
