import React, { Component } from "react";
import Facebook from "../images/facebook.png";
import Gmail from "../images/gmail.png";
import "../CSS/home.css";

export class Footer extends Component {
  render() {
    return (
      <div className="grayBackground footer">
        <h2>{"Contact Us"}</h2>
        <p>{"Pastor Carl (Bill) Yoder"}</p>
        <p>{"724-593-2396"}</p>
        <p>Mailing Address: PO Box 44, Jones Mills, PA, 15646</p>
        <p>308 Mountain View Rd, Donegal, PA</p>
        <div className="icons">
          <a href="mailto:valleybc@lhtot.org">
            <img className="contactImg" src={Gmail}></img>
          </a>
          <a href="https://www.facebook.com/groups/945411128817184/">
            <img className="contactImg" src={Facebook}></img>
          </a>
        </div>
      </div>
    );
  }
}
export default Footer;
