import { Avatar } from '@material-ui/core';
import React from 'react'
import "../css/Chat.css";

function Chat({ profilePic, name, message, timestamp }) {
    return (
        <div class = "chat">
            <Avatar src = {profilePic} />
            
        </div>
    )
}

export default Chat
