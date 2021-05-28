import React from 'react';
import '../css/NavbarOption.css';

function NavbarOption({ Icon, name }) {
    return (
        <div className = "navbarOption">
            <Icon />
            <h5>{ name }</h5>
        </div>
    )
}

export default NavbarOption
