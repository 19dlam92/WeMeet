import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const AllProfiles = () => {

    const [profileList, setProfileList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/DatingProfile")
        .then((response) => {
            console.log("~~~~RESPONSE~~~~", response)
            setProfileList(response.data.results)
        })
        .catch((err) => {
            console.error("ERRRRRRRRRRORRRRRRRRRRRRR",err)
        })
    }, [])

    return(
        <>
            <div className="container">
                <div className="nav-bar d-flex">
                    <div className="nav-bar-links d-flex">
                        <h2>WeMeet</h2>
                        <h4>Discover</h4>
                        <h4>Questions</h4>
                        <h4>Likes</h4>
                        <h4>Messages</h4>
                    </div>
                    <div className="nav-bar-profile d-flex">
                        <h4>Profile</h4>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default AllProfiles;