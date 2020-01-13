import React, { useEffect } from 'react'
import { useDispatch, connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const RezervationPage = ({ rezervation }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await fetch(`http://localhost:3000/rezervation/api/getData`)
                console.log(result);
                const res = await result.json();

                dispatch({ type: 'rezervation/success', data: res.data });
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [dispatch]);

    console.log(rezervation);
    return (
        <div className="container">
            {rezervation.map(item => (
                <div className="card mb-3" key={rezervation._id}>
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.userName}</h5>
                                <p className="card-text">{item.userMail}</p>
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
        rezervation: state.app.rezervation
    };
}

export default withRouter(connect(mapStateToProps)(RezervationPage));