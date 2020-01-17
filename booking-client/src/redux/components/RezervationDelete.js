import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const RezervationDelete = card => {

    const [alert, setAlert] = useState(true);
    const history = useHistory();
    console.log(card);
    const _handleDelete = () => {
        axios.delete('http://localhost:3000/rezervation/api/deleteRezervation/' + card.prop.prop._id)
            .then((res) => {
                console.log('Rezervation successfully deleted!')
                setAlert(false);

            }).catch((error) => {
                console.log(error)
            })
    }
    const _handleReject = () => {
        history.push({ pathname: '/' });
    }
    return <div>
        {(alert === true)
         ?(<div class="alert alert-secondary alert-dismissible fade show" role="alert">
            <strong>Bu kayıt silinecek.</strong> Devam edilsin mi?

            <button onClick={_handleDelete} type="button" class="btn btn-outline-dark">Sil</button>
            <button onClick={_handleReject} type="button" class="btn btn-outline-dark">İptal</button>
        </div>)
        : (
            <div class="alert alert-success" role="alert" >
                Silme işlemi başarılı!</div>)}

        </div>;
};
export default RezervationDelete;