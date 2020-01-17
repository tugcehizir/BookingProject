import React, { useEffect } from 'react'
import { useDispatch, connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ReservationPage = ({ reservation }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await fetch(`http://localhost:3000/reservation/api/getData`)
                console.log(result);
                const res = await result.json();

                dispatch({ type: 'reservation/success', data: res.data });
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [dispatch]);
    //onClick={() => _onClick(item._id)}
    console.log(reservation);

    const getPrice = (person, price) => {
        return person * price
    }
    return (
        <div className="container">
            {reservation.map(item => (
                <div className="card mb-3" key={item._id} >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={item.room[0].imageUrl} alt="foto" className="card-img"></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.room[0].name}</h5>
                                <h6 className="card-text">Rezervasyon yapan kullanıcı: {item.userName}</h6>
                                <h6 className="card-text">Kişi Sayısı: {item.numberOfPerson}</h6>
                                <h6 className="card-text">Ödenecek Ücret: {getPrice(item.numberOfPerson, item.room[0].price)}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

};
const mapStateToProps = (state) => {
    return {
        reservation: state.app.reservation
    };
}

export default withRouter(connect(mapStateToProps)(ReservationPage));