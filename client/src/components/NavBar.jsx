import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const NavBar = (props) => {

    const { id } = useParams();




    return(
        <>
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to = "/" className="navbar-brand">WeMeet</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        
                            <li className="nav-item"><Link to = "/discover" className="nav-link">Discover</Link></li>
                        
                            <li className="nav-item"><Link to = "/questions" className="nav-link">Questions</Link></li>
                        
                            <li className="nav-item"><Link to = "/likes" className="nav-link">Likes</Link></li>
                        
                            <li className="nav-item"><Link to = "/messages" className="nav-link">Messages</Link></li>
                        
                            <li className="nav-item"><Link to = {`/profile/details/${id}`} className="nav-link" >Profile</Link></li>
                        
                            <li className="nav-item"><Link to = "/login" className="nav-link">Login</Link></li>
                        
                            <li className="nav-item"><Link to = "/create" className="nav-link">Sign Up</Link></li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar;