import React from 'react';
import { connect } from 'react-redux';
const HotelList = ({ hotelsThis }) => {
    //hotelsThis.map(item => ()
    console.log(hotelsThis);
    return (
        <div className="container">
            {hotelsThis.map(item => (
                <div className="card mb-3" key={item._id}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={item.imageUrl} alt="foto" className="card-img"></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text"><small className="text-muted">{item.city}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        hotelsThis: state.app.selectedHotels
    };
}


export default connect(mapStateToProps)(HotelList);
