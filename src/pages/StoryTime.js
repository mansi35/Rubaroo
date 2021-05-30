import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar";
import "../css/IndividualDashboard.css";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import BookIcon from '@material-ui/icons/Book';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import Sidebar from '../components/chat/Sidebar';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import db from '../firebase';
import PostCard from '../components/PostCard';

const navbarOptions = [
    {
        Icon: ForumOutlinedIcon,
        name: "Chat"
    },
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

function StoryTime() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                post: doc.data()
            })))
        );
    }, [])
    return (
        <div className = "individualDashboard">
            <div className="row" style={{ padding: 0, margin: 0 }}>
                <div className="col-md-3" style={{ padding: 0 }}>
                    <Navbar options={navbarOptions} />
                </div>
                    {posts.map(({ id, post }) => (
                        <PostCard
                            key={id}
                            profilePic={post.profilePic}
                            message={post.message}
                            username={post.username}
                            image={post.image}
                        />
                    ))}
                <div className="col-md-3" style={{ padding: 0 }}>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default StoryTime
