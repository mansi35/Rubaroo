import { Avatar } from '@material-ui/core';
import React from 'react'
import "../css/Chat.css";

function Chat({ profilePic, name, message, timestamp }) {
    return (
        <div className = "chat">
            <div className = "chat__top">
                <Avatar src = { profilePic } />
                <h3>{ name }</h3>
            </div>
            <div className = "chat__bottom">
                <p>{ timestamp }</p>
                {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
                <div className = "message">
                    <p>{ message }</p>
                </div>
            </div>
        </div>
    )
}

export default Chat
