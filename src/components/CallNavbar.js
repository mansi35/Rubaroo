import React from 'react';
import { Avatar } from '@material-ui/core';
import "../css/CallNavbar.css";

function CallNavbar() {
    return (
        <div className = "callNavbar">
            <div className="userProfile">
                <Avatar src="../resources/granny.png" />
                <h2>Mrs Granny</h2>
            </div>

            <div className="video_call">
                <h1>Video Call</h1>
            </div>
        </div>
    )
}

export default CallNavbar
