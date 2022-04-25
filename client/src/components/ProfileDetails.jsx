import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


const ProfileDetails = () => {

    const [profileDetails, setProfileDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost8000//profile/details/${id}`)
            .then((response) => {
                setProfileDetails(response.data.results)
                // history.push("/")
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return(
        <>
            <div className="navbar-profile bg-dark text-light">
                <div>
                    <h1>this is the info</h1>
                    <img src="" alt="" height="" width=""/>
                </div>
                <div className="navbar-settings bg-dark text-light d-flex">
                    <i>icon</i>
                    <Link to href="/profile/preferences">Preferences</Link>
                    <i>icon</i>
                    <Link to href="/profile/settings">Settings</Link>
                </div>
                <div className="premium">
                    <Link to href="/profile/premium">WeMeet Premium</Link>
                </div>
            </div>
        </>
    )
}

export default ProfileDetails;