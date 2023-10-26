import React from "react";
import service1 from "../../assets/images/service-1.png";
import service2 from "../../assets/images/service-3.png";
import service3 from "../../assets/images/service-2.png";
import { FaArrowRight } from "react-icons/fa";
import "./styles.css";
import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="service" id="service">
      <div className="container">
        <p className="section-subtitle">Our Services</p>
        <h2 className="h2 section-title">Our Main Focus</h2>
        <ul className="service-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img src={service1} alt="Service icon" />
              </div>
              <h3 className="h3 card-title">
                <a href="#">Buy a home</a>
              </h3>
              <p className="card-text">
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </p>
              <a href="#" className="card-link">
                <span>Find A Home</span>
                <FaArrowRight />
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img src={service2} alt="Service icon" />
              </div>
              <h3 className="h3 card-title">
                <a href="#">Sell a home</a>
              </h3>
              <p className="card-text">
                With our expert guidance, your property can find its perfect
                match. List your home with us and experience a seamless selling
                process.
              </p>
              <a href="#" className="card-link">
                <span>Sell A Home</span>
                <FaArrowRight />
              </a>
            </div>
          </li>
          <li>
            <div className="service-card">
              <div className="card-icon">
                <img src={service3} alt="Service icon" />
              </div>
              <h3 className="h3 card-title">
                <a href="#">EMI Calculator</a>
              </h3>
              <p className="card-text">
                "Empower yourself with knowledge and make well-informed
                decisions about your dream home with our EMI calculator. .{" "}
              </p>{" "}
              <a href="#" className="card-link">
              {/* <Link to='/emi'> */}
                <span>Budget your way</span>
                <FaArrowRight />                
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Services;
