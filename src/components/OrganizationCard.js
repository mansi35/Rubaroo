import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext';
import '../css/OrganizationCard.css'
import db from '../firebase';
import emailIcon from '../resources/email.png';
import likeIcon from '../resources/like-16x16(1).png';

function OrganizationCard({ id, emailAdd, name, profilePic, category, noUsers }) {
    const {currentUser} = useAuth();
    const [alreadyFriend, setAlreadyFriend] = useState(false);
    const [requestSent, setRequestSent] = useState(false);
    const [myCategory, setMyCategory] = useState('');
    const [myPopulation, setMyPopulation] = useState('');

    useEffect(() => {
        db.collection('organizations').doc(currentUser.uid).collection("friendOrganizations").doc(id).get().then((doc) => {
            if (doc.exists) {
                setAlreadyFriend(true);
            }
        })
        db.collection('organizations').doc(id).collection("friendRequests").doc(currentUser.uid).get().then((doc) => {
            if (doc.exists) {
                setRequestSent(true);
            }
        })
    // eslint-disable-next-line
    }, [])

    useEffect(() => {
        db.collection("organizations").doc(currentUser.uid).get().then((doc) => {
            setMyCategory(doc.data().category);
            setMyPopulation(doc.data().noUsers);
        })
    // eslint-disable-next-line
    }, [])

    const sendRequest = (event) => {
        event.preventDefault();

        db.collection("organizations").doc(id).collection("friendRequests").doc(currentUser.uid).set({
            requestName: currentUser.displayName,
            requestEmail: currentUser.email,
            requestPic: currentUser.photoURL,
            requestCategory: myCategory,
            requestNoUsers: myPopulation,
            requestAccepted: false
        });
    }

    if (currentUser.email === emailAdd) {
        return (
            <div style={{display:'none'}}>
            </div>
        )
    }
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
                {
                    (()=>{
                        if (alreadyFriend) {
                            return (
                                <p><br />👩🏻‍🤝‍🧑🏻 Friends</p>
                            )
                        }
                        else if (requestSent) {
                            return (
                                <p><br />Friend Request Sent!</p>
                            )
                        }
                        else {
                            return (
                                <button onClick={sendRequest}>Add Friend</button>
                            )
                        }
                    })()
                }
            </div>
        </div>
    )
}

export default OrganizationCard
