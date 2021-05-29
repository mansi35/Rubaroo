import React from 'react'
import "../css/Book.css";

function Book({ pic, title }) {
    return (
        <div className = "book">
            <img src = { pic } alt="" />
            <h5>{ title }</h5>
        </div>
    )
}

export default Book
