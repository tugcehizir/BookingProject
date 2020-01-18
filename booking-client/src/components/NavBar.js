import React from 'react'

const NavBar = () => {

    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href='/'>Ana Sayfa</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='/login'>Rezervasyon İşlemleri</a>
                </li>
            </ul>
        </div>
    )

}
export default NavBar;