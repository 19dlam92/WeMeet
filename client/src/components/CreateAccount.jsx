import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom'

const CreateAccount = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [registerErrors, setRegisterErrors] = useState({});
    const history = useHistory();

    const registerHandler = (e) => {
        e.preventDefault();
        const registerInfo = { 
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        };

        axios.post("http://localhost:8000/api/datingProfile/register", registerInfo, { withCredentials: true })
            .then((response) => {
                console.log("~~~~RESPONSE~~~~", response)
                if (response.data.errors) {
                    setRegisterErrors(response.data.errors);
                } else {
                    // props.setFormSubmitted(!props.formSubmitted);
                    history.push("/")
                }
                // verify this route
                // may not to be modified
            })
            .catch((err) => {
                console.error("ERRRRRRRRRRORRRRRRRRRRRRR", err)
            })
    }

    return(
        <>
            <form className="create-form" onSubmit = { registerHandler }>
                <div className="form-group">
                    <input className="form-control" type="text" name="firstName" placeholder="First Name" onChange = { (e) => setFirstName(e.target.value) } value = { firstName }/>
                    <p className="text-danger">{ registerErrors.firstName?.message }</p>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="lastName" placeholder="Last Name" onChange = { (e) => setLastName(e.target.value) } value = { lastName }/>
                    <p className="text-danger">{ registerErrors.lastName?.message }</p>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="email" placeholder="Email" onChange = { (e) => setEmail(e.target.value) } value = { email }/>
                    <p className="text-danger">{ registerErrors.email?.message }</p>
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="Password" onChange = { (e) => setPassword(e.target.value) } value = { password }/>
                    <p className="text-danger">{ registerErrors.password?.message }</p>
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="confirmPassword" placeholder="Confirm Password" onChange = { (e) => setConfirmPassword(e.target.value) }/>
                    <p className="text-danger">{ registerErrors.confirmPassword?.message }</p>
                </div>
                <Link to = "/login"><input className="btn btn-info" type="submit" value="Create Account"/></Link>
            </form>
            {/* <button className="btn btn-info"><Link to = "/">Home</Link></button> */}
        </>
    )
}

export default CreateAccount;