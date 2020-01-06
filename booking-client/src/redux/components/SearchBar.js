import React, { useState, useEffect } from 'react'
import { useDispatch, connect } from 'react-redux';

const SearchBar = ({ hotels }) => {
    const [currentValue, setCurrentValue] = useState("");
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
    }, []);

    const _handleClick = async () => {

        const selectedHotels = hotels.filter(hotels => {
            return hotels.city === currentValue;
        });
        console.log(selectedHotels);
        dispatch({ type: 'selectedHotel/success', data: selectedHotels });

    };

    const _handleChange = event => {
        setCurrentValue(event.target.value);
        console.log(currentValue);
    }


    return (
        <div className="SearchBar">
            <input onChange={_handleChange} />
            <button onClick={_handleClick}>Tıkla</button>
        </div>

    )

}

const mapStateToProps = (state) => {
    return {
        hotels: state.app.hotels
    };
}
export default connect(mapStateToProps)(SearchBar);