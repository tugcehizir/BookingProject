import React, { useState, useRef } from 'react';
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import uuid from 'react-uuid'

import axios from "axios";
const RezervationUpdate = card => {
    console.log(card.prop);
    const [startDate, setStartDate] = useState(new Date(`${card.prop.checkInDate}`));
    const [endDate, setEndDate] = useState(new Date(`${card.prop.checkOutDate}`));

    const history = useHistory();

    let userName = useRef();
    let userMail = useRef();
    let phoneNumber = useRef();
    let numberOfPerson = useRef();

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
        const rezervationCode = uniqueCode.split("-")

        axios.put('http://localhost:3000/rezervation/api/updateRezervation/' + card.prop._id, {
            rezervationCode: rezervationCode[0],
            checkInDate: startDate,
            checkOutDate: endDate,
            userName: name,
            userMail: mail,
            phoneNumber: phone,
            numberOfPerson: person,
            room: card.prop.room
        })
        .then((res) => {
          console.log(res.data)
          console.log('Student successfully updated')          
        history.push({ pathname: '/thanks', state: { rezCode: rezervationCode[0] } });
        }).catch((error) => {
          console.log(error)
        })
    }
    const handlerRoute = event => {
        event.preventDefault();
        history.push({ pathname: '/'});
    }
    return (
        <div className="container-rez">
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
                <input type="submit" value="Gönder" className="btn btn-outline-dark"/>
                <button onClick={handlerRoute} type="button" className="btn btn-outline-dark">İptal</button>
            </form>

        </div>)
};
export default RezervationUpdate;