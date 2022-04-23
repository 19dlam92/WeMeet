import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


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
            <div>
                <h1>this is the info</h1>
            </div>
        </>
    )
}

export default ProfileDetails;