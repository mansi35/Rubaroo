import React from 'react'
import Navbar from "../components/Navbar";
import Chats from "../components/Chats";

function IndividualDashboard() {
    return (
        <div className = "individualDashboard">
            <Navbar />

            {/* Feed */}

            <Chats />
        </div>
    )
}

export default IndividualDashboard
