import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import "./Event.css";

export default function Event() {
  return (
    <>
      <div class="container">
        <h1>Events Card</h1>
        <div class="cardcontainer">
          <div class="photo">
            <img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
            <div class="photos">Dynamic</div>
          </div>
          <div class="content">
            <p class="txt4">Dimensional Spectrum</p>
            <p class="txt5">SPCC</p>
          </div>
          <div class="footer">
            <p>
              <a class="waves-effect waves-light btn" href="#">
                <Link to="/eventbooking"><Button variant="primary">Read More</Button>{' '}</Link>
              </a>
              <a id="heart">
                <span class="like">
                  <i class="fab fa-gratipay"></i>Like
                </span>
              </a>
            </p>
            <p class="txt3">
              <i class="far fa-clock"></i>10 Minutes Ago{" "}
              <span class="comments">
                <i class="fas fa-comments"></i>45 Comments
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
