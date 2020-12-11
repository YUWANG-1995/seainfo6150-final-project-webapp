import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { isEmpty } from "lodash";
import "./App.css";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import AboutUs from "./AboutPage/AboutUs";
import ContactUs from "./ContactUsPage/ContactUs";
import BrandList from "./BrandList/BrandList";
import ModelList from "./ModelList/ModelList";
import CarDetail from "./CarDetail/CarDetail";
import MainPage from "./MainPage/MainPage";
import Form from "./Form/Form";
import ThankyouPage from "./ThankyouPage/ThankyouPage";
import Error from "./Error/Error";


const App = () => {
  const [fetchedData, setFetchedData] = useState({});

  useEffect( () => {
    const fetchBrands = async () => {
      const result = await fetch("http://demo1468395.mockable.io/brands");
      const response = await result.json();
      setFetchedData(Object.values(response));
    };

    if(isEmpty(fetchedData)) {
      fetchBrands();
    }
  }, [fetchedData]);

  let displayAllBrands;
  if(!isEmpty(fetchedData)){
    displayAllBrands = (
      <BrandList brands={fetchedData} />
    )
  } else {
    displayAllBrands = null;
  }
  return(
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/aboutUs" exact component={AboutUs} />
          <Route path="/contactUs" exact component={ContactUs} />
          <Route path="/brands" exact render={() => displayAllBrands} />
          <Route path="/thankyou" exact component={ThankyouPage} />
          <Route path="/cars/:brand/:model/ordersDetail"
           exact
           render ={({ match }) => (
             <Form brand={match.params.brand} model={match.params.model} />
           )}
          />
          <Route
            path="/cars/:brand/:model"
            exact
            render = {({ match }) => (
              <CarDetail brand={match.params.brand} model={match.params.model} />
            )}
          />
          <Route
            path="/cars/:brand"
            exact
            render={({ match }) => (
              <ModelList brand={match.params.brand} />
            )}
          />
          <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
