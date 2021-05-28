import React from 'react'
import '../css/Chats.css'

import Chat from "./Chat";

function RightSideNavbar() {
    return (
        <div className = "RightSideNavbar">
            <h2>Your Chats</h2>
            <Chat profilePic = "https://www.clipartkey.com/mpngs/m/106-1068026_clip-art-old-woman-old-woman-face-clipart.png" 
            name = "granny1"
            timestamp = "Today"
            message = "Hello there!"
            />

            <Chat profilePic = "https://clipart.world/wp-content/uploads/2020/06/happy-old-man-face.jpg"
            name = "grandpa"
            timestamp = "Today"
            message = "Hi"
            />
        </div>
    )
}

export default RightSideNavbar
