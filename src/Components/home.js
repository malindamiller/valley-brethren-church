import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Footer from "./footer.js";
import Header from "./header.js";
import Calendar from "./calendar.js";
import Church from "../images/Valley.jpg";
import "../CSS/home.css";

export class Home extends Component {
  render() {
    const insideStyles = {
      background: "black",
      opacity: 0.8,
      "font-size": "2.5em",
      "font-weigh": "bold",
      color: "white",
      padding: 20,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    };
    return (
      <div>
      <Header />
        <Parallax bgImage={Church} strength={500} blur={{ min: 1, max: 1 }}>
          <div style={{ height: 700 }}>
            <div style={insideStyles}>Valley Brethern Church
              <br></br>
              <p className="mainSmallFont">Seeking to know Christ and make Him better known</p>
              <p className="mainSmallFont">Sunday School: 9:30</p>
              <p className="mainSmallFont">Worship: 10:30</p>
            </div>
          </div>
        </Parallax>
        <Footer />
      </div>
    );
  }
}
export default Home;
