import React from 'react';
import { Link, useLocation } from 'react-router';

const NavBar = () => {
    let location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to="/" end="true" className="navbar-brand">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" end="true" className={`nav-link${location.pathname === "/" ? " active" : ""}`} aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" end="true" className={`nav-link${location.pathname === "/about" ? " active" : ""}`}>About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;