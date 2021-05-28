import React from 'react';
import './SideNavbar.css';
import './NavbarOption';

import VideoCallIcon from '@material-ui/icons/VideoCall';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


function SideNavbar() {
    return (
        <div className = "sideNavbar">
            <h1>Rubaroo</h1> 
            <NavbarOption Icon = {}/>
            <NavbarOption />
        </div>
    )
}

export default SideNavbar
