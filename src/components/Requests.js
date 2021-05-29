import React, { useEffect, useState } from "react";
import '../css/OrganizationSearch.css'
import Request from './Request';
import db from '../firebase';
import {useAuth} from '../contexts/AuthContext';


function Requests() {
    const {currentUser} = useAuth();
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        db.collection("organizations").doc(currentUser.uid).collection("friendRequests")
        .onSnapshot((snapshot) => 
            setFriends(snapshot.docs.map((doc) => ({
                requestId: doc.id,
                request: doc.data()
            })))
        );
    // eslint-disable-next-line
    }, [])

    return (
    <div>
        <div className="organizationSearch__organizations">
            {friends.map(({ requestId, request }) => (
                <Request 
                    key = {requestId}
                    id = {requestId}
                    emailAdd = {request.requestEmail}
                    name = {request.requestName}
                    profilePic = {request.requestPic}
                    category = {request.requestCategory}
                    noUsers = {request.requestNoUsers}
                />
            ))}
        </div>
    </div>
  );
}

export default Requests;