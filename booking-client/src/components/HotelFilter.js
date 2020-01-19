import React from "react";
import Star from "./Star"

const HotelFilter = () => {

    let list = [];

    for (let i = 1; i < 6; i++) {
        list.push(<ul key={i}><Star number={i} /></ul>)
    }
    return (
        <div className="filter">
            <ul>{list}</ul>
        </div >
    )
};
export default HotelFilter;