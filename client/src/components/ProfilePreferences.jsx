import React, { useState } from 'react';


const ProfilePreferences = () => {

    const [gender, setGender] = useState("");
    const [language, setLanguage] = useState("");
    const [orientation, setOrientation] = useState("");
    const [ethnicity, setEthnicity] = useState("");
    const [employment, setEmployment] = useState("");
    const [astrologicalSign, setAstrologicalSign] = useState("");





    return(
        <>
            <form onSubmit="">
                <div className="mt-3">
                    <select name="gender" id="gender" onChange = { (e) => setGender(e.target.value) } value = { gender }>
                        <option value="select-one">Select Gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="trans-female">Trans Female</option>
                        <option value="trans-male">Trans Male</option>
                        <option value="non-binary">Non-binary</option>
                    </select>
                </div>
                <div className="mt-3">
                    <select name="language" id="language" onChange = { (e) => setLanguage(e.target.value) } value = { language }>
                        <option value="select-one">Select Language</option>
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="vietnamese">Vietnamese</option>
                        <option value="chinese">Chinese</option>
                        <option value="indian">Indian</option>
                    </select>
                </div>
                <div className="mt-3">
                    <select name="orientation" id="orientation" onChange = { (e) => setOrientation(e.target.value) } value = { orientation }>
                        <option value="select-one">Select Orientation</option>
                        <option value="straight">Straight</option>
                        <option value="gay">Gay</option>
                        <option value="lesbian">Lesbian</option>
                        <option value="bisexual">Bisexual</option>
                        <option value="asexual">Asexual</option>
                        <option value="demisexual">Demisexual</option>
                        <option value="questioning">Questioning</option>
                    </select>
                </div>
                <div className="mt-3">
                    <select name="ethnicity" id="ethnicity" onChange = { (e) => setEthnicity(e.target.value) } value = { ethnicity }>
                        <option value="select-one">Select Ethnicity</option>
                        <option value="asian">Asian</option>
                        <option value="black">Black</option>
                        <option value="hispanic/latin">Hispanic/Latin</option>
                        <option value="indian">Indian</option>
                        <option value="white">White</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mt-3">
                    <select name="employment" id="employment" onChange = { (e) => setEmployment(e.target.value) } value = { employment }>
                        <option value="select-one">Select Employment</option>
                        <option value="employed-full-time">Employed Full-Time</option>
                        <option value="employed-part-time">Employed Part-Time</option>
                        <option value="freelance-worker">Freelance Worker</option>
                        <option value="self-employed">Self-Employed</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="retired">Retired</option>
                    </select>
                </div>
                <div className="mt-3">
                    <select name="astrologicalSign" id="astrologicalSign" onChange = { (e) => setAstrologicalSign(e.target.value) } value = { astrologicalSign }>
                        <option value="select-one">Select Sign</option>
                        <option value="aquarius">Aquarius</option>
                        <option value="pisces">Pisces</option>
                        <option value="aries">Aries</option>
                        <option value="taurus">Taurus</option>
                        <option value="gemini">Gemini</option>
                        <option value="cancer">Cancer</option>
                        <option value="leo">Leo</option>
                        <option value="virgo">Virgo</option>
                        <option value="libra">Libra</option>
                        <option value="scorpio">Scorpio</option>
                        <option value="sagittarius">Sagittarius</option>
                        <option value="capricorn">Capricorn</option>
                    </select>
                </div>
                <input type="submit" value="Set Preferences"/>
            </form>
        </>
    )
}

export default ProfilePreferences;