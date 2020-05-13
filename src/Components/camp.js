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
            <br></br>
            <h3>Camp has been canceled for 2020 due to COVID-19</h3>
            <a className = "black-link" href="http://pacamppeniel.weebly.com"  target="_blank">More Information</a>
            <br></br>
            <a className = "black-link" href="http://valleybrethrenchurch.org/camp_registration_form_2014.pdf"  target="_blank">Camper Application</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Camp;
