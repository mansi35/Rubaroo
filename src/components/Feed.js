import React from 'react';
import Post from "./Post";
import "../css/Feed.css";

function Feed() {
    return (
        <div className = "feed">
            <div className="row" style={{ padding: 0, margin: 0 }}>
                <div className="col-md-8" style={{ paddingTop: 20 }}>
                    <div className = "feed__header">
                        <h2>Hey, there <strong>User</strong>! </h2>
                    </div>
                    <div className = "feed__subheader">
                        <h6>World’s a party with you in it! What do you want to do today?</h6>
                    </div>
                    <div className = "feed__starter">
                        <h4>Continue Listening</h4>
                    </div>
                    
                    <Post pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm8qwTwpcYNK2E0ad_n89l1UfJStUmzaJKA&usqp=CAU" 
                    author = "Grandpa" title = "Story session" />
                
                </div>
            </div>

        </div>
    )
}

export default Feed
