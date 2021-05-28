import React, { useEffect, useState } from 'react'
import '../css/OrganizationSearch.css'
import SearchIcon from '@material-ui/icons/Search';
import OrganizationCard from '../components/OrganizationCard';
import Navbar from "../components/Navbar";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import BookIcon from '@material-ui/icons/Book';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router';
import db from '../firebase';

function OrganizationSearch() {
    const { currentUser, logout } = useAuth();
    const history = useHistory();
    const navbarOptions = [
        {
            Icon: VideoCallIcon,
            name: "Near You"
        },
        {
            Icon: BookIcon, 
            name: "Number of people in your organization"
        }, 
        {
            Icon: LocalLibraryIcon,
            name: "Mutual Friends"
        },
    ]

    async function handleSubmit() {
        try {
            await logout();
            history.push("/login");
        } catch {
            alert("Failed to log out");
        }
    }

    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        db.collection("organizations")
        .onSnapshot((snapshot) => 
            setOrganizations(snapshot.docs.map((doc) => ({
                organizationId: doc.id,
                organization: doc.data()
            })))
        );
    // eslint-disable-next-line
    }, [])

    return (
        <div className="organizationSearch">
            <div className="row" style={{ padding: 0, margin: 0 }}>
                <div className="organizationSearch__sidebar col-md-3">
                    <Navbar options={navbarOptions} />
                </div>
                <div className="organizationSearch__body col-md-9">
                    <div className="organizationSearch__header">
                        <div className="organizationSearch__headerText">
                            <h1>Hey there {currentUser.displayName}!</h1>
                            <h6>Let's get your organization social!</h6>
                        </div>
                        <div className="organizationSearch__searchbar">
                            <SearchIcon />
                            <input type="text" placeholder="Search for Organizations" />
                        </div>
                        <div onClick={handleSubmit} style={{cursor: "pointer"}}>
                            <ExitToAppIcon id="logOut"   style={{outline: "none"}} />
                        </div>
                    </div>
                    <div className="organizationSearch__organizations">
                        {organizations.map(({ organizationId, organization }) => (
                            <OrganizationCard 
                                key = {organizationId}
                                id = {organizationId}
                                emailAdd = {organization.emailAdd}
                                name = {organization.organizationName}
                                profilePic = {organization.profilePic}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrganizationSearch
