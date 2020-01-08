import React from 'react';
const RoomType = prop => {
    const hotels = [prop];
    console.log(hotels);
    return (
        <div>
            {hotels.map(item => (
                <div key={item.prop._id}>
                    {item.prop.room.map(obj => (
                        <div className="card mb-3" key={obj.code}>
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
        </div>
    )
};
export default RoomType;