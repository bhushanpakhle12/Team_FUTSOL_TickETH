import React from "react";
import { Link } from "react-router-dom";

import "./Event.css";

export default function Event() {
  return (
    <>
      <div class="container">
        <h1>Events Card</h1>
        <div class="cardcontainer">
          <div class="photo">
            <img src="https://images.pexels.com/photos/2346006/pexels-photo-2346006.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" />
            <div class="photos">Photos</div>
          </div>
          <div class="content">
            <p class="txt4">XYZ</p>
            <p class="txt5">ABCD</p>
          </div>
          <div class="footer">
            <p>
              <a class="waves-effect waves-light btn" href="#">
                <Link to="/eventbooking">Read More</Link>
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
