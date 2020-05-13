import React, { Component } from "react";
import "../CSS/home.css";
import ResponsiveMenu from 'react-responsive-navbar';
import { ICON_NAME } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

export class Header extends Component {
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={<div className="iconBack"><FaBars /></div>}
        menuCloseButton={<div className="iconBack"><FaWindowClose /></div>}
        changeMenuOn="500px"
        largeMenuClassName="menuBody"
        smallMenuClassName="smallMenu"
        menu={
          <ul className="menu">
          <li className="menu-item"><a className="white-links" href="/">Home</a></li>
          <li className="menu-item"><a className="white-links" href="./calendar">Calendar</a></li>
          <li className="menu-item"><a className="white-links" href="./camp">Camp</a></li>
          <li className="menu-item"><a className="white-links" href="./outreaches">Outreach</a></li>
          <li className="menu-item"><a className="white-links" href="./ministries">Ministries</a></li>
          <li className="menu-item"><a className="white-links" href="./about">About</a></li>
          </ul>
        }
      />
    );
  }
}
export default Header;
