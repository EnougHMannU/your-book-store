import React from "react";
import "./cssfiles/Aboutus.css";

export default function Aboutus() {
  return (
    <div className="about-container">

      {/* Header Section */}
      <div className="about-header text-center">
        <h1>About Our Bookstore</h1>
        <p>
          Discover a world of knowledge, imagination, and inspiration. 
          We bring you carefully curated books that transform your thinking.
        </p>
      </div>

      {/* Content Section */}
      <div className="container">
        <div className="row justify-content-center">

          {/* Card 1 */}
          <div className="col-md-4">
            <div className="about-card">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Founder"
                className="about-img"
              />
              <h5 className="card-title">MannU</h5>
              <p className="card-text">Founder & Developer</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="about-card">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="Team"
                className="about-img"
              />
              <h5 className="card-title">Our Mission</h5>
              <p className="card-text">
                To make reading accessible, affordable, and enjoyable for everyone.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="about-card">
              <img
                src="https://i.pravatar.cc/150?img=45"
                alt="Vision"
                className="about-img"
              />
              <h5 className="card-title">Our Vision</h5>
              <p className="card-text">
                Building a community where books inspire growth and success.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="about-footer text-center">
        <p>
           “A reader lives a thousand lives before he dies...”  
        </p>
      </div>

    </div>
  );
}