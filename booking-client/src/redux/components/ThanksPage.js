import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import RezervationCard from "./RezervationCard";

const ThanksPage = ({ location }) => {

    const [rezervate, setRezervate] = useState();

    const rez = [rezervate];

    if (rez[0] !== undefined) {
        var rezervationCheck = rez[0].data.filter(item => {
            if (item.rezervationCode === location.state.rezCode) {
                return true;
            }
            return false;
        })
    }
    console.log(rezervationCheck)
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await fetch(`http://localhost:3000/rezervation/api/getData`)
                setRezervate(await result.json());
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    
    return (
        <div>
            {rezervationCheck !== undefined ?
                <div>
                    <div class="alert alert-success" role="alert">
                        Bizi tercih ettiğiniz için teşekkür ederiz.
                            <br />
                        <cite>Tekrar görüşmek dileğiyle..</cite>
                    </div>
                    <RezervationCard prop={rezervationCheck[0]}/>
                    <div class="alert alert-light" role="alert">
                        <cite> Rezervasyon kodunuzu lütfen saklayın.</cite>
                    </div>

                </div>
                : <div>LOADING</div>
            }

        </div>
    );
};

export default withRouter(ThanksPage);