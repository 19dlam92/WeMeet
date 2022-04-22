import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const CreateAccount = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [language, setLanguage] = useState("");
    const [orientation, setOrientation] = useState("");
    const [ethnicity, setEthnicity] = useState("");
    const [employment, setEmployment] = useState("");
    const [astrologicalSign, setAstrologicalSign] = useState("");
    const history = useHistory();
    const [formErrors, setFormErrors] = useState({});

    const formHandler = (e) => {
        e.preventDefault();
        const formInfo = { 
            firstName, 
            lastName, 
            age, 
            language, 
            orientation,
            ethnicity,
            employment,
            astrologicalSign,
        };

        axios.post("http://localhost:8000/api/DatingProfile", formInfo)
            .then((response) => {
                console.log("~~~~RESPONSE~~~~", response)
                if (response.data.error) {
                    setFormErrors(response.data.error.errors);
                } else {
                    props.setFormSubmitted(!props.formSubmitted);
                    history.push("/")
                }
            })
            .catch((err) => {
                console.error("ERRRRRRRRRRORRRRRRRRRRRRR", err)
            })
    }

    return(
        <>
            <form onSubmit = { formHandler }>
                <div className="form-group">
                    <label>First Name</label>
                    <input className="form-control" type="text" onChange = { (e) => setFirstName(e.target.value) } value = { firstName }/>
                    <p className="text-danger">{ formErrors.firstName?.message }</p>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input className="form-control" type="text" onChange = { (e) => setLastName(e.target.value) } value = { lastName }/>
                    <p className="text-danger">{ formErrors.lastName?.message }</p>
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input className="form-control" type="text" onChange = { (e) => setAge(e.target.value) } value = { age }/>
                    <p className="text-danger">{ formErrors.age?.message }</p>
                </div>
                <div className="form-group">
                    <select name="language" id="language" >
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="vietnamese">Vietnamese</option>
                        <option value="chinese">Chinese</option>
                        <option value="indian">Indian</option>
                    </select>
                    <p className="text-danger">{ formErrors.language?.message }</p>
                </div>
                <div className="form-group">
                    <select name="orientation" id="orientation" >
                        <option value="straight">Straight</option>
                        <option value="gay">Gay</option>
                        <option value="bisexual">Bisexual</option>
                        <option value="asexual">Asexual</option>
                        <option value="demisexual">Demisexual</option>
                        <option value="questioning">Questioning</option>
                    </select>
                    <p className="text-danger">{ formErrors.orientation?.message }</p>
                </div>
                <div className="form-group">
                    <select name="ethnicity" id="ethnicity" >
                        <option value="asian">Asian</option>
                        <option value="black">Black</option>
                        <option value="hispanic/latin">Hispanic/Latin</option>
                        <option value="indian">Indian</option>
                        <option value="white">White</option>
                        <option value="other">Other</option>
                    </select>
                    <p className="text-danger">{ formErrors.ethnicity?.message }</p>
                </div>
                <div className="form-group">
                    <select name="employment" id="employment" >
                        <option value="employed-full-time">Employed Full-Time</option>
                        <option value="employed-part-time">Employed Part-Time</option>
                        <option value="freelance-worker">Freelance Worker</option>
                        <option value="self-employed">Self-Employed</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="retired">Retired</option>
                    </select>
                    <p className="text-danger">{ formErrors.employment?.message }</p>
                </div>
                <div className="form-group">
                    <select name="astrologicalSign" id="astrologicalSign" >
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
                    <p className="text-danger">{ formErrors.astrologicalSign?.message }</p>
                </div>
                <input type="submit" value="Create Account"/>
            </form>
        </>
    )
}

export default CreateAccount;