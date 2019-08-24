import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import "../css/sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container faceBook">
        <a
          href="https://www.facebook.com/CocaColaUnitedStates/"
          target="_blank"
          title="Check their Facebook out"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} size="2x" color="white" />
        </a>
      </div>

      <div className="sidebar-container twitter">
        <a
          href="https://twitter.com/cocacola"
          target="_blank"
          title="Check their Twitter out"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" color="white" />
        </a>
      </div>

      <div className="sidebar-container linkedin">
        <a
          href="https://www.linkedin.com/company/the-coca-cola-company/"
          target="_blank"
          title="Check their Linkedin out"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="white" />
        </a>
      </div>
    </div>
  );
}
