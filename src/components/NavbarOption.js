import React from 'react';
import '../css/NavbarOption.css';
import {Link} from "react-router-dom";

function NavbarOption({ Icon, name, link }) {
    return (
        <Link to = {link} >
        <div className = "navbarOption">
            <Icon />
            <h5>{ name }</h5>
        </div>
        </Link>
    )
}

export default NavbarOption
