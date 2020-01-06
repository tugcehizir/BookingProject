import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import Star from './Star';

const HotelDetail = ({ location }) => {
    const hotelList = useSelector(state => state.app.hotels);

    const selectedHotel = hotelList.filter(item => {
        if (item._id === location.state.hotelId) {
            return true;
        }
        return false;
    });

    console.log(selectedHotel);
    return (
        <div>
            <Header name={selectedHotel[0].name} />
            <Star number={selectedHotel[0].star} />
            <img src={selectedHotel[0].imageUrl} className="img-fluid" alt="Responsive image"></img>
            <p>{selectedHotel[0].adress}<mark>{selectedHotel[0].city}</mark></p>
            <div className="alert alert-light" role="alert">
            {selectedHotel[0].description}
            </div>
        </div>
    );
}


export default withRouter(HotelDetail);