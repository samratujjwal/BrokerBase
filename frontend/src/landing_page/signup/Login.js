import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function Login({ onLoginSuccess }) {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });
    const { email, password } = inputValue;
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "top-right",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                //"https://brokerbase.onrender.com/login",
                "http://localhost:3002/login",
                {
                    ...inputValue,
                },
                { withCredentials: true }
            );
            //console.log(data);
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                onLoginSuccess();
                setTimeout(() => {
                    navigate("/signup");
                }, 1000);
                setInputValue({
                    email: "",
                    password: "",
                });
                // console.log("About to call onLoginSuccess");
                // console.log("Document cookies after login:", document.cookie);
                onLoginSuccess();
                console.log(" called onLoginSuccess");
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }

    };
    return (
        <>
            <form onSubmit={handleSubmit} style={{ width: "80%" }}>
                <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="loginEmail"
                        name="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={handleOnChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="loginPassword"
                        name="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={handleOnChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
            </form>
            <ToastContainer />
        </>
    );
}

export default Login;