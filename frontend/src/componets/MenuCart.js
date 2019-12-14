import React, { Component } from 'react'

import '../css/MenuCart.css';
import {FaShoppingBasket,FaAngleUp,FaMapMarkerAlt,FaMinus,FaPlus,FaTimes} from 'react-icons/fa';
import {Link} from "react-router-dom";
import CartValue from "../CartValue";
import AddressValue from "../AddressValue";
class MenuCart extends Component {
    constructor(props) {
        super(props)
        
        this.dialogPosotita = this.dialogPosotita.bind(this);
        this.cartToggle = this.cartToggle.bind(this);
        this.menuToggle = this.menuToggle.bind(this);
        this.itemToggle = this.itemToggle.bind(this);
        var firstCart=[];
        var firstCartTimi=0;
        var firstKey=-1;
        if(CartValue.getSinolikiTimiValue() !==0){
            firstCart=CartValue.getCartValue();
            firstCartTimi=CartValue.getSinolikiTimiValue();
            firstKey=CartValue.getCartValue().length;
        }
        this.state = {
            menuvalue: "menu",
            isOpenCart: false,
            isOpenDialog: false,
            dialogOnoma:"",
            dialogTimi:"",
            dialogPerigrafi:"",
            dialogPosotita:1,
            dialogMessage: "",
            dialogSinolikiTimi:0,
            cart:firstCart,
            cartTimi:firstCartTimi,
            elaxisti:4,
            address:AddressValue.getAddressValue()
        };
        this.key=firstKey;
    }
    cartToggle = () => {
        this.setState({ isOpenCart: !this.state.isOpenCart });      
    };
    dialogClose = () => {
        this.setState({ 
            isOpenDialog: false,
            dialogOnoma:"",
            dialogTimi:"",
            dialogPerigrafi:"",
            dialogPosotita:1,
            dialogMessage: ""
        });      
    };
    menuToggle = (value) => {
        this.setState({ menuvalue:value });      
    };
    minusToggle = () => {
        this.setState({ isOpenCart: !this.state.isOpenCart });      
    };
    itemToggle = (onoma,timi,perigrafi) =>{
        this.setState({ 
            dialogOnoma:onoma,
            dialogTimi:timi,
            dialogSinolikiTimi:timi,
            dialogPerigrafi:perigrafi,
            isOpenDialog:true
        });    
    }
    dialogPosotita = (action) =>{
        if(action === "plus"){ 
            this.setState({dialogPosotita: this.state.dialogPosotita +1,dialogSinolikiTimi: Math.round((this.state.dialogSinolikiTimi + this.state.dialogTimi) * 100) / 100 });
        }else{
            if(this.state.dialogPosotita !== 1 ){
                this.setState({dialogPosotita: this.state.dialogPosotita -1,dialogSinolikiTimi:Math.round((this.state.dialogSinolikiTimi - this.state.dialogTimi) * 100) / 100  });
            }
        }
    }
    itemPosotita = (action,key) =>{
        var cart= [...this.state.cart];
        var cartTimi=this.state.cartTimi;
        var index= cart.findIndex(obj => obj.key===key);
        if(action==="plus"){
            cartTimi=Math.round((cartTimi + (cart[index].timi/cart[index].posotita)) * 100) / 100
            cart[index].timi=Math.round((cart[index].timi + (cart[index].timi/cart[index].posotita)) * 100) / 100;
            cart[index].posotita=cart[index].posotita+1;
            cart[index].key=index;
        }else{
            if(cart[index].posotita !== 1){
                cartTimi=Math.round((cartTimi - (cart[index].timi/cart[index].posotita)) * 100) / 100
                cart[index].timi=Math.round((cart[index].timi - (cart[index].timi/cart[index].posotita)) * 100) / 100;
                cart[index].posotita=cart[index].posotita-1;
                cart[index].key=index;
            }
        }
        this.setState({
            cart,
            cartTimi
        });
    }
    deleteItem = (key) =>{
        var cartTimi=this.state.cartTimi;
        var cart= [...this.state.cart];
        var index= cart.findIndex(obj => obj.key===key);
        cartTimi=Math.round((this.state.cartTimi - cart[index].timi) * 100) / 100;
        console.log(this.key);
        console.log(index);
        cart.splice(index, 1);
        CartValue.ChangeValue(cart,cartTimi);
        this.setState({
            cartTimi,
            cart
        });
    }
    addToCart = () =>{
        this.key++;
        let newItem={"key":this.key,"onoma":this.state.dialogOnoma, "timi": this.state.dialogSinolikiTimi, "message": this.state.dialogMessage, "posotita" : this.state.dialogPosotita};
        this.setState({
            cart: [...this.state.cart, newItem],
            isOpenDialog: false,
            dialogOnoma:"",
            dialogTimi:"",
            dialogSinolikiTimi:"",
            cartTimi:this.state.cartTimi + this.state.dialogSinolikiTimi,
            dialogPerigrafi:"",
            dialogPosotita:1,
            dialogMessage: ""
        });
    }
    addCartCookie = () =>{
        CartValue.ChangeValue(this.state.cart,this.state.cartTimi);
        window.location.href = "/shops/menu/confirm-order";
    }
    handleChange = (e) =>{     
        this.setState({dialogMessage:e.target.value });
    }
    render() {
        var cartItems = this.state.cart.map(item =>{ 
            return (
                <div key={item.key} className="cart-body-list-item">
                    <div className="cart-body-list-item-info">
                        <span>{item.onoma}</span>
                    </div>
                    <div className="cart-body-list-item-message">
                        {item.message}
                    </div>
                    <div className="cart-body-list-item-actions">
                        <span>
                            <FaMinus onClick={() =>  this.itemPosotita("minus",item.key)} className={item.posotita === 1 ? "minus-plus-hide" : "minus-plus-show"}/>
                            <span>{item.posotita}</span>
                            <FaPlus onClick={() =>  this.itemPosotita("plus",item.key)} className="minus-plus-show"/>
                        </span>
                        <span className="cart-body-list-item-price">
                            <div>
                                {item.timi}€
                            </div>
                            <button>
                                <FaTimes onClick={() =>  this.deleteItem(item.key)}className="times"/>
                            </button>
                        </span>
                    </div>
                </div>   
            )
        });
        return (
            <div>
                <div className="menucart">
                    <span className="menucart-white"/>
                    <div  className="menucart-container">
                        <div className="menucart-container-row">
                            <div className="menucart-container-row-col">
                                <ul className="menucart-topmenu">
                                    <li onClick={() => this.menuToggle("menu")}>
                                        <span  className={this.state.menuvalue==="menu" ? "menucart-topmenu-show" : "menucart-topmenu-hidden"}>Μενού</span>
                                    </li>
                                    <li onClick={() => this.menuToggle("plirofories")}>
                                        <span className={this.state.menuvalue==="plirofories" ? "menucart-topmenu-show" : "menucart-topmenu-hidden"}>Πληροφορίες</span>
                                    </li>
                                </ul>
                                {this.state.isOpenDialog ?
                                    <div className="menucart-dialog">
                                        <div className="menucart-dialog-container">
                                            <div className="menucart-dialog-container-border">
                                                <div  className="menucart-dialog-container-border-flex">
                                                    <div>
                                                        <div className="menucart-dialog-header">
                                                            <section className="menucart-dialog-header-title">
                                                                <strong>{this.state.dialogOnoma}</strong>
                                                                <span><FaTimes onClick={this.dialogClose} className="times"/></span>
                                                                <strong>{this.state.dialogSinolikiTimi}€</strong>
                                                            </section>
                                                            <section  className="menucart-dialog-header-text">
                                                                <p>{this.state.dialogPerigrafi}</p>
                                                            </section>
                                                        </div>
                                                    </div>
                                                    <div className="menucart-dialog-body">
                                                        <div>
                                                            <textarea  name="Message" onChange={this.handleChange.bind("message")} value={this.state.dialogMessage} rows="1" placeholder="Ειδικές Οδηγίες:"/>
                                                        </div>
                                                    </div>
                                                    <div className="menucart-dialog-footer">
                                                        <div>
                                                            <div>
                                                                <div className="menucart-dialog-footer-quantity">
                                                                    <span>
                                                                        <FaMinus onClick={() =>  this.dialogPosotita("minus")} className={this.state.dialogPosotita === 1 ? "minus-plus-hide" : "minus-plus-show"}/>
                                                                        <span>{this.state.dialogPosotita}</span>
                                                                        <FaPlus onClick={() =>  this.dialogPosotita("plus")}  className="minus-plus-show"/>
                                                                    </span>
                                                                </div>
                                                                <div onClick={this.addToCart} className="menucart-dialog-footer-button">
                                                                    <span>Προσθήκη στο καλάθι</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                : 
                                    null
                                }    
                                <div className="menucart-menu">
                                    {this.state.menuvalue==="plirofories" ? 
                                        <div className="menucart-info">
                                            <div className="menucart-info-container">
                                                <div className="menucart-info-container-row">
                                                    <div className="menucart-info-container-orario">
                                                        <h3>Ωράριο καταστήματος</h3>
                                                        <ul>
                                                            <li>
                                                                <span>Δευτέρα</span>
                                                                <span>09:00-01:00</span>
                                                            </li>
                                                            <li>
                                                                <span>Τρίτη</span>
                                                                <span>09:00-01:00</span>
                                                            </li>
                                                            <li>
                                                                <span>Τετάρτη</span>
                                                                <span>09:00-01:00</span>
                                                            </li>
                                                            <li>
                                                                <span>Πέμπτη</span>
                                                                <span>09:00-01:00</span>
                                                            </li>
                                                            <li>
                                                                <span>Παρασκευή</span>
                                                                <span>09:00-01:00</span>
                                                            </li>
                                                            <li>
                                                                <span>Σάββατο</span>
                                                                <span>09:00-24:00</span>
                                                            </li>
                                                            <li>
                                                                <span>Κυριακή</span>
                                                                <span>00:00-01:00,09:00-14:00</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="menucart-info-container-map">
                                                        <div className="menucart-info-container-map-container">
                                                            <div className="mapouter" style={{position:"relative",textAlign:"right",height:"100%",width:"100%"}}><div className="gmap_canvas" style={{overflow:"hidden",background:"none!important",height:"100%",width:"100%"}}><iframe title="map" width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=%CE%B8%CE%B5%CF%83%CF%83%CE%B1%CE%BB%CE%BF%CE%BD%CE%AF%CE%BA%CE%B7&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    :
                                        null
                                    }
                                    {this.state.menuvalue==="menu" ?
                                        <div className="menucart-menu-container">
                                            <div className="menucart-menu-container-flex">
                                                <div className="menucart-menu-container-col">
                                                    <div className="menucart-menu-container-col-center">
                                                        <div className="menucart-menu-shop">
                                                            <h3 className="menucart-menu-shop-title">
                                                                <span>Κρέπες αλμυρές</span>
                                                            </h3>
                                                            <ul className="menucart-menu-shop-menu">
                                                                <li  onClick={() => this.itemToggle("Κρέπα Γιαννιώτικη",2.2,"Με gouda, μπέικον, πατάτες τηγανητές, κοτομπουκιές & ουγγαρέζα")}>
                                                                    <div className="menucart-menu-shop-menu-item">
                                                                        <div className="menucart-menu-shop-menu-item-center">
                                                                            <div className="menucart-menu-shop-menu-item-center-col">
                                                                                <div className="menucart-menu-shop-menu-item-center-col-top">
                                                                                    <p>Κρέπα Γιαννιώτικη</p>
                                                                                    <button>
                                                                                        <FaShoppingBasket className="shopping-basket-menu"/>
                                                                                        <span>4,70€</span>
                                                                                    </button>
                                                                                </div>
                                                                                <div className="menucart-menu-shop-menu-item-center-col-bottom">
                                                                                    <p>Με gouda, μπέικον, πατάτες τηγανητές, κοτομπουκιές &amp; ουγγαρέζα</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li id="2" onClick={() => this.itemToggle("2")}>
                                                                    <div className="menucart-menu-shop-menu-item">
                                                                        <div className="menucart-menu-shop-menu-item-center">
                                                                            <div className="menucart-menu-shop-menu-item-center-col">
                                                                                <div className="menucart-menu-shop-menu-item-center-col-top">
                                                                                    <p>Κρέπα Γιαννιώτικη</p>
                                                                                    <button>
                                                                                        <FaShoppingBasket className="shopping-basket-menu"/>
                                                                                        <span>4,70€</span>
                                                                                    </button>
                                                                                </div>
                                                                                <div className="menucart-menu-shop-menu-item-center-col-bottom">
                                                                                    <p>Με gouda, μπέικον, πατάτες τηγανητές, κοτομπουκιές &amp; ουγγαρέζα</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="menucart-menu-shop-menu-item">
                                                                        <div className="menucart-menu-shop-menu-item-center">
                                                                            <div className="menucart-menu-shop-menu-item-center-col">
                                                                                <div className="menucart-menu-shop-menu-item-center-col-top">
                                                                                    <p>Κρέπα Γιαννιώτικη</p>
                                                                                    <button>
                                                                                        <FaShoppingBasket className="shopping-basket-menu"/>
                                                                                        <span>4,70€</span>
                                                                                    </button>
                                                                                </div>
                                                                                <div className="menucart-menu-shop-menu-item-center-col-bottom">
                                                                                    <p>Με gouda, μπέικον, πατάτες τηγανητές, κοτομπουκιές &amp; ουγγαρέζα</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="menucart-menu-shop-menu-item">
                                                                        <div className="menucart-menu-shop-menu-item-center">
                                                                            <div className="menucart-menu-shop-menu-item-center-col">
                                                                                <div className="menucart-menu-shop-menu-item-center-col-top">
                                                                                    <p>Κρέπα Γιαννιώτικη</p>
                                                                                    <button>
                                                                                        <FaShoppingBasket className="shopping-basket-menu"/>
                                                                                        <span>4,70€</span>
                                                                                    </button>
                                                                                </div>
                                                                                <div className="menucart-menu-shop-menu-item-center-col-bottom">
                                                                                    <p>Με gouda, μπέικον, πατάτες τηγανητές, κοτομπουκιές &amp; ουγγαρέζα</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    :
                                        null
                                    }
                                </div>
                            </div>
                            <div className="cart">
                                <div>
                                    <div style={this.state.isOpenCart ? {transform:"none"} : {transform:" translate3d(0,100%,0) translate3d(0,-65px,0)"}} className="cart-container">
                                        <div className="cart-container-flex">
                                            <div className="cart-header">
                                                <div onClick={this.cartToggle}  className="cart-header-top">
                                                    <span className="cart-header-top-number">
                                                        Το καλάθι σου
                                                        <span>{this.state.cart.length}</span>
                                                    </span>
                                                    <FaAngleUp style={this.state.isOpenCart ? {transform:"rotate(180deg)"} : {transform:"rotate(0deg)"}} className="arrow"/>
                                                    <span className="cart-header-top-price">
                                                        <span>{this.state.cartTimi}€</span>
                                                    </span>
                                                </div>
                                                <div className="cart-header-bottom">
                                                    <div>
                                                        <div>
                                                            <div className="cart-header-bottom-address">
                                                                <FaMapMarkerAlt className="map-marker"/>
                                                                <div>{this.state.address}</div>
                                                                <Link to="/account/view" className="offers-info">Αλλαγή</Link>
                                                            </div>
                                                            <div className="cart-header-bottom-delivery">
                                                                <div>
                                                                    <button>Delivery</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart-body">
                                                <div className="cart-body-container">
                                                    <div className="cart-body-order">
                                                        <div className="cart-body-list">
                                                            {cartItems}
                                                        </div>
                                                    </div>
                                                    {this.state.elaxisti > this.state.cartTimi ? <div className="cart-alert">Λείπουν { Math.round((this.state.elaxisti - this.state.cartTimi) * 100) / 100}€ για την ελάχιστη παραγγελία</div> : null}
                                                </div>   
                                            </div>
                                            <div className="cart-footer">
                                                <div className="cart-footer-container">
                                                    <div>Κόστος</div>
                                                    <div>{this.state.cartTimi}€</div>
                                                </div>
                                                <button onClick={this.addCartCookie} className={this.state.elaxisti < this.state.cartTimi ? "cart-footer-button-show" : "cart-footer-button-hide"}>Συνέχεια</button>
                                            </div>
                                        </div>
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
export default MenuCart;