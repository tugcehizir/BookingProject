import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import Star from './Star';
import RoomType from './RoomType';

const HotelDetail = ({ location }) => {
    const hotelList = useSelector(state => state.app.hotels);

    const selectedHotel = hotelList.filter(item => {
        if (item._id === location.state.hotelId) {
            return true;
        }
        return false;
    });

    return (
        <div className="detail">
            <Header name={selectedHotel[0].name} />
            <Star number={selectedHotel[0].star} />
            <img src={selectedHotel[0].imageUrl} className="img-fluid" alt="Hotel"></img>
            <p>{selectedHotel[0].country}<mark>{selectedHotel[0].city}</mark></p>
            <hr/>
            <div className="alert alert-light" role="alert">
            {selectedHotel[0].description}
            </div>
            <hr/>
            <RoomType prop = {selectedHotel[0]}/>
        </div>
    );
}


export default withRouter(HotelDetail);