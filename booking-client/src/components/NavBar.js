import React from 'react'

const NavBar = (prop) => {
    console.log("isLogin", prop.isLogin, "prop", prop.user)
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href='/'>Ana Sayfa</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='/login'>Rezervasyon İşlemleri</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='/reservation'>Rezervasyonlarım</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='/login'>Giriş</a>
                </li>
            </ul>
        </div>
    )

}
export default NavBar;