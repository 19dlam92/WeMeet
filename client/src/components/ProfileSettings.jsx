import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const ProfileSettings = () => {

    const { id } = useParams();
    const history = useHistory();


    const deletehandler = () => {
        axios.delete(`http://localhost:8000/profile/settings/${id}`)
            .then((response) => {
                history.push("/")
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return(
        <>
            <div>
                <p>WeMeet Premium</p>
            </div>
            <div>
                <p>Notifications</p>
                <p>Privacy</p>
                <p>Email Address</p>
                <p>Password</p>
                <p>Phone Number</p>
            </div>
            <div>
                <p>Disable Account</p>
                <p>Sign Out</p>
            </div>
            <div>
                <p>About</p>
                <p>Privacy Preferences</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
        </>
    )
}

export default ProfileSettings;