import React from 'react'
import '../css/Chats.css'

import Chat from "./Chat";

function Chats() {
    return (
        <div className = "chats">
            <div className="row" style={{ padding: 0, margin: 0 }}>
                <div className="col-md-3" style = {{ padding: 0 }}>
                    <div className = "chat__header">
                        <span><h3>Your Chats</h3></span>
                    </div>
                    <Chat profilePic = "https://www.clipartkey.com/mpngs/m/106-1068026_clip-art-old-woman-old-woman-face-clipart.png" 
                    name = "granny1"
                    timestamp = "Today"
                    message = "Hello!"
                    />

                    <Chat profilePic = "https://clipart.world/wp-content/uploads/2020/06/happy-old-man-face.jpg"
                    name = "grandpa"
                    timestamp = "Today"
                    message = "Hi"
                    />
                </div>
            </div>
        </div>
    )
}

export default Chats
