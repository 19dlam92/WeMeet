import React, { useState } from 'react';

const ProfileUpdate = () => {

    const [imageUpload, setImageUpload] = useState("");
    const [formInfo, setFormInfo] = useState({});






    return(
        <>
            <form enctype="multipart/form-data">
                <div class="form-group">
                    <h1>Image Upload</h1>
                    <h1>and</h1>
                    <h1>Image Carousel</h1>
                    <input type="file" class="form-control-file" name="imageUpload"/>
                    {/* <input type="submit" value="Get me the stats!" class="btn btn-default"/>*/}
                </div>
            </form>
        </>
    )
}

export default ProfileUpdate;