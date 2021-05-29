import React, {useEffect, useState} from 'react';
import "../../css/SidebarChat.css";
import {Avatar} from "@material-ui/core";
import db from "../../firebase";
import {Link} from "react-router-dom";

function SidebarChat({id, name, profilePic}) {
    const [messages, setMessages] = useState("");

    useEffect(() => {
        if(id) {
            db.collection('users').doc(id).collection('friendMessages').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map((doc) => doc.data())))
            );
        }
    // eslint-disable-next-line
    }, [id])

    return (
        <div className="chat__side">
            <Link to={`/chat/rooms/${id}/${2}`} key={id}>
                <div className="sidebarChat">
                    <Avatar src={profilePic}/>
                    <div className="sidebarChat__info">
                        <h2 style={{color: '#440a67'}}>{name}</h2>
                        <p>{messages[0]?.message}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SidebarChat
