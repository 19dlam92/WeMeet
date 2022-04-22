import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const AllProfiles = (props) => {

    const [profileList, setProfileList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/DatingProfile")
        .then((response) => {
            console.log("~~~~RESPONSE~~~~", response)
            setProfileList(response.data.results)
        })
        .catch((err) => {
            console.error("ERRRRRRRRRRORRRRRRRRRRRRR", err)
        })
    }, [props.formSubmitted])

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="">WeMeet</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="">Discover</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Questions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Likes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Messages</a>
                        </li>
                        <li className="nav-item align-right">
                            <a className="nav-link" href="/create">Profile</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default AllProfiles;