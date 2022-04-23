import React, { useState, useEffect } from "react";
import axios from 'axios';

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
            {
                profileList.map((profileItem, index) => {
                    return(
                        <div key = { index }>
                            <p>Psuedo Data: { profileItem.firstName }</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default AllProfiles;