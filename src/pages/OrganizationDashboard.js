import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import db from '../firebase';
import {useAuth} from '../contexts/AuthContext';
import { Avatar } from "@material-ui/core";
import emailIcon from '../resources/email.png';
import likeIcon from '../resources/like-16x16(1).png';
import OrganizationCard from "../components/OrganizationCard";

function OrganizationDashboard() {
    const history = useHistory();
    const [friends, setFriends] = useState([]);
    const { currentUser} = useAuth();
    const [category, setCategory] = useState('')
    const [noUsers, setNoUsers] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')

    useEffect(() => {
        if (currentUser) {
            db.collection("organizations").doc(currentUser.uid).get().then(docc => {
                const data = docc.data();
                setPhoneNumber(data.phoneNumber);
                setCategory(data.category);
                setNoUsers(data.noUsers);
            });
        }
    })

    useEffect(() => {
        db.collection("organizations").doc(currentUser.uid).collection("friendOrganizations")
        .onSnapshot((snapshot) => 
            setFriends(snapshot.docs.map((doc) => ({
                friendId: doc.id,
                friend: doc.data()
            })))
        );
    // eslint-disable-next-line
    }, [])

    const goToUpdateProfile = () => {
      let path = `/update-profile`;
      history.push(path);
    }

  return (
    <div>
    <div className="row" style={{width: "99%"}}>
      <div className="col-md-8" style={{alignItems: "center"}}>
      <h2 className="users-heading">Your Profile</h2>
      <div class="card" style={{width:"68.7%", height: "600px", marginLeft: "15%"}}>
            <div class="card-header" style={{height: "300px"}}>
                
            </div>
            <div class="card-body" style={{width:"100%", paddingRight:20}}>
                <div className='card-inline'><Avatar src={currentUser.photoURL} />&nbsp;&nbsp;
                    <h3>{currentUser.displayName}</h3>
                </div>
                <p><span><img src={likeIcon} alt="like" style={{height:16, width:16, marginRight:10}} /></span>{category} - {noUsers} users</p>
                <p><span><img src={emailIcon} alt="like" style={{height:22, width:22, marginRight:5, marginTop:5}} /></span>{currentUser.email}</p>
                <p><span><img src="https://img.icons8.com/ultraviolet/40/000000/phone.png" style={{height:22, width:22, marginRight:5, marginTop:5}} alt="" /></span>{phoneNumber}</p>
                <button onClick={goToUpdateProfile} style={{marginTop:20}}>Update Profile</button>
            </div>
      </div>
      </div>
      <div className="col-md-4">
      <h2 className="users-heading">Your Friend Organizations <span><img src="https://img.icons8.com/emoji/48/000000/purple-heart.png" alt="emoji" />
        <img src="https://img.icons8.com/color/48/000000/friends-hanging-out.png" alt="emoji" /></span></h2>
      <div className="user__row">
      {friends.map(({ friendId, friend }) => (
          <OrganizationCard 
            key = {friendId}
            id = {friendId}
            emailAdd = {friend.friendEmail}
            name = {friend.friendName}
            profilePic = {friend.friendProfilePic}
            category = {friend.friendCategory}
            noUsers = {friend.friendNoUsers}
        />
      ))}
      </div>
      </div>
    </div>
    </div>
  );
}

export default OrganizationDashboard;
