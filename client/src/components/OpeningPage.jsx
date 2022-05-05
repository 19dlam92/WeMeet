import React from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';

const OpeningPage = () => {

    // const loginModal = {
    //     postion: 'fixed',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     backgroundColor: '#FFF',
    //     padding: '50px',
    //     zIndex: 1000
    // }

    // const overlay = {
    //     postion: 'fixed',
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     backgroundColor: 'rgba(0, 0, 0, .7)',
    //     zIndex: 1000
    // }


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
                    {/* <div style = { overlay }/>
                    <div style = { loginModal }>
                        <button >Test Modal</button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default OpeningPage;