import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">WeMeet</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="">Discover</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="">Questions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="">Likes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="">Messages</Link>
                        </li>
                        <li className="nav-item align-right">
                            <Link className="nav-link" href="/create">Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;