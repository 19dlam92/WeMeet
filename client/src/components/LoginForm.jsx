import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formErrors, setFormErrors] = useState({});


    const loginHandler = (e) => {
        e.preventdefault();
        const formInfo = {
            email,
            password,
        };
    }

    return(
        <>
            <form className="login-form" onSubmit = { loginHandler } >
                <div className="form-group">
                    <label></label>
                    <input className="form-control" type="text" placeholder="Email"/>
                    <p className="text-danger">{ formErrors.email?.message }</p>
                </div>
                <div className="form-group">
                    <label></label>
                    <input className="form-control" type="text" placeholder="Password"/>
                    <p className="text-danger">{ formErrors.password?.message }</p>
                </div>
                <input className="btn btn-info" type="submit" value="Login" />
            </form>
            <button className="btn btn-info"><Link to = "/dashboard">Home</Link></button>
        </>
    )
}

export default LoginForm;