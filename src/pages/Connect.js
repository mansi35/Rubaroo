import React, { useEffect, useState } from 'react'
import '../css/OrganizationSearch.css'
import SearchIcon from '@material-ui/icons/Search';
import OrganizationCard from '../components/OrganizationCard';
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
            db.collection('users').doc(currentUser.uid).get().then((doc) => {
                friends.push(doc.data().friendOrgs);
                setFriends(friends);
                console.log(doc.data().friendOrgs);
            }).then(() => {
                db.collection('users').get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        console.log(doc.data().organizationName);
                        if (friends.includes(doc.data().organizationName)) {
                            setConnections(connections => [...connections, {
                                connectionId: doc.id,
                                connection: doc.data(),
                            }])
                        }
                    })
                });
            })
        }
        fetchData();
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
                            <OrganizationCard 
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
