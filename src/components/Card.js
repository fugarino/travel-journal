import React from "react";
import Data from "../Data";
import mountFuji from "../images/chris-fowler-78XvFtNTCBw-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Card() {
  return (
    <div className="card">
      <img src={mountFuji} className="card--img" />
      <div className="card--info">
        <div className="card--location">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="card--location-icon"
          />
          <div className="card--location-name">JAPAN</div>
          <a className="card--location-google">View on Google Maps</a>
        </div>
        <h2 className="card--title">Mount Fuji</h2>
        <div className="card--date">
          <span className="card--start-date">12 Jan, 2021</span>-
          <span className="card--end-date">24 Jan, 2021</span>
        </div>
        <p className="card--description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
