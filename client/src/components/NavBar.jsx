import React from 'react';
import { Link, useParams } from 'react-router-dom';

const NavBar = (props) => {

    const { id } = useParams();



    return(
        <>
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to = "/" className="navbar-brand">WeMeet</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        
                            <Link to = "/discover" className="nav-link"><li className="nav-item">Discover</li></Link>
                        
                            <Link to = "/questions" className="nav-link"><li className="nav-item">Questions</li></Link>
                        
                            <Link to = "/likes" className="nav-link"><li className="nav-item">Likes</li></Link>
                        
                            <Link to = "/messages" className="nav-link"><li className="nav-item">Messages</li></Link>
                        
                            <Link to = {`/profile/details/${id}`} className="nav-link" ><li className="nav-item">Profile</li></Link>
                        
                            <Link to = "/login" className="nav-link"><li className="nav-item">Login</li></Link>
                        
                            <Link to = "/create" className="nav-link"><li className="nav-item">Sign Up</li></Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar;