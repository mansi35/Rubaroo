import React from 'react'

import Navbar from "../components/Navbar";
import Books from '../components/Books';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import BookIcon from '@material-ui/icons/Book';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';

const navbarOptions = [
    {
        Icon: HomeOutlinedIcon,
        name: "Home"
    },
    {
        Icon: ForumOutlinedIcon,
        name: "Chat"
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
]

function Library() {
    return (
        <div className = "library">

            <div className="row" style={{ padding: 0, margin: 0 }}>
                <div className="col-md-3" style={{ padding: 0 }}>
                    <Navbar options={navbarOptions} />
                </div>

                <div className = "col-md-9" style = {{ padding: 0 }}>
                    <Books />
                </div>
            </div>
            
        </div>
    )
}

export default Library
