import React, { useEffect, useState } from 'react'
import '../css/OrganizationSearch.css'
import SearchIcon from '@material-ui/icons/Search';
import UserCard from '../components/UserCard';
import Navbar from "../components/Navbar";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import BookIcon from '@material-ui/icons/Book';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router';
import db from '../firebase';

function Connect() {
    const { currentUser, logout } = useAuth();
    const [friends, setFriends] = useState([]);
    const [connections, setConnections] = useState([]);
    const history = useHistory();
    const navbarOptions = [
        {
            Icon: VideoCallIcon,
            name: "Video Call"
        },
        {
            Icon: BookIcon, 
            name: "Listen to a story"
        }, 
        {
            Icon: LocalLibraryIcon,
            name: "Library"
        }, 
        {
            Icon: EmojiEmotionsOutlinedIcon,
            name: "Watch Party"
        },
    ]

    async function handleSubmit() {
        try {
            await logout();
            history.push("/login");
        } catch {
            alert("Failed to log out");
        }
    }

    useEffect(() => {
        async function fetchData() {
            let org="";
            const doc = await db.collection('users').doc(currentUser.uid).get();
            org = doc.data().organizationName;
            console.log(org)
    
            const querySnapshot = await db.collection("organizations").where("organizationName", "==", org).get();
            querySnapshot.forEach((doc) => {
                db.collection("organizations").doc(doc.id).collection('friendOrganizations').get().then((snapshot) => {
                    snapshot.forEach((docc) => {
                        friends.push(docc.data().friendName);
                        // setFriends(friends => [...friends, docc.data().friendName]);
                        console.log(docc.data().friendName)
                    })
                });
            })
    
            db.collection('users').get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (friends.includes(doc.data().organizationName)) {
                        setConnections(connections => [...connections, {
                            connectionId: doc.id,
                            connection: doc.data(),
                        }])
                    }
                })
            });
        }
        fetchData();
        setFriends([]);
    // eslint-disable-next-line
    }, [])

    return (
        <div className="organizationSearch">
            <div className="row" style={{ padding: 0, margin: 0 }}>
                <div className="organizationSearch__sidebar col-md-3">
                    <Navbar options={navbarOptions} />
                </div>
                <div className="organizationSearch__body col-md-9">
                    <div className="organizationSearch__header">
                        <div className="organizationSearch__headerText">
                            <h1>Hey there {currentUser.displayName}!</h1>
                            <h6>So who do you want to connect with?</h6>
                        </div>
                        <div className="organizationSearch__searchbar">
                            <SearchIcon />
                            <input type="text" placeholder="Search for Users" />
                        </div>
                        <div onClick={handleSubmit} style={{cursor: "pointer"}}>
                            <ExitToAppIcon id="logOut"   style={{outline: "none"}} />
                        </div>
                    </div>
                    <div className="organizationSearch__organizations">
                        {connections.map(({ connectionId, connection }) => (
                            <UserCard 
                                key = {connectionId}
                                id = {connectionId}
                                emailAdd = {connection.emailAdd}
                                name = {connection.userName}
                                profilePic = {connection.profilePic}
                                category = {connection.category}
                                noUsers = {connection.organizationName}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Connect
