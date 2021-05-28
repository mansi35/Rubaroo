import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import "../css/ChatWindow.css";
import SenderChatBubble from "./SenderChatBubble";
import ReceiverChatBubble from "./ReceiverChatBubble";

import MoodIcon from '@material-ui/icons/Mood';
import MicNoneIcon from '@material-ui/icons/MicNone';
import SendIcon from '@material-ui/icons/Send';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';

function ChatWindow() {
    return (
        <div className = "chatWindow">
            <div className = "chat__header">
                <div className = "pic__name">
                <Avatar src = "https://www.clipartkey.com/mpngs/m/106-1068026_clip-art-old-woman-old-woman-face-clipart.png" />
                <h3>Granny</h3>
                </div>

                <div className = "chat__trivia">
                    <div className = "chat__videocall">
                        <VideoCallOutlinedIcon />
                    </div>

                    <div className = "chat__gaming">
                        <SportsEsportsOutlinedIcon />
                    </div>
                </div>
            </div>

            <div className = "chat__body">
                {/* <div className = "chat__time">
                    <p>Today</p>
                </div> */}

                <div className = "chat__content">
                    <SenderChatBubble message = "Hello How are you?" />
                </div>

                <div className = "chat__content">
                    <ReceiverChatBubble message = "Hi" />
                </div>

                <div className = "chat__content">
                    <SenderChatBubble message = "Good." />
                </div>
            </div>

            <div className = "chat__input">
                <MoodIcon />
                <MicNoneIcon />
                <div className = "message__input"> 
                <form>
                    <input type = "text"
                        placeholder = "Enter your message"
                    />
                </form>
                </div>
                <button type = "submit"><SendIcon /></button>
            </div>
        </div>
    )
}

export default ChatWindow
