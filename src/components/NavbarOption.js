import React from 'react';
import '../css/NavbarOption.css';

function NavbarOption({ Icon, name }) {
    return (
        <div className = "navbarOption">
            <Icon />
            <h2>{ name }</h2>
        </div>
    )
}

export default NavbarOption
