import React from 'react';
import "../css/CallControls.css";

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import CallEndOutlinedIcon from '@material-ui/icons/CallEndOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';

function CallControls() {
    return (
        <div className = "callControls">
            <div className = "send_reaction"> 
                <input type="text" placeholder="Send reaction... " />
            </div>

            <div className = "emojis">
                <ThumbUpAltOutlinedIcon size = "large"/>
                <SentimentVerySatisfiedOutlinedIcon />
                <SentimentSatisfiedOutlinedIcon />
                <FavoriteOutlinedIcon />
                <GradeOutlinedIcon />
            </div>

            <div className = "options">
                <CallEndOutlinedIcon />
                <VideocamOutlinedIcon />
                <VolumeUpOutlinedIcon />
            </div>
        </div>
    )
}

export default CallControls
