import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, connect } from 'react-redux';
import RezervationCard from "./RezervationCard";

const RezervationQuery = ({ rezervation }) => {
    console.log(rezervation);
    const dispatch = useDispatch();

    const [currentValue, setCurrentValue] = useState("");
    
    let currentCode = useRef();

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await fetch(`http://localhost:3000/rezervation/api/getData`)
                console.log(result);
                const res = await result.json();
                dispatch({ type: 'selectedRezerve/success', data: res.data });
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
    var selectedCode = rezervation.filter(obj => {
        return obj.rezervationCode === currentValue;
    });
    const handleClick = event => {
        event.preventDefault();
    }

    return (
        <div className="search">
            <div className="input-group mb-3">
                <input onChange={handleChange} ref={currentCode} className="form-control" placeholder="Rezervasyon kodunuzu girin." aria-describedby="button-addon2" />
                <button onClick={handleClick} type="button" class="btn btn-outline-danger">Göster</button>
                {selectedCode[0] !== undefined ?
                <RezervationCard prop={selectedCode[0]} />
                : <div>OPS!</div>
                }
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        rezervation: state.app.selectedRezerve
    };
}
export default connect(mapStateToProps)(RezervationQuery);