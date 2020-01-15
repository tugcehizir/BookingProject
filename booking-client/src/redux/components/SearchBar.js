import React, { useState, useEffect } from 'react'
import { useDispatch, connect } from 'react-redux';

const SearchBar = ({ hotels }) => {
    const [currentValue, setCurrentValue] = useState("");
    const [currentSelect, setCurrentSelect] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            dispatch({ type: 'hotel/request' });
            try {
                const result = await fetch(`http://localhost:3000/hotel/api/getData`)
                console.log(result);
                const res = await result.json();

                dispatch({ type: 'hotel/success', data: res.data });
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [dispatch]);

    const _handleClick = async () => {

        const selectedHotels = hotels.filter(hotels => {

            return hotels.country === currentSelect;
        });
        console.log(selectedHotels);
        dispatch({ type: 'selectedHotel/success', data: selectedHotels });

    };

    const _handleChange = event => {

        setCurrentValue(event.target.value);
        change(currentValue); //en yakın seçenek getirildi.
        _handleClick();
    }

    const change = (currentValue) => {
        console.log(currentValue)

        const array = [];
        for (let i = 0; i < hotels.length; i++) {
            array.push(hotels[i].country);
        }

        for (let j = 0; j < array.length; j++) {
            const string = array[j]
            const obj = string.includes(currentValue);
            if (obj === true && currentValue !== "") {
                setCurrentSelect(array[j]);
                console.log(currentSelect)
            }
        }
    }

    return (
        <div className="search">
            <div className="input-group mb-3">
                <input onChange={_handleChange} className="form-control" placeholder="Hangi ülkeyi ziyaret etmek istersiniz?" aria-describedby="button-addon2" />
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        hotels: state.app.hotels
    };
}
export default connect(mapStateToProps)(SearchBar);