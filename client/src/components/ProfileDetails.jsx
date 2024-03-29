import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faEdit } from '@fortawesome/free-solid-svg-icons';


const ProfileDetails = () => {

    const [profileDetails, setProfileDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost8000/profile/details/${id}`)
            .then((response) => {
                console.log("~~RESPONSE--->ID~~", response.data.results, id)
                setProfileDetails(response.data.results)
            })
            .catch((err) => {
                console.error("ERRRRRRRRRRORRRRRRRRRRRRR", err)
            })
    }, [])

    return(
        <>
            <div className="profile-container">
                <div className="navbar-profile bg-dark text-light">
                    <div>
                    <form enctype="multipart/form-data">
                        <div class="form-group">
                            <h4>Create an edit button/icon</h4>
                            <h4>for ProfileUpdate component</h4>
                            <h4>This holds the Image Upload</h4>
                            <h1>Image Carousel</h1>
                            <h4>This will dynamically render uploads</h4>
                            <input type="file" className="form-control-file" accept=".png, .jpg, .jpeg" name="imageUpload"/>
                            <input type="submit" className="btn btn-default"/>
                        </div>
                    </form>
                    <i className="fa-solid fas fa-edit"/>
                    <i className="fa-solid fa-chevron-right"/>
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
                    <FontAwesomeIcon icon="fa-solid fa-chevron-left"/>
                    </div>
                    <div className="navbar-settings d-flex">
                        <FontAwesomeIcon icon="fa-solid fa-sliders"/>
                        <button className="btn btn-info btn-hover w-100">
                            <Link to = "/profile/preferences" className=""><h3>Preferences</h3></Link>
                        </button>
                        <FontAwesomeIcon icon="fa-solid fa-gear"/>
                        <button className="btn btn-info w-100">
                            <Link to = "/profile/settings" className=""><h3>Settings</h3></Link>
                        </button>
                    </div>
                </div>
                <div className="premium bg-dark mt-3 h-50">
                    <button className="btn btn-info w-100">
                        <Link to = "/profile/premium" className=""><h3>WeMeet Premium</h3></Link>
                    </button>
                </div>
                <div className="profile-descriptionsjustify-content-center mt-3">
                    <div className="description-1">
                        <textarea cols="70" rows="5" placeholder="About me . . . . "/><hr/>
                    </div>
                    <div className="description-2">
                        <textarea cols="70" rows="5" placeholder="Aspirations . . . . "/><hr/>
                    </div>
                    <div className="description-3">
                        <textarea cols="70" rows="5" placeholder="Hobbies . . . . "/><hr/>
                    </div>
                    <div className="description-4">
                        <textarea cols="70" rows="5" placeholder="Secrets . . . . "/><hr/>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ProfileDetails;