import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProfiles = (props) => {

    const [profileList, setProfileList] = useState([]);
    const { id } = useState();

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
            {
                profileList.map((profileItem) => {
                    return(
                        <div key = { profileItem._id }>
                            <Link to href = { `/profile/details/${ profileItem._id }` }>Psuedo Data: { profileItem.firstName }</Link>
                            <Link><img src="" alt="" height="" width=""/></Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default AllProfiles;