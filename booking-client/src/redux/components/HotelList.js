import React from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';

const HotelList = ({ hotelsThis}, props ) => {
    const history = useHistory();
    const _onClick = id => {
        history.push({pathname: '/detail', state: {hotelId: id}}); //Bu fonksiyona verilen path'e yönlendirir.
    }
    
    console.log(props.name);
    return (
        <div className="container">
            {hotelsThis.map(item => (
                <div className="card mb-3" key={item._id} onClick={() => _onClick(item._id)}>
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


export default withRouter(connect(mapStateToProps)(HotelList));
