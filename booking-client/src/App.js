import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HotelList from './components/HotelList';
import HotelDetail from './components/HotelDetail';
import NavBar from './components/NavBar';
import HomePage from './components/Other/HomePage';
import ReservationForm from './components/ReservationForm';
import ReservationPage from './components/Other/ReservationPage';
import ThanksPage from './components/ThanksPage';
import ReservationQuery from './components/ReservationQuery';
import User from './components/User';

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
            <ReservationForm />
          </Route>
          <Route path="/reservations">
            <Header name={'Rezervasyon Bilgileri'} />
            <ReservationPage />
          </Route>
          <Route path="/reservation">
            <ReservationQuery />
          </Route>
          <Route path="/thanks" component={ThanksPage}>
          </Route>
          <Route path="/login">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;