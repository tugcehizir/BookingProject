import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReservationCard from "./ReservationCard";

const ThanksPage = () => {
    const location = useLocation();

    const [reservate, setReservate] = useState();

    const res = [reservate];
    console.log("rss", res)
    console.log("location.state.resCode", location.state.resCode)
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
                const res = await result.json();
                setReservate(res)
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [location.state.resCode]);
    console.log("reservationCheck", reservationCheck)
    return (

        <div>
            {(reservationCheck !== undefined && reservationCheck.length > 0) ?
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

        </div>)

};

export default ThanksPage;