import React from 'react'

function Post({ pic, author, title }) {
    return (
        <div>
            <img src = {pic} />
            <h5>{ title } by {author}</h5>
        </div>
    )
}

export default Post
