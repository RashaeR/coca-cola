import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/layout/Header";
import Carousel from "./component/Carousels";
import Body from "./component/layout/Body";
import Footer from "./component/layout/Footer";
import Sidebar from "./component/Sidebar";
import Maintenance from "./component/layout/Maintenance";
import Maintenance2 from "./component/layout/Maintenance2";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Sidebar />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <h1>Growth Behaviors</h1>
                <div className="wrapper">
                  <Carousel />
                  <Body />
                  <Footer />
                </div>
              </React.Fragment>
            )}
          />
          <div className="wrapper">
            <Route path="/maintenance" component={Maintenance} />
            <Route path="/maintenance2" component={Maintenance2} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
