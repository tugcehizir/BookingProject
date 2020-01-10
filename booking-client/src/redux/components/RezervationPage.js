import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const RezervationPage = ({ location }) => {
    const [startDate, setStartDate] = useState(new Date("2020/01/01"));
    const [endDate, setEndDate] = useState(new Date("2020/01/02"));
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
    console.log(startDate);

    const [userName, setuserName] = useState("");
    const [userMail, setuserMail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [numberOfPerson, setnumberOfPerson] = useState("");

    console.log(userName, userMail, phoneNumber, numberOfPerson)

    const handleChange = event => {

    }
    const handleSubmit = event => {

    }

    return (
        <div className="cont-rez">
            <p>Rezervasyon yapmak istediğiniz oda <mark>{selectedRoom[0].name}</mark></p>
            <form onSubmit={handleSubmit}>
                <div className="left">
                    <div className="form-group">
                        <label for="formGroupExampleInput">Adınız</label>
                        <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="Adınız"
                            name="userName"
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput3">Mail Adresiniz</label>
                        <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput3"
                            placeholder="Mail Adresiniz"
                            name="userMail"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput4">Telefon Numaranız</label>
                        <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput4"
                            placeholder="Telefon Numaranız"
                            name="phoneNumber"
                            onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput5">Kişi Sayısı</label>
                        <input
                            type="number"
                            className="form-control"
                            id="formGroupExampleInput5"
                            placeholder="Kişi Sayısı"
                            name="numberOfPerson"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="right">
                    <div className="datePick">
                        <p>Giriş Tarihinizi Seçiniz.</p>
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                        />
                        <p className="secondPick">Çıkış Tarihinizi Seçiniz. </p>
                        <DatePicker
                            selected={endDate}
                            onChange={date => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                        />
                    </div>
                    <button type="submit" className="btn btn-danger">Oluştur</button>
                </div>
            </form>
        </div>
    )

}

export default withRouter(RezervationPage);