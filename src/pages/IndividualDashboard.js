import React from 'react'
import Navbar from "../components/Navbar";
import Feed from "../components/social/Feed";
import "../css/IndividualDashboard.css";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import BookIcon from '@material-ui/icons/Book';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import Sidebar from '../components/chat/Sidebar';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const navbarOptions = [
    {
        Icon: ForumOutlinedIcon,
        name: "Chat",
        link: '/chat',
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

function IndividualDashboard() {
    return (
        <div className = "individualDashboard">
            <div className="row" style={{ padding: 0, margin: 0 }}>
                <div className="col-md-3" style={{ padding: 0 }}>
                    <Navbar options={navbarOptions} />
                </div>

                <div className = "col-md-6" style = {{ padding: 0 }}>
                    <Feed />
                </div>
                <div className="col-md-3" style={{ padding: 0 }}>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default IndividualDashboard
