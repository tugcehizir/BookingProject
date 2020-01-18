import React, { useState, useRef, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import uuid from 'react-uuid'
import { postReservation } from '../api/reservation'

const ReservationForm = ({ location }) => {
    const history = useHistory();

    const [startDate, setStartDate] = useState(new Date("2020-01-01T00:00:00Z"));
    const [endDate, setEndDate] = useState(new Date("2020-01-01T00:00:00Z"));
    const [success, setSuccess] = useState();

    const [da, setdata] = useState();

    let userName = useRef();
    let userMail = useRef();
    let phoneNumber = useRef();
    let numberOfPerson = useRef();

    const selectedRoom = location.state.room;
    const userCode = location.state.userCode;

    const [name, setUserName] = useState();
    const [mail, setUserMail] = useState();
    const [phone, setPhone] = useState();
    const [person, setNumberOfPerson] = useState();

    const [users, setUsers] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await fetch(`http://localhost:3000/user/api/getData`);
                const res = await result.json();
                setUsers(res)
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const find = [];
    if (users !== undefined) {
        console.log("ussssssss", users.data)
        users.data.map(obj => {
            console.log(obj.code)
            if (obj.code === userCode) {
                find.push(obj);
                return obj;
            }
            else {return null}
        })
    }

    const handleChange = () => {
        setUserName(userName.current.value);
        setNumberOfPerson(numberOfPerson.current.value);
        setPhone(phoneNumber.current.value);
        setUserMail(userMail.current.value);
    }

    const handleSubmit = event => {
        event.preventDefault(); const uniqueCode = uuid();
        const resCode = uniqueCode.split("-")
        const data = {
            resCode: resCode[0],
            checkInDate: startDate,
            checkOutDate: endDate,
            userName: name,
            userMail: mail,
            phoneNumber: phone,
            numberOfPerson: person,
            user: find,
            room: selectedRoom[0]
        }
        postReservation(data)
            .then(({ data }) => {
                setdata(data);
                setSuccess(true);
                history.push({ pathname: '/thanks', state: { resCode: resCode[0] } });
            })
            .catch(err => {
                setSuccess(false);
                console.log(err);
            });
    }
    
    console.log(da);
    return (

        <div className="container-res">
            {selectedRoom.length > 0 && (<p>Rezervasyon yapmak istediğiniz oda <mark>{selectedRoom[0].name}</mark></p>)}

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