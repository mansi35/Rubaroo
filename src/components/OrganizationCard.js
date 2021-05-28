import { Avatar } from '@material-ui/core'
import React from 'react'
import '../css/OrganizationCard.css'

function OrganizationCard({ id, emailAdd, name, profilePic }) {
    return (
        <div className="card"  style={{height: "fit-content"}}>
            <div className="card-header">
                
            </div>
            <div className="card-body">
                <div className='card-inline'>
                    <Avatar src={profilePic} />&nbsp;&nbsp;
                    <h5>{name}</h5>
                </div>
                <button>Add Friend</button>
            </div>
        </div>
    )
}

export default OrganizationCard
