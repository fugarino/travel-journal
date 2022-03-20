import React from "react";
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
        <h2 className="card--title"></h2>
        <div className="card--date">
          <span className="card--start-date"></span>
          <span className="card--end-date"></span>
        </div>
        <p className="card--description"></p>
      </div>
    </div>
  );
}
