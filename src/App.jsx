import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Blank from "./components/Blank";
import List from "./components/List";
import List1 from "./components/List1";
import Grid from "./components/Grid";
import Master_Detail from "./components/Master_Detail";
import List2 from "./components/List2";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path = "/" component = { Blank } />
          <Route path = "/List" component = { List } />
          <Route path = "/List1" component = { List1 } />
          <Route path = "/Grid" component = { Grid } />
          <Route path = "/Master_Detail" component = { Master_Detail } />
          <Route path = "/List2" component = { List2 } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
}

export default App;
