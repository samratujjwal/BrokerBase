import React, { useState, forwardRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { ToastContainer, toast } from "react-toastify";
function Signup({ onLoginSuccess }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
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
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    console.log("Submit Button click!");
    e.preventDefault();
    try {
      const { data } = await api.post(
        "/signup",
        {
          ...inputValue,
        },
        { withCredentials: true },
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        onLoginSuccess();
        setTimeout(() => {
          navigate("/signup");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        handleError(error.response.data.message);
      } else {
        handleError("An unexpected error occurred. Please try again.");
      }
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit} style={{ width: "80%" }}>
        <div className="mb-3">
          <label htmlFor="Username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="Username"
            placeholder="Enter username"
            name="username"
            value={username}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="Password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-3">
          Signup
        </button>
        <span>Already have an account? please Login</span>
      </form>
      <ToastContainer />
    </>
  );
}

export default Signup;
