import React, { useState, useRef } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import axios from "axios";
import uuid from 'react-uuid'
const User = () => {

    const history = useHistory();

    const roomId = useSelector(state => state.app.selectedRoom);
    const roomList = useSelector(state => state.app.rooms);
    console.log(roomId);

    const [name, setUserName] = useState("");
    const [pass, setPassword] = useState("");    
    const [data, setdata] = useState();

    const selectedRoom = roomList.filter(item => {
        if (item._id === roomId) {
            return true;
        }
        return false;
    });
    console.log(selectedRoom);
    let userName = useRef();
    let password = useRef();

    const _handleChange = () => {
        setUserName(userName.current.value);
        setPassword(password.current.value);
    }

    const _handleSubmit = event => {
        event.preventDefault();
        const uniqueCode = uuid();
        const userCode = uniqueCode.split("-")
        axios
            .post("http://localhost:3000/user/api/postData", {
                name: name,
                password: pass,
                code: userCode[0],
            })
            .then(({ data }) => {
                setdata(data);
                history.push({ pathname: '/form', state: { room: selectedRoom, userCode: userCode[0]}});
            })
            .catch(err => {
                console.log(err);
            });
    }
    console.log(`name: ${name} , password ${pass}`);
    return <div>
        <form className="login-form">
            <div className="form-group">
                <label htmlFor="exampleInputName">Kullanıcı Adı</label>
                <input type="text" onChange={_handleChange} ref={userName} className="form-control" id="exampleInputName" placeholder="Kullanıcı adınızı girin." />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" onChange={_handleChange} ref={password} className="form-control" id="exampleInputPassword1" placeholder="Şifre" />
            </div>
            <button onClick={_handleSubmit} type="submit" className="btn btn-danger">Giriş</button>
        </form>
    </div>
}

export default User;