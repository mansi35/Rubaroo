import { Avatar } from '@material-ui/core'
import React from 'react'
import '../css/OrganizationCard.css'

function PostCard({ profilePic, message, username, image }) {

    return (
        <div className="card"  style={{height: "fit-content"}}>
            <div className="card-header">
            {image ? <img src={image} alt="" /> : null}
            </div>
            <div className="card-body">
                <div className='card-inline'>
                    <Avatar src={profilePic} />&nbsp;&nbsp;
                    <h5>{username}</h5>
                </div>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default PostCard
