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
                    <label>Email</label>
                    <input className="form-control" type="text" />
                    <p className="text-danger">{ formErrors.email?.message }</p>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" type="text" />
                    <p className="text-danger">{ formErrors.password?.message }</p>
                </div>
                <input className="btn btn-info" type="submit" value="Login" />
            </form>
            {/* goes to the dashboard */}
        </>
    )
}