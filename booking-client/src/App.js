import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Header from './redux/components/Header';
import SearchBar from './redux/components/SearchBar';
import HotelList from './redux/components/Other/HotelList';
import HotelDetail from './redux/components/HotelDetail';
import NavBar from './redux/components/NavBar';
import HomePage from './redux/components/HomePage';
import RezervationForm from './redux/components/RezervationForm';
import RezervationPage from './redux/components/Other/RezervationPage';
import ThanksPage from './redux/components/ThanksPage';
import RezervationQuery from './redux/components/RezervationQuery';
import User from './redux/components/User';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Header name={'Booking Clone'} />
            <SearchBar />
            <HotelList />
          </Route>
          <Route path="hotels">
            <HomePage />
          </Route>
          <Route path="/detail" component={HotelDetail}>
          </Route>
          <Route path="/form">
            <Header name={'Rezervasyon'} />
            <RezervationForm />
          </Route>
          <Route path="/rezervations">
            <Header name={'Rezervasyon Bilgileri'} />
            <RezervationPage />
          </Route>
          <Route path="/rezervation">
            <RezervationQuery />
          </Route>
          <Route path="/thanks" component={ThanksPage}>
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;