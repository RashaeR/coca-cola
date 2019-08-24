import React, { Component } from "react";
import logo from "../../img/img.png";
import { Link } from "react-router-dom";
import "../../css/header.css";

class Header extends Component {
  homeMouseHover = this.homeMouseHover.bind(this);
  aboutMouseHover = this.aboutMouseHover.bind(this);
  contactMouseHover = this.contactMouseHover.bind(this);

  state = {
    Home: false,
    About: false,
    Contact: false
  };

  homeMouseHover() {
    this.setState({ Home: !this.state.Home });
  }

  aboutMouseHover() {
    this.setState({ About: !this.state.About });
  }

  contactMouseHover() {
    this.setState({ Contact: !this.state.Contact });
  }

  render() {
    const homeCheck = this.state.Home ? "barStyleShow" : "barStyleNone";
    const aboutCheck = this.state.About ? "barStyleShow" : "barStyleNone";
    const contactCheck = this.state.Contact ? "barStyleShow" : "barStyleNone";

    return (
      <header className="headerStyle">
        <img className="logoStyle" src={logo} alt="logo" />
        <nav>
          <ul>
            <li>
              <Link
                className="linkStyle "
                to="/"
                onMouseEnter={this.homeMouseHover}
                onMouseLeave={this.homeMouseHover}
              >
                Home
              </Link>
              <div className={homeCheck} />
            </li>
            <li>
              <Link
                className="linkStyle"
                to="/maintenance"
                onMouseEnter={this.aboutMouseHover}
                onMouseLeave={this.aboutMouseHover}
              >
                About
              </Link>
              <div className={aboutCheck} />
            </li>
            <li>
              <Link
                className="linkStyle"
                to="/maintenance2"
                onMouseEnter={this.contactMouseHover}
                onMouseLeave={this.contactMouseHover}
              >
                Contact
              </Link>
              <div className={contactCheck} />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
