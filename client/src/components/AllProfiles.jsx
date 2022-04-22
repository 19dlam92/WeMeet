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
                            <Link className="nav-link" href="">Discover</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="">Questions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="">Likes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="">Messages</Link>
                        </li>
                        <li className="nav-item align-right">
                            <Link className="nav-link" href="/create">Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {
                profileList.map((profileItem) => {
                    <img src="" alt="" height="" width=""/>
                    // src="" passes in { profileItem.whateverImCallingTheImages }
                })
            }
        </>
    )
}

export default AllProfiles;