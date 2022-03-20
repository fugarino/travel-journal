import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  function capitalize(str) {
    return str.toUpperCase();
  }
  return (
    <div className="card">
      <img src={props.card.imageUrl} className="card--img" />
      <div className="card--info">
        <div className="card--location">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="card--location-icon"
          />
          <div className="card--location-name">
            {capitalize(props.card.location)}
          </div>
          <a
            className="card--location-google"
            href={props.card.googleMapsUrl}
            target="_blank"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="card--title">{props.card.title}</h2>
        <div className="card--date">
          <span className="card--start-date">{props.card.startDate}</span>-
          <span className="card--end-date">{props.card.endDate}</span>
        </div>
        <p className="card--description">{props.card.description}</p>
      </div>
    </div>
  );
}
