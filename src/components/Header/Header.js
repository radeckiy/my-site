import React from 'react';
import './header.css';
import ProfImg from '../../res/Prof.jpg';

export default function Header() {
    return (
        <div className="col-md-3 col-lg-2 navbar-container bg-danger d-flex justify-content-center">
            <nav className="navbar navbar-expand-md navbar-dark">

                <img src={ ProfImg } alt="profileImage" className="rounded-circle prof-img" />
                <a className="navbar-brand"  href="#welcome"><i className="fas fa-home mr-2" />Radeckiy io</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#about-me" className="nav-link"><i className="fas fa-info-circle mr-2" />Обо мне</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contacts" className="nav-link"><i className="fas fa-address-book mr-2" />Контакты</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    );
}