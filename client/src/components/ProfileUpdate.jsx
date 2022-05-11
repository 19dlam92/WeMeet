import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProfileUpdate = () => {

    const [updateProfile, setUpdateProfile] = useState("");
    const [imageUpload, setImageUpload] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const { id } = useParams();


    const handleUpdate = (e) => {
        e.preventDefault();
        // const formData = new FormData();
        // formData.append('photo', newUser.photo);
        // formData.append('birthdate', newUser.birthdate);
        // formData.append('name', newUser.name);

        axios.put(`http://localhost:8000/api/datingProfile/${id}`)
            .then((response) => {

            })
            .catch((err) => {
                console.error("ERRRRRRRRRRORRRRRRRRRRRRR", err)
            })
    }




    return(
        <>
            <form onSubmit = { handleUpdate } enctype="multipart/form-data">
                <div class="form-group">
                    <h1>Image Upload</h1>
                    <h1>and</h1>
                    <h1>Image Carousel</h1>
                    <input type="file" class="form-control-file" name="imageUpload"/>
                    <input type="submit" value="Get me the stats!" class="btn btn-default"/>
                </div>
            </form>
        </>
    )
}

export default ProfileUpdate;