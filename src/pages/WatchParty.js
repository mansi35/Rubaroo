import React from 'react'

import Navbar from "../components/Navbar";
import Movies from '../components/Movies';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import BookIcon from '@material-ui/icons/Book';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const navbarOptions = [
    {
        Icon: HomeOutlinedIcon,
        name: "Home",
        link: '/dashboard'
    },
    {
        Icon: ForumOutlinedIcon,
        name: "Chat",
        link: '/chat'
    },
    {
        Icon: VideoCallIcon,
        name: "Video Call",
        link: '/connect',
    },
    {
        Icon: BookIcon, 
        name: "Listen to a story",
        link: '/dashboard'
    }, 
    {
        Icon: LocalLibraryIcon,
        name: "Library",
        link: '/library'
    }, 
    {
        Icon: ExitToAppIcon,
        name: "Log out",
        link: '/login'
    }
]

function WatchParty() {
    return (
        <div className = "watchParty">

            <div className="row" style={{ padding: 0, margin: 0 }}>
                <div className="col-md-3" style={{ padding: 0 }}>
                    <Navbar options={navbarOptions} />
                </div>

                <div className = "col-md-9" style = {{ padding: 0 }}>
                    <Movies />
                </div>
            </div>
            
        </div>
    )
}

export default WatchParty
