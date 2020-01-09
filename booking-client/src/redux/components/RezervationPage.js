import React from 'react';
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom';

const RezervationPage = ({ location }) => {
    const roomList = useSelector(state => state.app.rooms);
    console.log(location.state.roomId);
    const selectedRoom = roomList.filter(item => {
        console.log(`item id: ${item._id}, roomId: ${location.state.roomId}`)
        if (item._id === location.state.roomId) {
            console.log(item._id);
            return true;
        }
        return false;
    });
    return (
        <div>
            <h5>Rezervasyon yapmak istediğiniz oda {selectedRoom[0].name}</h5>
            <h6>Fiyat {selectedRoom[0].price}</h6>
        </div>
    )

}

export default withRouter(RezervationPage);