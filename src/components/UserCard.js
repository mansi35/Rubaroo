import { Avatar } from '@material-ui/core'
import React from 'react'
import '../css/OrganizationCard.css'
import emailIcon from '../resources/email.png';
import likeIcon from '../resources/like-16x16(1).png';

function UserCard({ id, emailAdd, name, profilePic, category, noUsers }) {

    return (
        <div className="card"  style={{height: "fit-content"}}>
            <div className="card-header">
                
            </div>
            <div className="card-body">
                <div className='card-inline'>
                    <Avatar src={profilePic} />&nbsp;&nbsp;
                    <h5>{name}</h5>
                </div>
                <p><span><img src={likeIcon} alt="like" style={{height:16, width:16, marginRight:10}} /></span>{category} - {noUsers} users</p>
                <p><span><img src={emailIcon} alt="email" style={{height:22, width:22, marginRight:5}} /></span>{emailAdd}</p>
            </div>
        </div>
    )
}

export default UserCard
