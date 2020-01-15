import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Header from "./Header";

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
                    <Header name={`Bizi tercih ettiğiniz için teşekkür ederiz.`} />
                    {rezervationCheck[0].userName}


                </div>



                : <div>LOADING</div>
            }

        </div>
    );
};

export default withRouter(ThanksPage);