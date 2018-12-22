import React from 'react'

export default function Footer() {
    return (
        <nav className="navbar fixed-bottom navbar-light bg-light footer-center">
            <a className="navbar-brand font-special" href="." >
                James Won and Jimin 2018
            </a>
            <a href="mailto:jameswon.nz@gmail.com"><i className="far fa-envelope"> <span className="font-special">Email</span></i></a>
            <a href="tel:010-9585-2349"><i className="fas fa-phone"></i><span className="font-special">Call us</span></a>
        </nav>
    )
}
