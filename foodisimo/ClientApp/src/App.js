import React from 'react';
import './App.css';

import Navbar from "./componets/Navbar";
import Home from  "./pages/Home";
import Account from  "./pages/Account";
import InfoPage from  "./pages/InfoPage";
import Error from "./pages/Error";
import Footer from "./componets/Footer";
import {Route, Switch} from "react-router-dom"
import {LoginProtected} from "./LoginProtected"
function App() {
  return(
  <> 
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <LoginProtected exact path="/account/:slug" component={Account}/>
      <Route exact path="/info/:slug" component={InfoPage} />
      <Route component={Error}/>
      <Route  exact path="/error" component={Error}/>
    </Switch>
    <Footer/>
  </>
  );
}

export default App;
