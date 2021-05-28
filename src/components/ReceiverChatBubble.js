import React from 'react';
import "../css/ReceiverChatBubble";

function ReceiverChatBubble({ message }) {
    return (
        <div className = "receiverChatBubble">
            <p>{ message }</p>
        </div>
    )
}
export default ReceiverChatBubble
