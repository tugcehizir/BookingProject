import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import ReservationCard from "./ReservationCard";

const ThanksPage = ({ location }) => {

    const [reservate, setReservate] = useState();

    const res = [reservate];

    if (res[0] !== undefined) {
        var reservationCheck = res[0].data.filter(item => {
            if (item.resCode === location.state.resCode) {
                return true;
            }
            return false;
        })
    }
    console.log(reservationCheck)
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await fetch(`http://localhost:3000/reservation/api/getData`)
                setReservate(await result.json());
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {reservationCheck !== undefined ?
                <div>
                    <div class="alert alert-success" role="alert">
                        Bizi tercih ettiğiniz için teşekkür ederiz.
                            <br />
                        <cite>Tekrar görüşmek dileğiyle..</cite>
                    </div>
                    <ReservationCard prop={reservationCheck[0]} />


                </div>
                : <div>LOADING</div>
            }

        </div>
    );
};

export default withRouter(ThanksPage);