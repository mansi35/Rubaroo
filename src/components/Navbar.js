import React from 'react';
import '../LeftSideNavbar.css';
import NavbarOption from './NavbarOption';
import {ReactComponent as Party} from '../svg/undraw_Party_re_nmwj.svg';

function SideNavbar({ options }) {
    return (
        <div className = "sideNavbar col-md-3">
            <h1>Rubaroo</h1> 

            {options.map(option => {
                return <NavbarOption 
                    Icon = {option.Icon} 
                    name = {option.name} />
            })}
            
            <Party />

        </div>
    )
}

export default SideNavbar
