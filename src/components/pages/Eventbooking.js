import React, { useState } from "react";
import axios from "axios";

import "./Eventbooking.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BasicExample() {
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    tickets: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // e.target gives the tag elements (input)
    setBooking({
      // spread and assigning new values onChange
      ...booking,
      [name]: value,
    });
  };

  const bookEvent = () => {
    // register btn on click func
    axios
      .post("http://localhost:5000/bookEvents", booking) // sending post req and data of user to diff port host at backend (as react is on 3000)
      .then((res) => {
        alert(res.data.message); // res.data is an obj
        // navigate("/login");
        // navigate("/login"); // after post req redirect to login page
      });
  };

  return (
    <div className="contain">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="phone"
            type="text"
            placeholder="Enter your phone number"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Comment"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>No. of Tickets</Form.Label>
          <Form.Select name="tickets" onChange={handleChange} required>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-5" controlId="formBasicText">
          <Form.Label>Price per ticket - Rs.800</Form.Label>
        </Form.Group>
        <Form.Group className="mb-5" controlId="formBasicText">
          <Form.Label>Tickets Remaining - 50</Form.Label>
        </Form.Group>
        <Button variant="primary" onClick={bookEvent} type="submit">
          Send Your Booking
        </Button>
      </Form>
    </div>
  );
}
