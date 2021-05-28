import React from 'react';
import '../SideNavbar.css';
import NavbarOption from './NavbarOption';
import {ReactComponent as Party} from '../svg/undraw_Party_re_nmwj.svg';

import VideoCallIcon from '@material-ui/icons/VideoCall';
import BookIcon from '@material-ui/icons/Book';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


function SideNavbar() {
    return (
        <div className = "sideNavbar col-md-3">
            <h1>Rubaroo</h1> 
            
            <NavbarOption Icon = {VideoCallIcon} name = "Video Call" />
            <NavbarOption Icon = {BookIcon} name = "Listen to a story" />
            <NavbarOption Icon = {LocalLibraryIcon} name = "Library" />
            <NavbarOption Icon = {InsertEmoticonIcon} name = "Watch Party" />
            
            <Party />

        </div>
    )
}

export default SideNavbar
