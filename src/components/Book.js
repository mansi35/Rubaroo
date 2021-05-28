import React from 'react'
import "../css/Book.css";

function Book({ pic, title }) {
    return (
        <div className = "book">
            <img src = { pic } />
            <h5>{ title }</h5>
        </div>
    )
}

export default Book
