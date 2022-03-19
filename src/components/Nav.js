import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <nav className="nav">
      <FontAwesomeIcon icon={faEarthAmericas} className="nav--icon" />
      <h5>my travel journal.</h5>
    </nav>
  );
}
