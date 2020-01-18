import React from 'react';
import { connect, useDispatch } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom';

const RoomType = room => {
    const dispatch = useDispatch();
    console.log(room);
    const rooms = [room.room];
    const history = useHistory();
    const _onClick = id => {
        console.log("Burası id", id)

        dispatch({ type: 'selectedRoom/success', data: id });
        history.push({ pathname: '/login' });
    }
    return (
        <div>
            <div>
                {rooms.map(item => (
                    <div key={item} >
                        {item.map(obj => (
                            <div className="card mb-3" key={obj.code} onClick={() => _onClick(obj._id)}>
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src={obj.imageUrl} alt="foto" className="card-img"></img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{obj.name}</h5>
                                            <p className="card-text">{obj.description}</p>
                                            <p className="card-text"><small className="text-muted">Tek gecelik fiyat:{obj.price}TL</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div> </div>
    )
};
const mapStateToProps = (state) => {
    return {
        room: state.app.rooms
    };
}
export default withRouter(connect(mapStateToProps)(RoomType));
