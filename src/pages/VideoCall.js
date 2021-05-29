import React from 'react';
import "../css/VideoCallPage.css";
import CallNavbar from "../components/CallNavbar";
import Video from "../components/Video";
import CallControls from "../components/CallControls"; 
import Navbar from "../components/Navbar";


function VideoCall() {
    return (
        <div className = "videoCall">
            

            <div className = "videoCall__navbar">
                <CallNavbar />
            </div>
            
            <div className = "videoCall__video">
                <Video />
            </div> 

            <div className = "videoCall__controls">
                <CallControls />
            </div>
        </div>
    )
}

export default VideoCall
