import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>  
                        </li>
                    </ul>
                    <div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" onClick={props.RedMode} type="checkbox" id="inlineCheckbox1" value="option1"/>
                            <label class ="form-check-label" htmlFor="inlineCheckbox1">Red</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" onClick={props.GreenMode} type="checkbox" id="inlineCheckbox2" value="option2"/>
                            <label class ="form-check-label" htmlFor="inlineCheckbox2">Green</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" onClick={props.BlueMode} type="checkbox" id="inlineCheckbox2" value="option2"/>
                            <label class ="form-check-label" htmlFor="inlineCheckbox2">Blue</label>
                        </div>
                    </div>
                    <div className={`form-check form-switch text-${props.text}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label  mx-2" htmlhtmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    about: PropTypes.string.isRequired,
    title: PropTypes.string
};

Navbar.defaultProps = {
    title: 'Stranger'
};