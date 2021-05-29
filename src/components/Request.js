import React, { useEffect, useState } from 'react'
import '../css/OrganizationCard.css'
import db from '../firebase';
import {useAuth} from '../contexts/AuthContext';
import { Avatar } from '@material-ui/core';
import emailIcon from '../resources/email.png';
import likeIcon from '../resources/like-16x16(1).png';

function Request({key, id, emailAdd, name, profilePic, category, noUsers}) {
    const {currentUser} = useAuth();
    const [myCategory, setMyCategory] = useState('');
    const [myPopulation, setMyPopulation] = useState('');

    useEffect(() => {
        db.collection("organizations").doc(currentUser.uid).get().then((doc) => {
            setMyCategory(doc.data().category);
            setMyPopulation(doc.data().noUsers);
        })
    // eslint-disable-next-line
    }, [])

    const acceptRequest = (event) => {
        event.preventDefault();

        db.collection("organizations").doc(id).collection("friendOrganizations").doc(currentUser.uid).set({
            friendEmail: currentUser.email,
            friendName: currentUser.displayName,
            friendProfilePic: currentUser.photoURL,
            friendCategory: myCategory,
            friendNoUsers: myPopulation,
        });

        db.collection("organizations").doc(currentUser.uid).collection("friendOrganizations").doc(id).set({
            friendEmail: emailAdd,
            friendName: name,
            friendProfilePic: profilePic,
            friendCategory: category,
            friendNoUsers: noUsers,
        }).then(() => {
            db.collection("organizations").doc(currentUser.uid).collection("friendRequests").doc(id).delete();
        });
    }

    const declineRequest = (event) => {
        event.preventDefault();

        db.collection("organizations").doc(currentUser.uid).collection("friendRequests").doc(currentUser.uid).delete().then(() => {
            console.log("Item successfully deleted!");
        }).catch((error) => {
            console.error("Error removing item: ", error);
        });
    }

    return (
        <div class="card" style={{height: "fit-content"}}>
            <div class="card-header">
            </div>
            <div class="card-body">
                <div className='card-inline'><Avatar src={profilePic} />&nbsp;&nbsp;
                    <h3>{name}</h3>
                </div>
                <p><span><img src={likeIcon} alt="like" style={{height:16, width:16, marginRight:10}} /></span>{category} - {noUsers} users</p>
                <p style={{marginBottom:15, marginTop:15}}><span><img src={emailIcon} alt="like" style={{height:22, width:22, marginRight:5}} /></span>{emailAdd}</p>
                <button onClick={acceptRequest} style={{marginRight:20}}>Accept</button>
                <button onClick={declineRequest}>Decline</button>
            </div>
        </div>
    )
}

export default Request
