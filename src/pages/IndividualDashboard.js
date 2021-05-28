import React from 'react'
import Navbar from "../components/Navbar";
import Chats from "../components/Chats";
import Feed from "../components/Feed";

import VideoCallIcon from '@material-ui/icons/VideoCall';
import BookIcon from '@material-ui/icons/Book';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';

const navbarOptions = [
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
]

function IndividualDashboard() {
    return (
        <div className = "individualDashboard">
            <Navbar options={navbarOptions} />

            <Feed />

            <Chats />
        </div>
    )
}

export default IndividualDashboard
