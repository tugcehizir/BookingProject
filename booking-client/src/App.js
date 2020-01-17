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
import ReservationForm from './redux/components/ReservationForm';
import ReservationPage from './redux/components/Other/ReservationPage';
import ThanksPage from './redux/components/ThanksPage';
import ReservationQuery from './redux/components/ReservationQuery';
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
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;