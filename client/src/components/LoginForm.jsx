import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginErrors, setLoginErrors] = useState({});
    const history = useHistory();


    const loginHandler = (e) => {
        e.preventdefault();
        const loginInfo = {
            email,
            password,
        };

        axios.post("http://localhost:8000/api/datingProfile/login", loginInfo, { withCredentials: true })
            .then((response) => {
                console.log("LOGIN RESPONSE", response)
                if (response.data.errors) {
                    setLoginErrors(response.data.errors)
                } else {
                    history.push("/")
                }
            })
            .catch((err) => {
                console.error("ERRRRRRRRRRORRRRRRRRRRRRR", err)
            })
    }

    return(
        <>
            <form className="login-form" onSubmit = { loginHandler } >
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Email" onChange = { (e) => setEmail(e.target.value) } value = { email }/>
                    <p className="text-danger">{ loginErrors.email?.message }</p>
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" placeholder="Password" onChange = { (e) => setPassword(e.target.value) } value = { password }/>
                    <p className="text-danger">{ loginErrors.password?.message }</p>
                </div>
                <Link to = "/dashboard"><input className="btn btn-info" type="submit" value="Login" /></Link>
            </form>
            {/* <button className="btn btn-info"><Link to = "/dashboard">Home</Link></button> */}
        </>
    )
}

export default LoginForm;