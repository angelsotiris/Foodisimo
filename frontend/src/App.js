import React from 'react';
import './App.css';

import Navbar from "./componets/Navbar";
import Home from  "./pages/Home";
import Account from  "./pages/Account";
import InfoPage from  "./pages/InfoPage";
import Shops from  "./pages/Shops"
import ShopMenu from  "./pages/ShopMenu"
import ConfirmOrder from  "./pages/ConfirmOrder"
import Error from "./pages/Error";
import Footer from "./componets/Footer";
import {Route, Switch} from "react-router-dom"
import {LoginProtected} from "./LoginProtected"
import {ShopsProtected} from "./ShopsProtected"
import {ConfirmOrderProtected} from "./ConfirmOrderProtected"
function App() {
  return(
  <> 
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <LoginProtected exact path="/account/:slug" component={Account}/>
      <Route exact path="/info/:slug" component={InfoPage} />
      <ShopsProtected exact path="/shops" component={Shops} />
      <Route exact path="/shops/menu" component={ShopMenu} />
      <ConfirmOrderProtected exact path="/shops/menu/confirm-order" component={ConfirmOrder} />
      <Route component={Error}/>
      <Route exact path="/error" component={Error}/>
    </Switch>
    <Footer/>
  </>
  );
}

export default App;
