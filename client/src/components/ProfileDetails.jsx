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
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return(
        <>
            <div className="profile-container">
                <div className="navbar-profile bg-dark text-light">
                    <div>
                        <h1>ProfileDetails</h1>
                        <img src="" alt="" height="" width=""/>
                        {/* image upload here */}
                    </div>
                    <div className="navbar-settings d-flex justify-content-around">
                        <img src="" alt="" />
                        <Link to href="/profile/preferences"><h3>Preferences</h3></Link>
                        <img src="" alt="" />
                        <Link to href="/profile/settings"><h3>Settings</h3></Link>
                    </div>
                </div>

                <div className="premium bg-dark mt-3 h-50">
                    <Link to href="/profile/premium"><h3>WeMeet Premium</h3></Link>
                </div>
                <div className="profile-descriptionsjustify-content-center mt-3">
                    <div className="description-1">
                        <textarea cols="70" rows="5" placeholder="About me . . . . "></textarea><hr />
                    </div>
                    <div className="description-2">
                        <textarea cols="70" rows="5" placeholder="Aspirations . . . . "></textarea><hr />
                    </div>
                    <div className="description-3">
                        <textarea cols="70" rows="5" placeholder="Hobbies . . . . "></textarea><hr />
                    </div>
                    <div className="description-4">
                        <textarea cols="70" rows="5" placeholder="Secrets . . . . "></textarea><hr />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ProfileDetails;