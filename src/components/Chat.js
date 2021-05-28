import { Avatar } from '@material-ui/core';
import React from 'react'
import "../css/Chat.css";

function Chat({ profilePic, name, message, timestamp }) {
    return (
        <div class = "chat">
            <div className = "chat__top">
                <Avatar src = { profilePic } />
                <h2>{ name }</h2>
            </div>
            <div className = "chat__bottom">
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                <p>{ message }</p>
            </div>
        </div>
    )
}

export default Chat
