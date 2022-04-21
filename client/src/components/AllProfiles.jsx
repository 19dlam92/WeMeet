import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const AllProfiles = () => {





    return(
        <>
            <h1>WeMeet</h1>
            <div className="nav-bar d-flex">
                <div className="nav-bar-links d-flex">
                    <h2>We<span style="color: blue">Meet</span></h2>
                    <Link><h3>Discover</h3></Link>
                    <Link><h3>Questions</h3></Link>
                    <Link><h3>Likes</h3></Link>
                    <Link><h3>Messages</h3></Link>
                </div>
                <div className="nav-bar-profile d-flex">
                    <Link><h3>Profile</h3></Link>
                </div>
            </div>
        </>
    )
}

export default AllProfiles;