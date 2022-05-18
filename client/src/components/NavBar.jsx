import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

const NavBar = (props) => {

    const { id } = useParams();
    const history = useHistory();


    const logoutHandler = () => {
        axios.get("http://localhost:8000/api/datingProfile/logout", { withCredentials: true })
            .then((response) => {
                history.pushState("/")
            })
            .catch((err) => {
                console.error("ERRRRRRRRRRORRRRRRRRRRRRR", err)
            })
    }


    return(
        <>
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to = "/dashboard" className="navbar-brand">WeMeet</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        
                        <li className="nav-item"><Link to = "/discover" className="nav-link">Discover</Link></li>
                        
                        <li className="nav-item"><Link to = "/questions" className="nav-link">Questions</Link></li>
                        
                        <li className="nav-item"><Link to = "/likes" className="nav-link">Likes</Link></li>
                        
                        <li className="nav-item"><Link to = "/messages" className="nav-link">Messages</Link></li>
                        
                        <li className="nav-item"><Link to = {`/profile/details/${id}`} className="nav-link">Profile</Link></li>
                        
                        <li className="nav-item"><Link to = "/" onClick = { logoutHandler }className="nav-link">Logout</Link></li>
                        
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar;