import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Header from './redux/components/Header';
import SearchBar from './redux/components/SearchBar';
import HotelList from './redux/components/HotelList';
import HotelDetail from './redux/components/HotelDetail';
import NavBar from './redux/components/NavBar';
import HomePage from './redux/components/HomePage';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
        <Switch>
          <Route exact path="/">
            <Header name={'Booking Clone Home Page'} />
            <HomePage />
          </Route>
          <Route exact path="/search">
          <Header name={'Booking Clone Search Page'} />
            <SearchBar />
            <HotelList/>
          </Route>
          <Route path="/detail" component={HotelDetail}>
            <HotelDetail />
          </Route>
          <Route path="/login" component={HotelDetail}>
          <Header name={'Login Page'} />
          </Route>
          <Route path="/room" component={HotelDetail}>
          <Header name={'Room Page'} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
