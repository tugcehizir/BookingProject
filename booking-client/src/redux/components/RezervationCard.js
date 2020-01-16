import React from 'react'

const RezervationCard = card => {
    console.log(card)
    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Rezervasyon Kodu: {card.prop.rezervationCode}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Rezervasyon Sahibi: {card.prop.userName}</h6>
                    <p class="card-text">Kişi Sayısı: {card.prop.numberOfPerson}</p>
                    <a href="/thanks" class="card-link">Düzenle</a>
                    <a href="/thanks" class="card-link">Sil</a>
                </div>
            </div>
        </div>
    )

}
export default RezervationCard;