import React, {useState,useEffect} from 'react';
import "../../css/Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {Avatar, IconButton} from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import db from '../../firebase';
import {useAuth} from '../../contexts/AuthContext';

function Sidebar() {
    const [friends, setFriends] = useState([]);
    const [connections, setConnections] = useState([]);
    const {currentUser} = useAuth();
    var profilePhoto = "";
    if (currentUser)
        profilePhoto = currentUser.photoURL;

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
            setConnections([]);
        // eslint-disable-next-line
        }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={profilePhoto} />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon style={{color: '#eff2f5'}} />
                    </IconButton>
                    <IconButton>
                        <ChatIcon style={{color: '#eff2f5'}} />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon style={{color: '#eff2f5'}} />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                {connections.map(room=> (
                    <SidebarChat key={room.connectionId} id={room.connectionId} name={room.connection.userName} profilePic={room.connection.profilePic} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
