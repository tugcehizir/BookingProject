import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom';
import DatePicker from "react-datepicker"
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

const RezervationForm = ({ location }) => {
    const [startDate, setStartDate] = useState(new Date("2020/01/01"));
    const [endDate, setEndDate] = useState(new Date("2020/01/02"));
    const [success, setSuccess] = useState();

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

    const [data, setdata] = useState();

    const handleSubmit = event => {

        event.preventDefault();
        axios
            .post("http://localhost:3000/rezervation/api/createRezervation", {
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
            })
            .catch(err => {
                setSuccess(false);
                console.log(err);
            });
        console.log(success);
        console.log(data);
    }

    return (
        <div className="container-rez">
            <p>Rezervasyon yapmak istediğiniz oda <mark>{selectedRoom[0].name}</mark></p>
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
                        ref={userName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput3">Mail Adresiniz</label>
                    <input
                        type="text"
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
                <button onClick={handleSubmit} className="btn btn-danger">Oluştur</button>
                <div className="result">
                    {
                        (success === true)
                            ? (<div class="alert alert-success" role="alert">
                                Rezervasyon bilgileriniz oluşturuldu!
                                Görüntülemek için <mark><a href="/rezervation">Rezervasyonlar</a></mark> sayfasına gidiniz.</div>)
                            : <div></div>
                    }
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
        </div>
    )

}

export default withRouter(RezervationForm);