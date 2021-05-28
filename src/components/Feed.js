import React from 'react';
import Post from "./Post";
import "../css/Feed.css";

function Feed() {
    return (
        <div className = "feed">
            <h2>Hey, there <strong>User</strong> </h2>
            <h6>World’s a party with you in it! What do you want to do today?</h6>
            <h4>Continue Listening</h4>
            
            <Post pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm8qwTwpcYNK2E0ad_n89l1UfJStUmzaJKA&usqp=CAU" 
            author = "Grandpa" title = "Story session" />

        </div>
    )
}

export default Feed
