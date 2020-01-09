import React from 'react'

const NavBar = () => {

    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href='/'>Ana Sayfa</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='/search'>Arama </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='/rezervation'>Rezervasyonlar</a>
                </li>
                
            </ul>
        </div>
    )

}
export default NavBar;