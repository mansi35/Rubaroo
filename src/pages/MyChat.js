import React from 'react'
import Navbar from "../components/Navbar";
// import ChatWindow from "../components/ChatWindow";
// import Chats from "../components/Chats";
import '../App.css'

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import BookIcon from '@material-ui/icons/Book';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import Sidebar from '../components/chat/Sidebar';
import Chat from '../components/chat/Chat';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const navbarOptions = [
    {
        Icon: HomeOutlinedIcon,
        name: "Home",
        link: '/dashboard'
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
        Icon: EmojiEmotionsOutlinedIcon,
        name: "Watch Party",
        link: '/watch'
    },
    {
        Icon: ExitToAppIcon,
        name: "Log out",
        link: '/login'
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
                    <Chat />
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
