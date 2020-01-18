import api from "./api";

export const updateReservation = (data) => {
    return api.put('/reservation/api/updateReservation/' + data.id, data)
}

export const getReservation = () => {
    return api.get('/reservation/api/getData/')
}

export const postReservation = (data) => {
    return api.post('/reservation/api/createReservation/', data)
}

export const deleteReservation = (data) => {
    return api.delete('/reservation/api/deleteReservation/' + data, data)
}