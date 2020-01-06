import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Header from './redux/components/Header';
import SearchBar from './redux/components/SearchBar';
import HotelList from './redux/components/HotelList';
import HotelDetail from './redux/components/HotelDetail';
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
        <Switch>
          <Route exact path="/">
            <Header name={'Booking Clone Home Page'} />
            <SearchBar />
            <HotelList />
          </Route>
          <Route path="/detail" component={HotelDetail}>
            <HotelDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
