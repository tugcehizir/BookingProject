import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const RezervationPage = ({ location }) => {
    const [startDate, setStartDate] = useState(new Date("2020/01/01"));
    const [endDate, setEndDate] = useState(new Date("2020/01/02"));
    const [success, setSuccess] = useState();
    let userName = useRef();
    let userMail = useRef();
    let phoneNumber = useRef();
    let numberOfPerson = useRef();

    const roomList = useSelector(state => state.app.rooms);

    const selectedRoom = roomList.filter(item => {
        console.log(`item id: ${item._id}, roomId: ${location.state.roomId}`)
        if (item._id === location.state.roomId) {
            console.log(item._id);
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
        setPhone(phoneNumber.current.value)
        setUserMail(userMail.current.value)

    }

    const [data, setdata] = useState();
    const handleSubmit = event => {

        console.log(name, mail, phone, person, endDate, startDate)
        event.preventDefault();
        axios
            .post("http://localhost:3000/rezervation/api/createRezervation", {
                checkInDate: startDate,
                checkOutDate: endDate,
                userName: name,
                userMail: mail,
                phoneNumber: phone,
                numberOfPerson: person
            })
            .then(({ data }) => {
                setdata(data);
                setSuccess(true);
                console.log("basarili")

            })
            .catch(err => {
                setSuccess(false);
                console.log(err);
            });
    }

    console.log(success);
    console.log(data);
    return (
        <div className="container-rez">
            <p>Rezervasyon yapmak istediğiniz oda <mark>{selectedRoom[0].name}</mark></p>
            <div className="left">
                <div className="form-group">
                    <label for="formGroupExampleInput">Adınız:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Adınız"
                        name="userName"
                        key="ad"
                        ref={userName}
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
                        key="mail"
                        ref={userMail}
                        onChange={handleChange} />

                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput4">Telefon Numaranız</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput4"
                        placeholder="Telefon Numaranız"
                        name="phoneNumber"
                        key="phone"
                        ref={phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput5">Kişi Sayısı</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput5"
                        placeholder="Kişi Sayısı"
                        name="numberOfPerson"
                        key="person"
                        ref={numberOfPerson}
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
                <button onClick={handleSubmit} className="btn btn-danger">Oluştur</button>
                <div className="result">
                    {
                        (success === true)
                            ? (<div class="alert alert-success" role="alert">
                                Rezervasyon bilgileriniz oluşturuldu!
                                Görüntülemek için <mark>Rezervasyonlar</mark> sayfasına gidiniz.
                </div>) : <div></div>}
                    {(success === false)
                        ? (<div class="alert alert-danger" role="alert">
                            Rezervasyon oluşturma hatası!
                            Lütfen tekrar deneyin!
      </div>)
                        : <div></div>
                    }
                </div>

            </div>
        </div>
    )

}

export default withRouter(RezervationPage);