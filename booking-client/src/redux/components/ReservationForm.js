import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux'
import { withRouter, useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker"
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import uuid from 'react-uuid'

const ReservationForm = ({ location }) => {
    const history = useHistory();

    const [startDate, setStartDate] = useState(new Date("2020-01-01T00:00:00Z"));
    const [endDate, setEndDate] = useState(new Date("2020-01-01T00:00:00Z"));
    const [success, setSuccess] = useState();

    const [data, setdata] = useState();

    let userName = useRef();
    let userMail = useRef();
    let phoneNumber = useRef();
    let numberOfPerson = useRef();

    const roomList = useSelector(state => state.app.rooms);

    const selectedRoom = roomList.filter(item => {
        if (item._id === location.state.roomId) {
            return true;
        }
        return false;
    });

    const [name, setUserName] = useState();
    const [mail, setUserMail] = useState();
    const [phone, setPhone] = useState();
    const [person, setNumberOfPerson] = useState();


    const handleChange = () => {
        setUserName(userName.current.value);
        setNumberOfPerson(numberOfPerson.current.value);
        setPhone(phoneNumber.current.value);
        setUserMail(userMail.current.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const uniqueCode = uuid();
        const resCode = uniqueCode.split("-")
        axios
            .post("http://localhost:3000/reservation/api/createReservation", {
                resCode: resCode[0],
                checkInDate: startDate,
                checkOutDate: endDate,
                userName: name,
                userMail: mail,
                phoneNumber: phone,
                numberOfPerson: person,
                room: selectedRoom[0]
            })
            .then(({ data }) => {
                setdata(data);
                setSuccess(true);
                history.push({ pathname: '/thanks', state: { resCode: resCode[0] } });
            })
            .catch(err => {
                setSuccess(false);
                console.log(err);
            });
        console.log(data);
    }
    return (
        <div className="container-rez">
            <p>Rezervasyon yapmak istediğiniz oda <mark>{selectedRoom[0].name}</mark></p>
            <form onSubmit={handleSubmit}>
                <div className="left">
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Adınız:</label>
                        <input
                            type="text"
                            className="form-control is-invalid"
                            id="formGroupExampleInput"
                            placeholder="Adınız"
                            name="userName"
                            key="ad"
                            pattern="[A-Za-z]+"
                            minLength="6"
                            maxLength="25"
                            ref={userName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput3">Mail Adresiniz</label>
                        <input
                            type="email"
                            className="form-control is-invalid"
                            id="formGroupExampleInput3"
                            placeholder="Mail Adresiniz"
                            name="userMail"
                            key="mail"
                            ref={userMail}
                            onChange={handleChange}
                            required />

                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput4">Telefon Numaranız</label>
                        <input
                            type="text"
                            className="form-control is-invalid"
                            id="formGroupExampleInput4"
                            placeholder="Telefon Numaranız"
                            name="phoneNumber"
                            key="phone"
                            pattern="[0-9]+"
                            minLength="10"
                            maxLength="11"
                            ref={phoneNumber}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput5">Kişi Sayısı</label>
                        <input
                            type="number"
                            className="form-control is-invalid"
                            id="formGroupExampleInput5"
                            placeholder="Kişi Sayısı"
                            name="numberOfPerson"
                            key="person"
                            ref={numberOfPerson}
                            onChange={handleChange}
                            required />
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
                </div>
                <input type="submit" value="Gönder" />
            </form>

            <div className="result">
                {
                    (success === false)
                        ? (
                            <div class="alert alert-danger" role="alert">
                                Rezervasyon oluşturma hatası!
                            Lütfen tekrar deneyin!</div>)
                        : <div></div>
                }
            </div>

        </div>
    )

}

export default withRouter(ReservationForm);