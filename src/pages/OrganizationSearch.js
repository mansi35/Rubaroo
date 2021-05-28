import React from 'react'
import '../css/OrganizationSearch.css'
import SearchIcon from '@material-ui/icons/Search';
import OrganizationCard from '../components/OrganizationCard';
import Navbar from "../components/Navbar";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import BookIcon from '@material-ui/icons/Book';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

function OrganizationSearch() {
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
    return (
        <div className="organizationSearch">
            <div className="row" style={{ padding: 0, margin: 0 }}>
                <div className="organizationSearch__sidebar col-md-2">
                    <Navbar options={navbarOptions} />
                </div>
                <div className="organizationSearch__body col-md-10">
                    <div className="organizationSearch__header">
                        <div className="organizationSearch__headerText">
                            <h1>Hey there Username!</h1>
                            <h6>Let's get your organization social!</h6>
                        </div>
                        <div className="organizationSearch__searchbar">
                            <SearchIcon />
                            <input type="text" placeholder="Search for Organizations" />
                        </div>
                    </div>
                    <div className="organizationSearch__organizations">
                        <OrganizationCard />
                        <OrganizationCard />
                        <OrganizationCard />
                        <OrganizationCard />
                        <OrganizationCard />
                        <OrganizationCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrganizationSearch
