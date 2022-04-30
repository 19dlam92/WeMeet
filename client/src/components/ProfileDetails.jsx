import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const ProfileDetails = () => {

    const [profileDetails, setProfileDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost8000/profile/details/${id}`)
            .then((response) => {
                console.log("~~RESPONE/ID~~", response.data.results, id)
                setProfileDetails(response.data.results)
                
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return(
        <>
            <div className="profile-container">
                <div className="navbar-profile bg-dark text-light">
                    <div>
                        <h1>Image Upload / Image Carousel</h1>
                        <FontAwesomeIcon icon="fa-solid fa-chevron-right"></FontAwesomeIcon>
                        {/* {
                            profileDetails.map((profileImage, _id) => {
                                return(
                                    <div className="wrapper">
                                        <section id="section1">
                                            <div key = { _id }>
                                                <h3>Image Carousel</h3>
                                                <img src = { profileImage.upload } alt="Describe Image" height="" width=""/>
                                            </div>
                                        </section>
                                    </div>
                                )
                            })
                        } */}
                        <FontAwesomeIcon icon="fa-solid fa-chevron-left"></FontAwesomeIcon>
                    </div>
                    <div className="navbar-settings d-flex">
                        <FontAwesomeIcon icon="fa-solid fa-sliders"></FontAwesomeIcon>
                        <button className="btn btn-info w-100"><h3>Preferences</h3></button>
                        <FontAwesomeIcon icon="fa-solid fa-gear"></FontAwesomeIcon>
                        <button className="btn btn-info w-100"><h3>Settings</h3></button>
                    </div>
                </div>

                <div className="premium bg-dark mt-3 h-50">
                    <button className="btn btn-info w-100"><h3>WeMeet Premium</h3></button>
                </div>
                <div className="profile-descriptionsjustify-content-center mt-3">
                    <div className="description-1">
                        <textarea cols="70" rows="5" placeholder="About me . . . . "></textarea><hr />
                    </div>
                    <div className="description-2">
                        <textarea cols="70" rows="5" placeholder="Aspirations . . . . "></textarea><hr />
                    </div>
                    <div className="description-3">
                        <textarea cols="70" rows="5" placeholder="Hobbies . . . . "></textarea><hr />
                    </div>
                    <div className="description-4">
                        <textarea cols="70" rows="5" placeholder="Secrets . . . . "></textarea><hr />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ProfileDetails;