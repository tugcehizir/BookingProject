import React from 'react'
import { useDispatch } from 'react-redux';

const SearchBar = () => {
    const dispatch = useDispatch();

    const _handleClick = async () => {
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
    };
    return (
        <div className="SearchBar">
            <button onClick={_handleClick}>Search</button>
        </div>

    )

}

export default SearchBar;