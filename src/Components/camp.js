import React, { Component } from "react";
import "../CSS/home.css";
import CampImg from "../images/camp.jpg";
import Header from "./header.js";

export class Camp extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="twoCol">
          <div className="halfWidthLeft">
            <img className="campLogo" alt="" src={CampImg}></img>
          </div>
          <div className="halfWidthRight">
            <h3 className="jobTitle">{"Camp Penial"}</h3>
            <h6 className="jobSubheader">
              {"So Jacob named the place Peniel, for he said, I have seen God face to face, yet my life has been preserved. -Genesis 32:30"}
            </h6>
            <p className="description2">Dates for 2019 Camp
              <br></br>
              Senior Camp: June 11 - 18 (ages 14 - 18)
              <br></br>
              Junior Camp: June 18 - 25 (ages 10 - 13)
              <br></br>
              Mini Camp: June 25 - June 28 (ages 6 - 9)
            <br></br>
            </p>
            <a href="http://pacamppeniel.weebly.com"  target="_blank">More Information</a>
            <br></br>
            <a href="http://valleybrethrenchurch.org/camp_registration_form_2014.pdf"  target="_blank">Camper Application</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Camp;
