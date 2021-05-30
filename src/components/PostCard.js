import { Avatar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import '../css/OrganizationCard.css'

function PostCard({ profilePic, message, username, image, title, link }) {
    if (link) {
        return (
            <div className="card"  style={{height: "fit-content"}}>
                <div className="card-header">
                {image ? <img src={image} alt="" /> : null}
                </div>
                <div className="card-body">
                    <div className='card-inline'>
                        <h5>{title}</h5>
                    </div>
                    <p>{message}</p>
                    <div className='card-inline' style={{justifyContent: "flex-end"}}>
                        <Avatar src={profilePic} style={{height: "25px", width:"25px"}} />&nbsp;&nbsp;
                        <h6 style={{margin: 0}}>{username}</h6>
                    </div>
                    <Link to={`/room/${link}`}>
                        <button>Join Session</button>
                    </Link>
                </div>
            </div>
        )
    }
    return (
        null
    )
}

export default PostCard
