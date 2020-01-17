import React, { useState } from 'react'
import RezervationDelete from "./RezervationDelete";
import RezervationUpdate from "./RezervationUpdate";

import { withRouter } from 'react-router-dom';
const RezervationCard = card => {
    console.log(card.prop)
    const [deleteMethod, setDeleteMethod] = useState("");
    const [updateMethod, setUpdateMethod] = useState("");
    const [showCard, setShowCard] = useState(true);
    const [showForm, setShowForm] = useState(true);
    const [showAlert, setShowAlert] = useState(true);

    const _handleDelete = () => {
        setDeleteMethod(true);
        setShowForm(false);
    }
    const _handleUpdate = () => {
        setUpdateMethod(true);
        setShowCard(false);
        setShowAlert(false);
        setShowForm(true)
    }
    console.log(deleteMethod);
    console.log(updateMethod);
    return (
        <div className="card-cont" >
            <div className="card" style={{display: showCard ? 'block' : 'none' }}>
                <div className="card-body">
                    <h5 className="card-title">Rezervasyon Kodu: {card.prop.rezervationCode}</h5>

                    <h6 className="card-subtitle mb-2 text-muted">Rezervasyon Sahibi: {card.prop.userName}</h6>
                    <p className="card-text">Kişi Sayısı: {card.prop.numberOfPerson}</p>
                    <button onClick={_handleUpdate} className="btn btn-outline-dark">Düzenle</button>
                    <button onClick={_handleDelete} className="btn btn-outline-dark">Sil</button>
                    <div class="alert alert-light" role="alert">
                        <strong>Dikkat</strong> Rezervasyon kodunuzu lütfen saklayın.
                    </div>
                </div>
            </div>
            {deleteMethod ? <div style={{display: showAlert ? 'block' : 'none' }}><RezervationDelete prop={card} /></div> : <div></div>}
            {updateMethod ? <div style={{display: showForm ? 'block' : 'none' }}><RezervationUpdate prop={card.prop} /></div> : <div></div>}
        </div>
    )

}
export default withRouter(RezervationCard);