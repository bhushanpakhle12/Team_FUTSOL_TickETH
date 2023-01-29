import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import "../../App.css";

export default function SignInPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Getting the input tag's name and value
  const handleChange = (e) => {
    const { email, value } = e.target;
    console.log(email, value);
    setUser({
      ...user,
      [email]: value,
    });
  };

  const login = () => {
    // similar to register
    axios.post("http://localhost:5000/login", user).then((res) => {
      alert(res.data.message);
      //   setLoginUser(res.data.user); // setting new user to hook
      console.log("====================================");
      console.log(res.data);
      console.log("====================================");
      //   navigate("/"); // navigate to home once login
    });
    
  };

  return (
    <div className="text-center m-5-auto">
      <h2>Sign in to us</h2>
      <form action="/event">
        <p>
          <label>Username or email address</label>
          <br />
          <input onChange={handleChange} type="email" name="email" required />
        </p>
        <p>
          <label>Password</label>
          <Link to="/forget-password">
            <label className="right-label">Forget password?</label>
          </Link>
          <br />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            required
          />
        </p>
        <p>
          <button id="sub_btn" onClick={login} type="submit">
            Login
          </button>
        </p>
      </form>
      <footer>
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
