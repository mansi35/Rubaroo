import { Avatar } from '@material-ui/core';
import React from 'react';
import "../css/ChatWindow.css";
import SenderChatBubble from "./SenderChatBubble";
// import ReceiverChatBubble from "./ReceiverChatBubble";

function ChatWindow() {
    return (
        <div className = "chatWindow">
            <div className = "chat__header">
                <Avatar src = "https://www.clipartkey.com/mpngs/m/106-1068026_clip-art-old-woman-old-woman-face-clipart.png" />
                <h3>Granny</h3>
            </div>

            <div className = "chat__body">

                <div className = "chat__content">
                    <SenderChatBubble message = "Hello How are you?" />
                </div>

                {/* <ReceiverChatBubble message = "Hi" color = "#F07167" /> */}
            </div>

            <div className = "chat__input">
            
            </div>
        </div>
    )
}

export default ChatWindow
