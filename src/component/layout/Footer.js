import React, { Component } from "react";

import { Hashtag } from "react-twitter-widgets";
import "../../css/footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <p className="footer-title">
          If you agree spread the word with #Ahhmazing
        </p>
        <div className="twitter-icon">
          <Hashtag hashtag="#Ahhmazing" options={{ size: "large" }} />
        </div>
      </div>
    );
  }
}

export default Footer;
