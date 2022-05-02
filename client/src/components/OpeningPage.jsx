import React from "react";
import { Link } from "react-router-dom";


const OpeningPage = () => {




    return(
        <>
            <div className="homepage navbar-expand-lg navbar-light bg-light d-flex">
                <div className="home">
                    <h3>WeMeet</h3>
                </div>
                <div className="create-account position-relative">
                    <ul className="navbar-nav mr-auto position-absolute-end">
                        <li className="nav-item"><Link to = "/login" className="nav-link">Login</Link></li>
                        <li className="nav-item"><Link to = "/create" className="nav-link">Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default OpeningPage;