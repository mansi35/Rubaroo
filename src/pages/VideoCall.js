import React from 'react';
import "../css/VideoCall.css";
import CallNavbar from "../components/CallNavbar";
import Video from "../components/Video";
import Controls from "../components"; 

function VideoCall() {
    return (
        <div className = "videoCall">
            <CallNavbar />
            <Video />
            <Controls />
        </div>
    )
}

export default VideoCall
