import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const AllProfiles = (props) => {

    const [profileList, setProfileList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState({});
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/datingProfile/loggedInUser", { withCredentials: true })
        .then((response) => {
            console.log("~~~~RESPONSE~~~~", response)
            if (response.data.results) {
                // setProfileList(response.data.results)
                setLoggedInUser(response.data.results)
            }
        })
        .catch((err) => {
            console.error("ERRRRRRRRRRORRRRRRRRRRRRR", err)
            history.push("/")
        })
    }, [])
    // console.log(profileList)

    return(
        <>
            {
                profileList.map((profileItem) => {
                    return(
                        <div key = { profileItem._id }>
                            <Link to = { `/profile/details/${ profileItem._id }` }>Psuedo Data: { profileItem.firstName }</Link>
                            <Link><img src="" alt="" height="" width=""/></Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default AllProfiles;