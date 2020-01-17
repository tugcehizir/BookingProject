import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, connect } from 'react-redux';
import ReservationCard from "./ReservationCard";

const ReservationQuery = ({ reservation }) => {
    console.log(reservation);
    const dispatch = useDispatch();

    const [currentValue, setCurrentValue] = useState("");

    let currentCode = useRef();

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await fetch(`http://localhost:3000/reservation/api/getData`)
                console.log(result);
                const res = await result.json();
                dispatch({ type: 'selectedReserve/success', data: res.data });
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [dispatch]);

    const handleChange = event => {
        setCurrentValue(currentCode.current.value);
    }
    var selectedCode = reservation.filter(obj => {
        return obj.resCode === currentValue;
    });
    const handleClick = event => {
        event.preventDefault();
    }

    return (
        <div className="search">
            <div className="input-group mb-3">
                <input onChange={handleChange} ref={currentCode} className="form-control" placeholder="Rezervasyon kodunuzu girin." aria-describedby="button-addon2" />
                <button onClick={handleClick} type="button" className="btn btn-outline-danger">Göster</button>
                {selectedCode[0] !== undefined ?
                    <ReservationCard prop={selectedCode[0]} />
                    :
                    <div className="spinner-border text-danger">
                    <span className="sr-only">Devam edin.</span></div>
              
                }
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        reservation: state.app.selectedReserve
    };
}
export default connect(mapStateToProps)(ReservationQuery);