import React from 'react';
import { Link, useParams } from 'react-router-dom';

const NavBar = () => {

    const { id } = useParams();

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">WeMeet</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to href="" className="nav-link">Discover</Link>
                        </li>
                        <li className="nav-item">
                            <Link to href="" className="nav-link">Questions</Link>
                        </li>
                        <li className="nav-item">
                            <Link to href="" className="nav-link">Likes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to href="" className="nav-link">Messages</Link>
                        </li>
                        <li className="nav-item">
                            <Link to href={`/profile/details/${id}`} className="nav-link" >Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to href="/create" className="nav-link" >Login | Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;