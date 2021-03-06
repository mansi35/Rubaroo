import React from 'react'
import Navbar from "../Navbar";
import '../../App.css'

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import BookIcon from '@material-ui/icons/Book';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import Sidebar from './Sidebar';
import ChatEmpty from './ChatEmpty';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const navbarOptions = [
    {
        Icon: HomeOutlinedIcon,
        name: "Home"
    },
    {
        Icon: VideoCallIcon,
        name: "Video Call"
    },
    {
        Icon: BookIcon, 
        name: "Listen to a story"
    }, 
    {
        Icon: LocalLibraryIcon,
        name: "Library"
    }, 
    {
        Icon: EmojiEmotionsOutlinedIcon,
        name: "Watch Party"
    },
    {
        Icon: ExitToAppIcon,
        name: "Logout"
    }
]

function MyChat() {
    return (
        <div className = "chat__ui" style={{width: "100vw"}}>
            <div className="row" style={{ padding: 0, margin: 0 }}>
                <div className="col-md-3" style={{ padding: 0 }}>
                    <Navbar options={navbarOptions} />
                </div>
                <div className="app col-md-6">
                <div className="app__body">
                    <ChatEmpty />
                </div>
                </div> 
                <div className="app col-md-3">
                <div className="app__body">
                    <Sidebar />
                </div>
                </div>   
            </div>
        </div>
    )
}

export default MyChat
