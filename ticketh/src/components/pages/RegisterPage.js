import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import "../../App.css";

export default function SignUpPage() {
  //   const navigate = useNavigate();
  // useState for getting data and updating database
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // e.target gives the tag elements (input)
    setUser({
      // spread and assigning new values onChange
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    // register btn on click func
    const { name, email, password, cpassword } = user; // destructure user state
    if (name && email && password && password === cpassword) {
      // verify
      axios
        .post("http://localhost:5000/register", user) // sending post req and data of user to diff port host at backend (as react is on 3000)
        .then((res) => {
          alert(res.data.message); // res.data is an obj
          //   navigate("/login"); // after post req redirect to login page
        });
    } else {
      alert("Invalid input");
    }
  };

  return (
    <div className="text-center m-5-auto">
      <h2>Join us</h2>
      <h5>Create your personal account</h5>
      <form>
        <p>
          <label>Username</label>
          <br />
          <input type="text" name="name" onChange={handleChange} required />
        </p>
        <p>
          <label>Email address</label>
          <br />
          <input type="email" name="email" onChange={handleChange} required />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            requiredc
          />
        </p>
        <p>
          <label>Confirm Password</label>
          <br />
          <input
            type="password"
            name="cpassword"
            onChange={handleChange}
            requiredc
          />
        </p>
        <p>
          <button onClick={register} id="sub_btn" type="submit">
            Register
          </button>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
