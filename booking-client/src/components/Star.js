import React from "react";

const Star = props => {
    const number = props.number;
    const star = [];
    for (let i = 0; i < number; i++) {
        star.push(
        <img className="stars" alt="yıldız" src="https://cdn2.iconfinder.com/data/icons/modifiers-add-on-1-flat/48/Mod_Add-On_1-35-512.png" />)
    }
    return (
        <div>
            {star}
        </div> 
    );
}
export default Star;