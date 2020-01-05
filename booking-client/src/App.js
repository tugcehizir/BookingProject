import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Header from './redux/components/Header';
import SearchBar from './redux/components/SearchBar';
import HotelList from './redux/components/HotelList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header name={'Booking Clone'} />
      <SearchBar />
      <HotelList />
    </div>
  );
}

export default App;
