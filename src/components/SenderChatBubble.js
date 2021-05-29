import React from 'react';
import "../css/SenderChatBubble.css";

function SenderChatBubble({ message }) {
    return (
        <div className = "senderChatBubble">
            <p>{message}</p>
        </div>
    )
}

export default SenderChatBubble
