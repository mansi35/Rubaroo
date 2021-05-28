import React from 'react';
import "../css/Post.css";

function Post({ pic, author, title }) {
    return (
        <div className = "post">
            <div className = "post__title">
                <h5>{ title } by {author}</h5>
            </div>
            <div className = "post__pic">
                <img src = {pic} />
            </div>
        </div>
    )
}

export default Post
