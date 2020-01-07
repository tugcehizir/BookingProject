import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { withRouter, useHistory } from 'react-router-dom';

const HomePage = ({ hotels }) => {
    console.log(hotels);
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

    const history = useHistory();
    const _onClick = id => {
        history.push({ pathname: '/detail', state: { hotelId: id } }); //Bu fonksiyona verilen path'e yönlendirir.
    }

    return (
        <div className="container">
            {hotels.map(item => (
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
        hotels: state.app.hotels
    };
}
export default withRouter(connect(mapStateToProps)(HomePage));