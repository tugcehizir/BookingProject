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
import HotelList from './redux/components/HotelList';
import HotelDetail from './redux/components/HotelDetail';
import NavBar from './redux/components/NavBar';
import HomePage from './redux/components/HomePage';
import RezervationForm from './redux/components/RezervationForm';
import RezervationPage from './redux/components/RezervationPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Header name={'Booking Clone'} />
            <HomePage />
          </Route>
          <Route exact path="/search">
            <Header name={'Hotel Search Page'} />
            <SearchBar />
            <HotelList />
          </Route>
          <Route path="/detail" component={HotelDetail}>
          </Route>
          <Route path="/form">
            <Header name={'Rezervation Form'} />
            <RezervationForm />
          </Route>
          <Route path="/rezervation">
            <Header name={'Rezervations'} />
            <RezervationPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
