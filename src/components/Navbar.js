import React from 'react';
import '../css/Navbar.css';
import NavbarOption from './NavbarOption';
import {ReactComponent as Party} from '../svg/undraw_Party_re_nmwj.svg';

function SideNavbar({ options }) {
    return (
        <div className = "sideNavbar">
            <h1 className="mx-auto">Rubaroo</h1> 

            {options.map(option => {
                return <NavbarOption 
                    Icon = {option.Icon} 
                    name = {option.name} />
                }
            )}
            <Party />
        </div>
    )
}

export default SideNavbar
